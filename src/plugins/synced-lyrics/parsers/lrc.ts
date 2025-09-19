interface LRCTag {
  tag: string;
  value: string;
}

interface LRCLine {
  time: string;
  timeInMs: number;
  duration: number;
  text: string;
}

interface LRC {
  tags: LRCTag[];
  lines: LRCLine[];
}

const tagRegex = /^\[(?<tag>\w+):\s*(?<value>.+?)\s*\]$/;
// prettier-ignore
const lyricRegex = /^\[(?<minutes>\d+):(?<seconds>\d+)\.(?<milliseconds>\d{1,3})\](?<text>.*)$/;

export const LRC = {
  parse: (text: string): LRC => {
    const lrc: LRC = {
      tags: [],
      lines: [],
    };

    let offset = 0;
    let previousLine: LRCLine | null = null;

    for (const line of text.split('\n')) {
      if (!line.trim().startsWith('[')) continue;

      const lyric = line.match(lyricRegex)?.groups;
      if (!lyric) {
        const tag = line.match(tagRegex)?.groups;
        if (tag) {
          if (tag.tag === 'offset') {
            offset = parseInt(tag.value);
            continue;
          }

          lrc.tags.push({
            tag: tag.tag,
            value: tag.value,
          });
        }
        continue;
      }

      const { minutes, seconds, milliseconds, text } = lyric;

      // Normalize: take first 2 digits, pad if only 1 digit
      const ms2 = milliseconds.padEnd(2, '0').slice(0, 2);

      // Convert to ms (xx → xx0)
      const minutesMs = parseInt(minutes) * 60 * 1000;
      const secondsMs = parseInt(seconds) * 1000;
      const centisMs = parseInt(ms2) * 10;
      const timeInMs = minutesMs + secondsMs + centisMs;

      const currentLine: LRCLine = {
        time: `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}.${ms2}`,
        timeInMs,
        text: text.trim(),
        duration: Infinity,
      };

      if (previousLine) {
        previousLine.duration = timeInMs - previousLine.timeInMs;
      }

      previousLine = currentLine;
      lrc.lines.push(currentLine);
    }

    for (const line of lrc.lines) {
      line.timeInMs += offset;
    }

    const first = lrc.lines.at(0);
    if (first && first.timeInMs > 300) {
      lrc.lines.unshift({
        time: '0:0:0',
        timeInMs: 0,
        duration: first.timeInMs,
        text: '',
      });
    }

    // Merge consecutive empty lines into a single empty line
    {
      const merged: LRCLine[] = [];
      for (const line of lrc.lines) {
        const isEmpty = !line.text || !line.text.trim();
        if (isEmpty && merged.length > 0) {
          const prev = merged[merged.length - 1];
          const prevEmpty = !prev.text || !prev.text.trim();
          if (prevEmpty) {
            const prevEnd = Number.isFinite(prev.duration)
              ? prev.timeInMs + prev.duration
              : Infinity;
            const thisEnd = Number.isFinite(line.duration)
              ? line.timeInMs + line.duration
              : Infinity;
            const newEnd = Math.max(prevEnd, thisEnd);
            prev.duration = Number.isFinite(newEnd)
              ? newEnd - prev.timeInMs
              : Infinity;
            continue;
          }
        }
        merged.push(line);
      }
      lrc.lines = merged;
    }

    return lrc;
  },
};
