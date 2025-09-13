import { jaroWinkler } from '@skyra/jaro-winkler';

import { config } from '../renderer/renderer';
import { LRC } from '../parsers/lrc';

import type { LyricProvider, LyricResult, SearchSongInfo } from '../types';

export class LRCLib implements LyricProvider {
  name = 'LRCLib';
  baseUrl = 'https://lrclib.net';

  async search({
    title,
    alternativeTitle,
    artist,
    album,
    songDuration,
    tags,
  }: SearchSongInfo): Promise<LyricResult | null> {
    let query = new URLSearchParams({
      artist_name: artist,
      track_name: title,
    });

    query.set('album_name', album!);
    if (query.get('album_name') === 'undefined') {
      query.delete('album_name');
    }

    let url = `${this.baseUrl}/api/search?${query.toString()}`;
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error(`bad HTTPStatus(${response.statusText})`);
    }

    let data = (await response.json()) as LRCLIBSearchResponse;
    if (!data || !Array.isArray(data)) {
      throw new Error(`Expected an array, instead got ${typeof data}`);
    }

    if (data.length === 0) {
      if (!config()?.showLyricsEvenIfInexact) {
        return null;
      }

      // Try to search with the alternative title (original language)
      const trackName = alternativeTitle || title;
      query = new URLSearchParams({ q: `${trackName}` });
      url = `${this.baseUrl}/api/search?${query.toString()}`;

      response = await fetch(url);
      if (!response.ok) {
        throw new Error(`bad HTTPStatus(${response.statusText})`);
      }

      data = (await response.json()) as LRCLIBSearchResponse;
      if (!Array.isArray(data)) {
        throw new Error(`Expected an array, instead got ${typeof data}`);
      }

      // If still no results, try with the original title as fallback
      if (data.length === 0 && alternativeTitle) {
        query = new URLSearchParams({ q: title });
        url = `${this.baseUrl}/api/search?${query.toString()}`;

        response = await fetch(url);
        if (!response.ok) {
          throw new Error(`bad HTTPStatus(${response.statusText})`);
        }

        data = (await response.json()) as LRCLIBSearchResponse;
        if (!Array.isArray(data)) {
          throw new Error(`Expected an array, instead got ${typeof data}`);
        }
      }
    }

    const filteredResults = [];
    for (const item of data) {
      const { artistName } = item;

      const artists = artist.split(/[&,]/g).map((i) => i.trim());
      const itemArtists = artistName.split(/[&,]/g).map((i) => i.trim());

      // Try to match using artist name first
      const permutations = [];
      for (const artistA of artists) {
        for (const artistB of itemArtists) {
          permutations.push([artistA.toLowerCase(), artistB.toLowerCase()]);
        }
      }

      for (const artistA of itemArtists) {
        for (const artistB of artists) {
          permutations.push([artistA.toLowerCase(), artistB.toLowerCase()]);
        }
      }

      let ratio = Math.max(...permutations.map(([x, y]) => jaroWinkler(x, y)));

      // If direct artist match is below threshold and we have tags, try matching with tags
      if (ratio <= 0.9 && tags && tags.length > 0) {
        // Filter out the artist from tags to avoid duplicate comparisons
        const filteredTags = tags.filter(
          (tag) => tag.toLowerCase() !== artist.toLowerCase(),
        );

        const tagPermutations = [];
        // Compare each tag with each item artist
        for (const tag of filteredTags) {
          for (const itemArtist of itemArtists) {
            tagPermutations.push([tag.toLowerCase(), itemArtist.toLowerCase()]);
          }
        }

        // Compare each item artist with each tag
        for (const itemArtist of itemArtists) {
          for (const tag of filteredTags) {
            tagPermutations.push([itemArtist.toLowerCase(), tag.toLowerCase()]);
          }
        }

        if (tagPermutations.length > 0) {
          const tagRatio = Math.max(
            ...tagPermutations.map(([x, y]) => jaroWinkler(x, y)),
          );

          // Use the best match ratio between direct artist match and tag match
          ratio = Math.max(ratio, tagRatio);
        }
      }

      if (ratio <= 0.9) continue;
      filteredResults.push(item);
    }

    filteredResults.sort(({ duration: durationA }, { duration: durationB }) => {
      const left = Math.abs(durationA - songDuration);
      const right = Math.abs(durationB - songDuration);

      return left - right;
    });

    const closestResult = filteredResults[0];
    if (!closestResult) {
      return null;
    }

    if (Math.abs(closestResult.duration - songDuration) > 15) {
      return null;
    }

    if (closestResult.instrumental) {
      return null;
    }

    const raw = closestResult.syncedLyrics;
    const plain = closestResult.plainLyrics;

    if (raw) {
      // Prefer synced
      const parsed = LRC.parse(raw).lines.map((l) => ({
        ...l,
        status: 'upcoming' as const,
      }));

      // If the final parsed line is not empty, append a computed empty line
      if (parsed.length > 0) {
        const last = parsed[parsed.length - 1];
        const lastIsEmpty = !last.text || !last.text.trim();
        if (lastIsEmpty) {
          // last line already empty, don't append another
        } else {
          // If duration is infinity (no following line), treat end as start for midpoint calculation
          const lastEndCandidate = Number.isFinite(last.duration)
            ? last.timeInMs + last.duration
            : last.timeInMs;
          const songEnd = songDuration * 1000;

          if (lastEndCandidate < songEnd) {
            const midpoint = Math.floor((lastEndCandidate + songEnd) / 2);

            // update last duration to end at midpoint
            last.duration = midpoint - last.timeInMs;

            const minutes = Math.floor(midpoint / 60000);
            const seconds = Math.floor((midpoint % 60000) / 1000);
            const centiseconds = Math.floor((midpoint % 1000) / 10);
            const timeStr = `${minutes.toString().padStart(2, '0')}:${seconds
              .toString()
              .padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`;

            parsed.push({
              timeInMs: midpoint,
              time: timeStr,
              duration: songEnd - midpoint,
              text: '',
              status: 'upcoming' as const,
            });
          }
        }
      }

      return {
        title: closestResult.trackName,
        artists: closestResult.artistName.split(/[&,]/g),
        lines: parsed,
      };
    } else if (plain) {
      // Fallback to plain if no synced
      return {
        title: closestResult.trackName,
        artists: closestResult.artistName.split(/[&,]/g),
        lyrics: plain,
      };
    }

    return null;
  }
}

type LRCLIBSearchResponse = {
  id: number;
  name: string;
  trackName: string;
  artistName: string;
  albumName: string;
  duration: number;
  instrumental: boolean;
  plainLyrics: string;
  syncedLyrics: string;
}[];
