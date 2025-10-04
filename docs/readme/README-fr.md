<div align="center">

# YouTube Music

[![GitHub release](https://img.shields.io/github/release/th-ch/youtube-music.svg?style=for-the-badge&logo=youtube-music)](https://github.com/th-ch/youtube-music/releases/)
[![Licence GitHub](https://img.shields.io/github/license/th-ch/youtube-music.svg?style=for-the-badge)](https://github.com/th-ch/youtube-music/blob/master/license)
[![Formatted with Biome](https://img.shields.io/badge/Formatted_with-Biome-60a5fa?style=for-the-badge&logo=biome)](https://biomejs.dev/)
[![Statut de la construction](https://img.shields.io/github/actions/workflow/status/th-ch/youtube-music/build.yml?branch=master&style=for-the-badge&logo=youtube-music)](https://GitHub.com/th-ch/youtube-music/releases/)
[![Toutes les versions GitHub](https://img.shields.io/github/downloads/th-ch/youtube-music/total?style=for-the-badge&logo=youtube-music)](https://GitHub.com/th-ch/youtube-music/releases/)
[![AUR](https://img.shields.io/aur/version/youtube-music-bin?color=blueviolet&style=for-the-badge&logo=youtube-music)](https://aur.archlinux.org/packages/youtube-music-bin)
[![Vulnérabilités connues](https://snyk.io/test/github/th-ch/youtube-music/badge.svg)](https://snyk.io/test/github/th-ch/youtube-music)

</div>

![Capture d'écran](/web/screenshot.png "Capture d'écran")


<div align="center">
	<a href="https://github.com/th-ch/youtube-music/releases/latest">
		<img src="https://github.com/th-ch/youtube-music/raw/master/web/youtube-music.svg" width="400" height="100" alt="SVG YouTube Music">
	</a>
</div>

Lisez ceci dans d'autres langues: [🏴 Anglais](../../README.md), [🇰🇷 Coréen](./README-ko.md), [🇫🇷 Français](./README-fr.md), [🇮🇸 Islandais](./README-is.md), [🇪🇸 Espagnol](./README-es.md), [🇷🇺 Russe](./README-ru.md), [🇺🇦 Ukrainien](./README-uk.md), [🇧🇷 Portugais](./README-pt.md), [🇯🇵 Japonais](./README-ja.md)

**Enveloppe Electron autour de YouTube Music offrant :**

- Aspect & sensation naturels, vise à conserver l'interface originale
- Cadre pour les plugins personnalisés : modifiez YouTube Music selon vos besoins (style, contenu, fonctionnalités), activez/désactivez les plugins en
  un clic

## Image de démonstration

|                          Écran du lecteur (thème de couleur de l'album & lumière ambiante)                                |
|:---------------------------------------------------------------------------------------------------------:|
|![Capture d'écran1](https://github.com/th-ch/youtube-music/assets/16558115/53efdf73-b8fa-4d7b-a235-b96b91ea77fc)|

## Contenu

- [Fonctionnalités](#fonctionnalités)
- [Plugins disponibles](#plugins-disponibles)
- [Traduction](#traduction)
- [Téléchargement](#téléchargement)
  - [Arch Linux](#arch-linux)
  - [MacOS](#macos)
  - [Windows](#windows)
    - [Comment installer sans connexion réseau ? (sous Windows)](#comment-installer-sans-connexion-réseau-sous-windows)
- [Thèmes](#thèmes)
- [Dev](#dev)
- [Créez vos propres plugins](#créez-vos-propres-plugins)
  - [Créer un plugin](#créer-un-plugin)
  - [Cas d'utilisation courants](#cas-dutilisation-courants)
- [Construction](#construction)
- [Aperçu de la production](#aperçu-de-la-production)
- [Tests](#tests)
- [Licence](#licence)
- [FAQ](#faq)

## Fonctionnalités :

- **Confirmation automatique lors de la pause** (Toujours activé) : désactiver
  la pop-up ["Continuer à regarder ?"](https://user-images.githubusercontent.com/61631665/129977894-01c60740-7ec6-4bf0-9a2c-25da24491b0e.png)
  qui pause la musique après un certain temps

 - Et plus encore ...

## Plugins disponibles :

- **Bloqueur de publicités** : Bloquez toutes les publicités et le suivi dès le départ

- **Actions d'album** : Ajoute des boutons Je n'aime pas, Dislike, J'aime, et Unlike pour appliquer cela à toutes les chansons dans une playlist ou un album

- **Thème de couleur d'album** : Applique un thème dynamique et des effets visuels basés sur la palette de couleurs de l'album

- **Mode Ambiant** : Applique un effet d'éclairage en projetant des couleurs douces de la vidéo, sur l'arrière-plan de votre écran

- **Compresseur Audio** : Appliquer une compression audio (diminue le volume des parties les plus fortes du signal et augmente le
  volume des parties les plus douces)

- **Barre de navigation floue** : rend la barre de navigation transparente et floue

- **Contournement des restrictions d'âge** : contourner la vérification d'âge de YouTube

- **Sélecteur de sous-titres** : Activer les sous-titres

- **Barre latérale compacte** : Toujours définir la barre latérale en mode compact

- **Fondu enchaîné** : Fondu enchaîné entre les chansons

- **Désactiver la lecture automatique** : Fait démarrer chaque chanson en mode "pause"

- **[Discord](https://discord.com/) Présence riche** : Montrez à vos amis ce que vous écoutez
  avec [Présence riche](https://user-images.githubusercontent.com/28219076/104362104-a7a0b980-5513-11eb-9744-bb89eabe0016.png)

- **Téléchargeur** : télécharge des
  MP3 [directement depuis l'interface](https://user-images.githubusercontent.com/61631665/129977677-83a7d067-c192-45e1-98ae-b5a4927393be.png) [(youtube-dl)](https://github.com/ytdl-org/youtube-dl)

- **Volume exponentiel** : Rend le curseur de volume
  [exponentiel](https://greasyfork.org/en/scripts/397686-youtube-music-fix-volume-ratio/) afin qu'il soit plus facile de
  sélectionner des volumes plus bas

- **Menu In-App** : [donne aux barres un aspect chic et sombre](https://user-images.githubusercontent.com/78568641/112215894-923dbf00-8c29-11eb-95c3-3ce15db27eca.png)

  > (voir [ce poste](https://github.com/th-ch/youtube-music/issues/410#issuecomment-952060709) si vous avez des problèmes
  pour accéder au menu après avoir activé ce plugin et l'option masquer-menu)

- **Scrobbler** : Ajoute le support de scrobbling pour [Last.fm](https://www.last.fm/) et [ListenBrainz](https://listenbrainz.org/)

- **Lumia Stream** : Ajoute le support de [Lumia Stream](https://lumiastream.com/)

- **Lyrics Genius** : Ajoute le support des paroles pour la plupart des chansons

- **Musique Ensemble** : Partagez une playlist avec d'autres. Lorsque l'hôte joue une chanson, tout le monde entendra la même chanson

- **Navigation** : Flèches de navigation Suivant/Retour directement intégrées dans l'interface, comme dans votre navigateur préféré

- **Pas de connexion Google** : Supprime les boutons et les liens de connexion Google de l'interface

- **Notifications** : Affiche une notification lorsqu'une chanson commence à jouer ([notifications interactives](https://user-images.githubusercontent.com/78568641/114102651-63ce0e00-98d0-11eb-9dfe-c5a02bb54f9c.png)
  sont disponibles sur Windows)

- **Image dans l'image** : permet de passer l'application en mode image dans l'image

- **Vitesse de lecture** : Écoutez rapidement, écoutez lentement ! [Ajoute un curseur qui contrôle la vitesse des chansons](https://user-images.githubusercontent.com/61631665/129976003-e55db5ba-bf42-448c-a059-26a009775e68.png)

- **Volume précis** : Contrôlez le volume précisément en utilisant la molette de la souris/raccourcis clavier, avec un hud personnalisé et des étapes de volume personnalisables

- **Raccourcis (& MPRIS)** : Permet de définir des raccourcis globaux pour la lecture (lecture/pause/suivant/précédent) +
  désactive [osd média](https://user-images.githubusercontent.com/84923831/128601225-afa38c1f-dea8-4209-9f72-0f84c1dd8b54.png)
  en remplaçant les touches multimédias + activer Ctrl/CMD + F pour rechercher + activer le support mpris linux pour
  les touches multimédias + [raccourcis personnalisés](https://github.com/Araxeus/youtube-music/blob/1e591d6a3df98449bcda6e63baab249b28026148/providers/song-controls.js#L13-L50)
  pour [utilisateurs avancés](https://github.com/th-ch/youtube-music/issues/106#issuecomment-952156902)

- **Passer la chanson non aimée** : passe les chansons non aimées

- **Passer les silences** : passe automatiquement les sections silencieuses

- [**SponsorBlock**](https://github.com/ajayyy/SponsorBlock) : Saute automatiquement les parties non musicales comme les intros/outros ou
  les parties des clips vidéo où la chanson n'est pas jouée

- **Contrôle multimédia de la barre des tâches** : Contrôlez la lecture depuis
  votre [barre des tâches Windows](https://user-images.githubusercontent.com/78568641/111916130-24a35e80-8a82-11eb-80c8-5021c1aa27f4.png)

- **TouchBar** : Disposition personnalisée de la TouchBar pour macOS

- **Tuna OBS** : Intégration avec le
  plugin [Tuna](https://obsproject.com/forum/resources/tuna.843/) d'[OBS](https://obsproject.com/)

- **Changeur de qualité vidéo** : Permet de changer la qualité vidéo avec
  un [bouton](https://user-images.githubusercontent.com/78568641/138574366-70324a5e-2d64-4f6a-acdd-dc2a2b9cecc5.png) sur
  l'overlay vidéo

- **Bascule vidéo** : Ajoute
  un [bouton](https://user-images.githubusercontent.com/28893833/173663950-63e6610e-a532-49b7-9afa-54cb57ddfc15.png) pour
  basculer entre le mode Vidéo/Chanson. peut également supprimer l'onglet vidéo entier

- **Visualiseur** : Différents visualiseurs musicaux

## Traduction

Vous pouvez aider à la traduction sur [Hosted Weblate](https://hosted.weblate.org/projects/youtube-music/).

<a href="https://hosted.weblate.org/engage/youtube-music/">
  <img src="https://hosted.weblate.org/widget/youtube-music/i18n/multi-auto.svg" alt="statut de la traduction" />
  <img src="https://hosted.weblate.org/widget/youtube-music/i18n/287x66-black.png" alt="statut de la traduction 2" />
</a>

## Téléchargement

Vous pouvez consulter la [dernière sortie](https://github.com/th-ch/youtube-music/releases/latest) pour trouver rapidement la
dernière version.

### Arch Linux

Installez le paquet [`youtube-music-bin`](https://aur.archlinux.org/packages/youtube-music-bin) depuis l'AUR. Pour les instructions d'installation de l'AUR, consultez
cette [page wiki](https://wiki.archlinux.org/index.php/Arch_User_Repository#Installing_packages).

### MacOS

Vous pouvez installer l'application en utilisant Homebrew (voir la [définition du fût](https://github.com/th-ch/homebrew-youtube-music)) :

```bash
brew install th-ch/youtube-music/youtube-music
```

Si vous installez l'application manuellement et obtenez une erreur "est endommagé et ne peut pas être ouvert." lors du lancement de l'application, exécutez ce qui suit dans le Terminal :

```bash
/usr/bin/xattr -cr /Applications/YouTube\ Music.app
```

### Windows

Vous pouvez utiliser le [gestionnaire de paquets Scoop](https://scoop.sh) pour installer le paquet `youtube-music` depuis le [seau `extras`](https://github.com/ScoopInstaller/Extras).

```bash
scoop bucket add extras
scoop install extras/youtube-music
```

Alternativement, vous pouvez utiliser [Winget](https://learn.microsoft.com/fr-fr/windows/package-manager/winget/), le gestionnaire de paquets CLI officiel de Windows 11, pour installer le paquet `th-ch.YouTubeMusic`.

*Note : Microsoft Defender SmartScreen pourrait bloquer l'installation car elle provient d'un "éditeur inconnu". Ceci est également vrai pour l'installation manuelle lors de l'essai d'exécution de l'exécutable (.exe) après un téléchargement manuel ici sur GitHub (même fichier).*

```bash
winget install th-ch.YouTubeMusic
```

#### Comment installer sans connexion réseau ? (sous Windows)

- Téléchargez le fichier `*.nsis.7z` pour _l'architecture de votre appareil_ sur la [page des versions](https://github.com/th-ch/youtube-music/releases/latest).
  - `x64` pour Windows 64 bits
  - `ia32` pour Windows 32 bits
  - `arm64` pour Windows ARM64
- Téléchargez l'installeur sur la page des versions. (`*-Setup.exe`)
- Placez-les dans le **même dossier**.
- Exécutez l'installeur.

## Thèmes

Vous pouvez charger des fichiers CSS pour changer l'apparence de l'application (Options > Ajustements visuels > Thèmes).

Certains thèmes prédéfinis sont disponibles sur [https://github.com/kerichdev/themes-for-ytmdesktop-player](https://github.com/kerichdev/themes-for-ytmdesktop-player).

## Dev

```bash
git clone https://github.com/th-ch/youtube-music
cd youtube-music
pnpm install --frozen-lockfile
pnpm dev
```
## Créez vos propres plugins

En utilisant des plugins, vous pouvez :

- manipuler l'application - la `BrowserWindow` d'Electron est passée au gestionnaire de plugin
- changer le front en manipulant le HTML/CSS

### Créer un plugin

Créez un dossier dans `src/plugins/NOM-DE-VOTRE-PLUGIN` :

- `index.ts` : le fichier principal du plugin
```typescript
import style from './style.css?inline'; // importez le style comme inline

import { createPlugin } from '@/utils';

export default createPlugin({
  name: 'Étiquette du plugin',
  restartNeeded: true, // si la valeur est vraie, ytmusic affichera la boîte de dialogue de redémarrage
  config: {
    enabled: false,
  }, // votre configuration personnalisée
  stylesheets: [style], // votre style personnalisé,
  menu: async ({ getConfig, setConfig }) => {
    // Toutes les méthodes *Config sont des promesses encapsulées <T>
    const config = await getConfig();
    return [
      {
        label: 'menu',
        submenu: [1, 2, 3].map((value) => ({
          label: `valeur ${value}`,
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

      // vous pouvez communiquer avec le plugin du rendu
      ipc.handle('un événement', () => {
        return 'bonjour';
      });
    },
    // il est déclenché lorsque la configuration change
    onConfigChange(newConfig) { /* ... */ },
    // il est déclenché lorsque le plugin est désactivé
    stop(context) { /* ... */ },
  },
  renderer: {
    async start(context) {
      console.log(await context.ipc.invoke('un événement'));
    },
    // Seul le crochet disponible pour le rendu
    onPlayerApiReady(api: YoutubePlayer, context: RendererContext) {
      // définir facilement la configuration du plugin
      context.setConfig({ myConfig: api.getVolume() });
    },
    onConfigChange(newConfig) { /* ... */ },
    stop(_context) { /* ... */ },
  },
  preload: {
    async start({ getConfig }) {
      const config is obtained by `getConfig` method.
    },
    onConfigChange(newConfig) {},
    stop(_context) {},
  },
});

```

### Cas d'utilisation courants

- **Injection de CSS personnalisé** : créez un fichier `style.css` dans le même dossier puis :

```typescript
// index.ts
import style from './style.css?inline'; // importez le style comme en ligne

import { createPlugin } from '@/utils';

export default createPlugin({
  name: 'Étiquette du plugin',
  restartNeeded: true, // si la valeur est vraie, ytmusic affichera la boîte de dialogue de redémarrage
  config: {
    enabled: false,
  }, // votre configuration personnalisée
  stylesheets: [style], // votre style personnalisé
  renderer() {} // définissez le crochet de rendu
});
```

- **Si vous voulez modifier le HTML** :

```typescript
import { createPlugin } from '@/utils';

export default createPlugin({
  name: 'Étiquette du plugin',
  restartNeeded: true, // si la valeur est vraie, ytmusic affichera la boîte de dialogue de redémarrage
  config: {
    enabled: false,
  }, // votre configuration personnalisée
  renderer() {
    // Supprimez le bouton de connexion
    document.querySelector(".sign-in-link.ytmusic-nav-bar").remove();
  } // définissez le crochet de rendu
});

```

- **Communication entre le front et le back** : cela peut se faire en utilisant le module ipcMain d'Electron. Voir le fichier `index.ts` et l'exemple dans le plugin `sponsorblock`.

## Construction

1. Clonez le dépôt
2. Suivez [ce guide](https://pnpm.io/installation) pour installer `pnpm`
3. Exécutez `pnpm install --frozen-lockfile` pour installer les dépendances
4. Exécutez `pnpm build:OS`

- `pnpm dist:win` - pour Windows
- `pnpm dist:linux` - pour Linux
- `pnpm dist:mac` - pour MacOS

Construit l'application pour macOS, Linux et Windows,
en utilisant [electron-builder](https://github.com/electron-userland/electron-builder).

## Aperçu de la production

```bash
pnpm start
```

## Tests

```bash
pnpm test
```

Utilise [Playwright](https://playwright.dev/) pour tester l'application.

## Licence

MIT © [th-ch](https://github.com/th-ch/youtube-music)

## FAQ

### Pourquoi le menu de l'application ne s'affiche-t-il pas ?

Si l'option `Masquer le menu` est activée - vous pouvez afficher le menu avec la touche <kbd>alt</kbd> (ou <kbd>\`</kbd> [backtick] si vous utilisez le plugin du menu intégré)
