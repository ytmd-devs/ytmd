<div align="center">

# YouTube Music

[![GitHub release](https://img.shields.io/github/release/th-ch/youtube-music.svg?style=for-the-badge&logo=youtube-music)](https://github.com/th-ch/youtube-music/releases/)
[![GitHub license](https://img.shields.io/github/license/th-ch/youtube-music.svg?style=for-the-badge)](https://github.com/th-ch/youtube-music/blob/master/license)
[![Formatted with Biome](https://img.shields.io/badge/Formatted_with-Biome-60a5fa?style=for-the-badge&logo=biome)](https://biomejs.dev/)
[![Build status](https://img.shields.io/github/actions/workflow/status/th-ch/youtube-music/build.yml?branch=master&style=for-the-badge&logo=youtube-music)](https://GitHub.com/th-ch/youtube-music/releases/)
[![GitHub All Releases](https://img.shields.io/github/downloads/th-ch/youtube-music/total?style=for-the-badge&logo=youtube-music)](https://GitHub.com/th-ch/youtube-music/releases/)
[![AUR](https://img.shields.io/aur/version/youtube-music-bin?color=blueviolet&style=for-the-badge&logo=youtube-music)](https://aur.archlinux.org/packages/youtube-music-bin)
[![Known Vulnerabilities](https://snyk.io/test/github/th-ch/youtube-music/badge.svg)](https://snyk.io/test/github/th-ch/youtube-music)

</div>

![Bannerkep](https://i.imgur.com/UaZPHqX.png)


<div align="center">
	<a href="https://github.com/th-ch/youtube-music/releases/latest">
		<img src="../../web/youtube-music-hu.svg" width="400" height="100" alt="YouTube Music SVG">
	</a>
</div>

Olvasd el más nyelveken: [🏴 Angol](../../README.md), [🇰🇷 Korea](./README-ko.md), [🇫🇷 Francia](./README-fr.md), [🇮🇸 Izland](./README-is.md), [🇪🇸 Spanyol](./README-es.md), [🇷🇺 Orosz](./README-ru.md), [🇺🇦 Ukrán](./README-uk.md), [🇧🇷 Portugál](./README-pt.md), [🇯🇵 Japán](./README-ja.md)

**Electron keretrendszerre épülő alkalmazás a YouTube Music számára, amely a következőket kínálja:**

- Natív megjelenés és élmény, amely az eredeti felület megtartására törekszik
- Egyedi bővítmények keretrendszere: alakítsd át a YouTube Music-ot igényeid szerint (stílus, tartalom, funkciók), engedélyezd/tiltsd le a bővítményeket egy kattintással

## Bemutató kép

|                        Lejátszó ablak (album színtéma és környezeti fény)                              |
|:---------------------------------------------------------------------------------------------------------:|
|![Bemutatókép1](https://i.imgur.com/Tj4LBwf.png)|

## Tartalom

- [Funkciók](#Funkciók)
- [Elérhető bővítmények](#Elérhető-bővítmények)
- [Fordítás](#Fordítás)
- [Letöltés](#Letöltés)
  - [Arch Linux](#arch-linux)
  - [MacOS](#macos)
  - [Windows](#windows)
    - [Hogyan telepítsük hálózati kapcsolat nélkül? (Windows alatt)](#Hogyan-telepítsd-hálózati-kapcsolat-nélkül-Windows)
- [Témák](#Témák)
- [Fejlesztés](#Fejlesztés)
- [Saját bővítmények készítése](#Saját-bővítmények-készítése)
  - [Bővítmény létrehozása](#Bővítmény-létrehozása)
  - [Gyakori használati esetek](#Gyakori-használati-esetek)
- [Build](#build)
- [Gyártás előnézete](#Gyártás-előnézete)
- [Tesztelés](#Tesztelés)
- [Licenc](#Licenc)
- [GYIK](#GYIK)

## Funkciók:

- **Automatikus megerősítés a lejátszás szüneteltetésekor** (Alapból engedélyezve): Kikapcsolja a ["Folytatja a nézést?"](https://i.imgur.com/z2mG0QN.png)
  felugró ablakot, amely bizonyos idő után leállítja a zenét.

 - És még sok más ...

## Elérhető bővítmények:

- **Reklámblokkoló**: Blokkolja az összes hirdetést és nyomkövetőt.

- **Album műveletek**: Dislike, Undislike, Like, Unlike gombok hozzáadása, amivel ezt a lejátszási listán vagy albumban lévő összes dalra alkalmazza.

- **Album színtéma**: Dinamikus téma és vizuális effektek alkalmazása az album színpalettája alapján.

- **Ambient mód**: Fényhatás alkalmazása a videóból származó lágy színek vetítésével a képernyő hátterére.

- **Hangtömörítő**: Hang tömörítés alkalmazása. (csökkenti a jel legzajosabb részeinek hangerősségét, és emeli a legcsendesebb részek hangerősségét)

- **Navigációs sáv elmosása**: Átlátszóvá és elmosódottá teszi a navigációs sávot.

- **Korellenőrzés kihagyása**: A YouTube korellenőrzését kihagyja, ezáltal nem kel meg erősíteni a zene meghallgatása elött. (automatikusan megerősítve lesz)

- **Feliratválasztó**: Felirat választó a YouTube Music zenékhez.

- **Kompakt oldalsáv**: Mindig becsukva tartja a bal oldali sávot, ahol a Kezdőlap, Felfedezés, Könyvtár és egyebek láthatók. (amit bármikor ki lehet nyitni)

- **Áttünés**: Áttünést biztosít a dalok között, ami folytonossá teszi a zenehallgatást anélkül, hogy érezhető lenne a váltás.

- **Automatikus lejátszás letiltása**: Ez a funkció kikapcsolja az automatikus lejátszást, így a zenék nem indulnak el maguktól. Amikor egy album vagy egy dal lejátszása véget ér, a következő szám nem kezdődik el automatikusan. (a bővítmény használata során minden zenét manuálisan kell elindítani)

- **[Discord](https://discord.com/) Rich Presence**: Mutassa meg barátainak, hogy mit hallgat a [Rich Presence](https://i.imgur.com/nCeVQB2.png) segítségével. (Ehez a Discord-on is engedélyezve kel lennie a Tevékenységállapot megosztásának [DC Beállítások -> Tevékenyég-adatvédelem -> Megoszthatod az észlelt tevékenységeidet másokkal])

- **Letöltő**: MP3/forrás hanganyag letöltése [közvetlenül az interfészről](https://i.imgur.com/ghqBNVe.png). [(youtube-dl)](https://github.com/ytdl-org/youtube-dl)

- **Hangszínszabályzó**: Szűrőket ad hozzá, hogy erősítsd vagy csökkentsd bizonyos frekvenciatartományokat. (pl. basszuskiemelés)

- **Exponenciális hangerő**: A hangerő csúszka [exponenciálissá](https://greasyfork.org/en/scripts/397686-youtube-music-fix-volume-ratio/) tételével könnyebbé válik az alacsony hangerő kiválasztása.

- **Alkalmazáson belüli menü**: [A Menüsáv stílusos, sötét vagy album-színű megjelenítése](https://i.imgur.com/vWvO7Xt.png).

  > (Lásd ezt a [bejegyzést](https://github.com/th-ch/youtube-music/issues/410#issuecomment-952060709), ha problémád van a menü elérésével, miután engedélyezted ezt a bővítményt és a "menü elrejtése" opciót.

- **Scrobbler**: Scrobbling támogatást biztosít [Last.fm](https://www.last.fm/) és [ListenBrainz](https://listenbrainz.org/) számára.

- **Lumia Stream**: [Lumia Stream](https://lumiastream.com/) támogatás hozzáadása.

- **Lyrics Genius**: Dalszöveg támogatást nyújt a legtöbb dalhoz.

- **Zene együtt**: Lehetővé teszi a lejátszási listák, dalok megosztását másokkal. Amikor a házigazda lejátszik egy dalt, mindenki ugyanazt a dalt fogja hallani.

- **Navigáció**: Következő/Vissza navigációs nyilak közvetlenül az interfészbe integrálva, mint a kedvenc böngésződben.

- **Nincs Google bejelentkezés**: A Bejelentkezés gomb eltávolítása az interfészről (Jobb fentről eltünik a bejelentkezés gomb.)

- **Értesítések**: Értesítés megjelenítése, amikor egy dal elindul. ([interaktív értesítések](https://user-images.githubusercontent.com/78568641/114102651-63ce0e00-98d0-11eb-9dfe-c5a02bb54f9c.png) elérhetők Windows-on)

- **Kép a képben**: Lehetővé teszi az alkalmazás kép a képben módra váltását.

- **Lejátszás sebessége**: Hallgassd gyorsan, hallgassd lassan! [Hozzáad egy csúszkát, amely szabályozza a dal sebességét](https://i.imgur.com/uaNOWOt.png)

- **Precíz hangerő**: A hangerő precíz szabályozása egérgörgővel/gyorsbillentyűkkel, egy egyedi HUD és testreszabható hangerő csuszka segítségével.

- **Gyorsbillentyűk (& MPRIS)**: Lehetővé teszi globális gyorsbillentyűk beállítását a lejátszáshoz (lejátszás/szünet/következő/előző), valamint a [média OSD](https://i.imgur.com/o13SpAE.png) kikapcsolását a médiagombok felülírásával. Bekapcsolja a Ctrl/CMD + F billentyűkombinációt a kereséshez, a Linux MPRIS támogatását a médiagombokhoz, és [egyedi gyorsbillentyűket](https://github.com/Araxeus/youtube-music/blob/1e591d6a3df98449bcda6e63baab249b28026148/providers/song-controls.js#L13-L50) a [haladó felhasználók](https://github.com/th-ch/youtube-music/issues/106#issuecomment-952156902) számára.

- **Nem kedvelt dal kihagyása**: Kihagyja a nem kedvelt dalokat.

- **Csend kihagyása**: Automatikusan átugorja a csendes szakaszokat.

- [**SzponzorBlokk**](https://github.com/ajayyy/SponsorBlock): Automatikusan átugorja a nem zenei részeket, például az intrókat/outrokat vagy a zenei videók azon részeit, ahol a dal nem szól.

- **Szinkronizált dalszövegek**: Szinkronizált dalszövegeket biztosít dalokhoz, [LRClib](https://lrclib.net)-hez hasonló szolgáltatókat használva.

- **Médiavezérlés a tálcán**: Lejátszás vezérlése a [Windows tálcáról](https://i.imgur.com/eolQfnA.png).

- **TouchBar**: Egyedi TouchBar elrendezés macOS-hoz.

- **Tuna OBS**: Integráció az [OBS](https://obsproject.com/) [Tuna](https://obsproject.com/forum/resources/tuna.843/) pluginjával.

- **Videóminőség modosító**: Lehetővé teszi a videó minőségének megváltoztatását egy [gombbal](https://i.imgur.com/UgpgtHL.png) a videó fedvényen.

- **Videó váltó**: Hozzáad egy [gombot](https://i.imgur.com/288QE1k.png) a Videó/Dal mód közötti váltáshoz. (opcionálisan teljesen eltávolíthatja a videó fület is)

- **Vizualizáció**: Különböző zenei vizualizációk.


## Fordítás

Segíthetsz a fordításban a [Hosted Weblate](https://hosted.weblate.org/projects/youtube-music/) oldalán.

<a href="https://hosted.weblate.org/engage/youtube-music/">
<img src="https://hosted.weblate.org/widget/youtube-music/i18n/multi-auto.svg" alt="Fordítás állapota" />
<img src="https://hosted.weblate.org/widget/youtube-music/i18n/287x66-black.png" alt="Fordítás állapota" />
<img src="https://hosted.weblate.org/widget/youtube-music/i18n/hu/287x66-white.png" alt="Fordítás állapota" />
</a>

## Letöltés

A [legfrissebb kiadás](https://github.com/th-ch/youtube-music/releases/latest) megtekintésével gyorsan megtalálhatod a legújabb verziót.

### Arch Linux

Telepítsd a [`youtube-music-bin`](https://aur.archlinux.org/packages/youtube-music-bin) csomagot az AUR-ból. Az AUR telepítési útmutatóját megtalálod ezen a [wiki oldalon](https://wiki.archlinux.org/index.php/Arch_User_Repository#Installing_packages).

### macOS

Telepítheted az alkalmazást Homebrew segítségével (lásd a [cask definíciót](https://github.com/th-ch/homebrew-youtube-music)):

```bash
brew install th-ch/youtube-music/youtube-music
```

Ha manuálisan telepítetted az alkalmazást, és a következő hibát kapod indításkor: "sérült, és nem nyitható meg./is damaged and can’t be opened.", futtasd az alábbi parancsot a Terminálban:

```bash
/usr/bin/xattr -cr /Applications/YouTube\ Music.app
```

### Windows

A [Scoop csomagkezelő](https://scoop.sh) segítségével telepítheted a `youtube-music` csomagot az [`extras` tárolóból](https://github.com/ScoopInstaller/Extras).

```bash
scoop bucket add extras
scoop install extras/youtube-music
```

Alternatívaként használhatod a [Winget](https://learn.microsoft.com/en-us/windows/package-manager/winget/) eszközt, a Windows 11 hivatalos CLI csomagkezelőjét, hogy telepítsd a `th-ch.YouTubeMusic` csomagot.

*Megjegyzés: A Microsoft Defender SmartScreen figyelmeztethet vagy blokkolhatja a telepítést, mivel az alkalmazás "ismeretlen kiadótól" származik. Ez a figyelmeztetés akkor is megjelenhet, ha manuálisan töltöd le és próbálod futtatni a GitHubról letöltött (.exe) fájlt. Ebben az esetben kattints a "További információ" gombra, majd válaszd a "Futtatás mindenképp" opciót a telepítés folytatásához.*

```bash
winget install th-ch.YouTubeMusic
```

#### Hogyan telepítsd hálózati kapcsolat nélkül? (Windows)

- Töltsd le a `*.nsis.7z` fájlt a [kiadás oldal](https://github.com/th-ch/youtube-music/releases/latest)ról, amely megfelel az eszközöd architektúrájának:
  - `x64` 64 bites Windows-hoz
  - `ia32` 32 bites Windows-hoz
  - `arm64` ARM64 Windows-hoz
- Töltsd le a telepítőt a [kiadás oldal](https://github.com/th-ch/youtube-music/releases/latest)ról. (`*-Setup.exe`)
- Helyezd mindkét fájlt **ugyanabba a könyvtárba**.
- Futtasd a telepítőt.

## Témák

CSS fájlokat tölthetsz be az alkalmazás megjelenésének megváltoztatásához. (Beállítások > Kinézeti beállítások > Téma)

Néhány előre definiált téma elérhető itt: https://github.com/kerichdev/themes-for-ytmdesktop-player.

## Fejlesztés

```bash
git clone https://github.com/th-ch/youtube-music
cd youtube-music
pnpm install --frozen-lockfile
pnpm dev
```

## Saját bővítmények készítése

A bővítmények segítségével a következőket teheted:

- Az alkalmazás manipulálása: Az Electron `BrowserWindow` objektuma átadásra kerül a bővítménykezelőnek.
- Az interfész módosítása: HTML és CSS manipulációval megváltoztathatod az alkalmazás kinézetét.

### Bővítmény létrehozása

Hozz létre egy mappát a `src/plugins/YOUR-PLUGIN-NAME` útvonalon:

- `index.ts`: a bővítmény fő fájlja
```typescript
import style from './style.css?inline'; // import style as inline

import { createPlugin } from '@/utils';

export default createPlugin({
  name: 'Plugin Label',
  restartNeeded: true, // if value is true, ytmusic show restart dialog
  config: {
    enabled: false,
  }, // your custom config
  stylesheets: [style], // your custom style,
  menu: async ({ getConfig, setConfig }) => {
    // All *Config methods are wrapped Promise<T>
    const config = await getConfig();
    return [
      {
        label: 'menu',
        submenu: [1, 2, 3].map((value) => ({
          label: `value ${value}`,
          type: 'radio',
          checked: config.value === value,
          click() {
            setConfig({ value });
          },
        })),
      },
    ];
  },
  backend: {
    start({ window, ipc }) {
      window.maximize();

      // you can communicate with renderer plugin
      ipc.handle('some-event', () => {
        return 'hello';
      });
    },
    // it fired when config changed
    onConfigChange(newConfig) { /* ... */ },
    // it fired when plugin disabled
    stop(context) { /* ... */ },
  },
  renderer: {
    async start(context) {
      console.log(await context.ipc.invoke('some-event'));
    },
    // Only renderer available hook
    onPlayerApiReady(api: YoutubePlayer, context: RendererContext) {
      // set plugin config easily
      context.setConfig({ myConfig: api.getVolume() });
    },
    onConfigChange(newConfig) { /* ... */ },
    stop(_context) { /* ... */ },
  },
  preload: {
    async start({ getConfig }) {
      const config = await getConfig();
    },
    onConfigChange(newConfig) {},
    stop(_context) {},
  },
});
```

### Gyakori használati esetek

- Egyedi CSS injektálása: hozz létre egy `style.css` fájlt ugyanabban a mappában, majd:

```typescript
// index.ts
import style from './style.css?inline'; // import style as inline

import { createPlugin } from '@/utils';

export default createPlugin({
  name: 'Plugin Label',
  restartNeeded: true, // if value is true, ytmusic will show a restart dialog
  config: {
    enabled: false,
  }, // your custom config
  stylesheets: [style], // your custom style
  renderer() {} // define renderer hook
});
```

- Ha módosítani szeretnéd a HTML-t:

```typescript
import { createPlugin } from '@/utils';

export default createPlugin({
  name: 'Plugin Label',
  restartNeeded: true, // if value is true, ytmusic will show the restart dialog
  config: {
    enabled: false,
  }, // your custom config
  renderer() {
    // Remove the login button
    document.querySelector(".sign-in-link.ytmusic-nav-bar").remove();
  } // define renderer hook
});
```

- Az elülső és hátsó rész közötti kommunikáció: Az Electron ipcMain moduljának használatával valósítható meg. Lásd az `index.ts` fájlt és a `sponsorblock` bővítmény példáját.

## Build

1. Klónozd a repót
2. Kövesd ezt az [útmutatót](https://pnpm.io/installation), hogy telepítsd a `pnpm` csomagkezelőt.
3. Futtasd a következő parancsot `pnpm install --frozen-lockfile` a kellékek telepítéséhez.
4. Építsd meg az alkalmazást az operációs rendszerednek megfelelő paranccsal: `pnpm build:OS`

- `pnpm dist:win` - Windows
- `pnpm dist:linux` - Linux (amd64)
- `pnpm dist:linux:deb-arm64` - Linux (arm64 Debiánhoz)
- `pnpm dist:linux:rpm-arm64` - Linux (arm64 Fedorához)
- `pnpm dist:mac` - macOS (amd64)
- `pnpm dist:mac:arm64` - macOS (arm64)

Az alkalmazás építéséhez a [electron-builder](https://github.com/electron-userland/electron-builder) eszközt használáld, amely támogatja a macOS, Linux és Windows platformokat.

## Gyártás előnézete

```bash
pnpm start
```

## Tesztelés

```bash
pnpm test
```

A [Playwright](https://playwright.dev/) tesztelési keretrendszert használd az alkalmazás teszteléséhez.

## Licenc

MIT © [th-ch](https://github.com/th-ch/youtube-music)

## GYIK

### Miért nem jelenik meg az alkalmazás menüje?

Ha a `menü elrejtése` opció be van kapcsolva, a menüt az <kbd>alt</kbd> billentyűvel jelenítheted meg (vagy az <kbd>`</kbd> [fordított idézőjel] billentyűvel, ha az alkalmazáson belüli menü bővítményt használod).
