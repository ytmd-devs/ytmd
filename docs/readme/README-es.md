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

![Screenshot](/web/screenshot.png "Screenshot")


<div align="center">
	<a href="https://github.com/th-ch/youtube-music/releases/latest">
		<img src="/web/youtube-music.svg" width="400" height="100" alt="YouTube Music SVG">
	</a>
</div>

Lee esto en otros idiomas: [🏴 Inglés](../../README.md), [🇰🇷 Coreano](./README-ko.md), [🇫🇷 Francés](./README-fr.md), [🇮🇸 Islandés](./README-is.md), [🇪🇸 Español](./README-es.md), [🇷🇺 Ruso](./README-ru.md), [🇺🇦 Ucraniano](./README-uk.md), [🇧🇷 Portugués](./README-pt.md), [🇯🇵 Japonés](./README-ja.md)

**Electron wrapper de YouTube Music con las siguientes características:**

- Apariencia y sensación nativa, tiene como objetivo mantener la interfaz original
- Framework para plugins personalizados: cambia YouTube Music según tus necesidades (estilo, contenido, funciones), habilita/deshabilita plugins con un solo clic

## Imagen de demostración

|                  Pantalla del reproductor (color del álbum como tema y luz ambiental)                     |
|:---------------------------------------------------------------------------------------------------------:|
|![Screenshot1](https://github.com/th-ch/youtube-music/assets/16558115/53efdf73-b8fa-4d7b-a235-b96b91ea77fc)|

## Contenido

- [Características](#características)
- [Plugins disponibles](#plugins-disponibles)
- [Traducción](#traducción)
- [Descarga](#descarga)
    - [Arch Linux](#arch-linux)
    - [macOS](#macos)
    - [Windows](#windows)
        - [Cómo instalar sin conexión a internet? (en Windows)](#cómo-instalar-sin-conexión-a-internet-en-windows)
- [Temas](#temas)
- [Dev](#dev)
- [Crea tus propios plugins](#crea-tus-propios-plugins)
    - [Creación de un plugin](#creación-de-un-plugin)
    - [Casos de uso comunes](#casos-de-uso-comunes)
- [Compilar](#compilar)
- [Vista previa de producción](#vista-previa-de-producción)
- [Tests](#tests)
- [Licencia](#licencia)
- [Preguntas frecuentes](#preguntas-frecuentes)

## Características:

- **Confirmación automática al pausar** (Siempre habilitado): desactiva
    el mensaje emergente ["¿Continuar reproduciendo?"](https://user-images.githubusercontent.com/61631665/129977894-01c60740-7ec6-4bf0-9a2c-25da24491b0e.png)
    que pausa la música después de cierto tiempo

- Y más ...

## Plugins disponibles:

- **Bloqueador de Anuncios**: Bloquea todos los anuncios y rastreadores de forma predeterminada

- **Acciones de Álbum**: Agrega botones de deshacer No me gusta, No me gusta, Me gusta, y Deshacer me gusta a todas las canciones de una lista de reproducción o álbum

- **Tema de Color del Álbum**: Aplica un tema dinámico y efectos visuales basados en la paleta de colores del álbum

- **Modo Ambiente**: Aplica un efecto de iluminación proyectando colores suaves del video en el fondo de tu pantalla

- **Compresor de Audio**: Aplica compresión al audio (reduce el volumen de las partes más fuertes de la señal y aumenta el
    volumen de las partes más suaves)

- **Barra de Navegación Difuminada**: hace que la barra de navegación sea transparente y borrosa

- **Omitir Restricciones de Edades**: omite la verificación de edad de YouTube

- **Selector de Subtítulos**: Habilita los subtítulos

- **Barra Lateral Compacta**: Siempre muestra la barra lateral en modo compacto

- **Crossfade**: Transición suave entre canciones

- **Desactivar Reproducción Automática**: Hace que cada canción comience en modo "pausado"

- **[Discord](https://discord.com/) Rich Presence**: Muestra a tus amigos lo que estás escuchando
    con [Rich Presence](https://user-images.githubusercontent.com/28219076/104362104-a7a0b980-5513-11eb-9744-bb89eabe0016.png)

- **Descargador**: Descarga
    MP3 [directamente desde la interfaz](https://user-images.githubusercontent.com/61631665/129977677-83a7d067-c192-45e1-98ae-b5a4927393be.png) [(youtube-dl)](https://github.com/ytdl-org/youtube-dl)

- **Volumen Exponencial**: Hace que el control de volumen
    sea [exponencial](https://greasyfork.org/en/scripts/397686-youtube-music-fix-volume-ratio/) para facilitar la
    selección de volúmenes más bajos

- **Menú en la Aplicación**: [da a las barras un aspecto elegante y oscuro](https://user-images.githubusercontent.com/78568641/112215894-923dbf00-8c29-11eb-95c3-3ce15db27eca.png)

    > (consulta [esta publicación](https://github.com/th-ch/youtube-music/issues/410#issuecomment-952060709) si tienes problemas
    para acceder al menú después de habilitar este plugin y la opción hide-menu)

- **Scrobbler**: Agrega soporte para scrobbling en [Last.fm](https://www.last.fm/) y [ListenBrainz](https://listenbrainz.org/)

- **Lumia Stream**: Agrega soporte para [Lumia Stream](https://lumiastream.com/)

- **Letras Genius**: Agrega soporte de letras para la mayoría de las canciones

- **Music Together**: Comparte una lista de reproducción con otros. Cuando el anfitrión reproduce una canción, todos los demás escucharán la misma canción

- **Navegación**: Flechas de siguiente/anterior integradas directamente en la interfaz, como en tu navegador favorito

- **Sin Inicio de Sesión de Google**: Elimina los botones y enlaces de inicio de sesión de Google de la interfaz

- **Notificaciones**: Muestra una notificación cuando comienza una canción
    a reproducirse ([notificaciones interactivas](https://user-images.githubusercontent.com/78568641/114102651-63ce0e00-98d0-11eb-9dfe-c5a02bb54f9c.png)
    están disponibles en Windows)

- **Picture-in-picture**: permite cambiar la aplicación al modo picture-in-picture

- **Velocidad de Reproducción**: Escucha rápido, escucha
    lento! [Agrega un deslizador que controla la velocidad de reproducción de las canciones](https://user-images.githubusercontent.com/61631665/129976003-e55db5ba-bf42-448c-a059-26a009775e68.png)

- **Volumen Preciso**: Controla el volumen de forma precisa utilizando la rueda del mouse/atajos de teclado, con un HUD personalizado y pasos de volumen personalizables

- **Atajos (& MPRIS)**: Permite configurar atajos globales para la reproducción (reproducir/pausar/siguiente/anterior) +
    desactivar [osd multimedia](https://user-images.githubusercontent.com/84923831/128601225-afa38c1f-dea8-4209-9f72-0f84c1dd8b54.png)
    al anular las teclas multimedia + habilitar Ctrl/CMD + F para buscar + habilitar el soporte mpris de Linux para
    teclas multimedia + [atajos personalizados](https://github.com/Araxeus/youtube-music/blob/1e591d6a3df98449bcda6e63baab249b28026148/providers/song-controls.js#L13-L50)
    para [usuarios avanzados](https://github.com/th-ch/youtube-music/issues/106#issuecomment-952156902)

- **Omitir Canciones No Deseadas**: Salta las canciones que no te gustan

- **Saltar Silencios**: Salta automáticamente las secciones de silencio

- [**SponsorBlock**](https://github.com/ajayyy/SponsorBlock): Salta automáticamente las partes que no son de música, como la introducción/final o
    partes de videos musicales donde no se reproduce la canción

- **Control Multimedia en la Barra de Tareas**: Controla la reproducción desde
    la [barra de tareas de Windows](https://user-images.githubusercontent.com/78568641/111916130-24a35e80-8a82-11eb-80c8-5021c1aa27f4.png)

- **TouchBar**: Diseño personalizado de TouchBar para macOS

- **Tuna OBS**: Integración con el complemento [Tuna](https://obsproject.com/forum/resources/tuna.843/) de [OBS](https://obsproject.com/)

- **Cambiador de Calidad de Video**: Permite cambiar la calidad del video con
    un [botón](https://user-images.githubusercontent.com/78568641/138574366-70324a5e-2d64-4f6a-acdd-dc2a2b9cecc5.png) en
    la superposición de video

- **Alternar Video**: Agrega
    un [botón](https://user-images.githubusercontent.com/28893833/173663950-63e6610e-a532-49b7-9afa-54cb57ddfc15.png) para
    alternar entre el modo de video/canción. también puede eliminar opcionalmente toda la pestaña de video

- **Visualizador**: Diferentes visualizadores de música

## Traducción

Puedes ayudar con la traducción en [Hosted Weblate](https://hosted.weblate.org/projects/youtube-music/).

<a href="https://hosted.weblate.org/engage/youtube-music/">
  <img src="https://hosted.weblate.org/widget/youtube-music/i18n/multi-auto.svg" alt="estado de traducción" />
  <img src="https://hosted.weblate.org/widget/youtube-music/i18n/287x66-black.png" alt="estado de traducción 2" />
</a>

## Descarga

Puedes consultar la [última versión](https://github.com/th-ch/youtube-music/releases/latest) para encontrar rápidamente la versión más reciente.

### Arch Linux

Instala el paquete [`youtube-music-bin`](https://aur.archlinux.org/packages/youtube-music-bin) desde AUR. Para obtener instrucciones de instalación de AUR, consulta esta [página del wiki](https://wiki.archlinux.org/index.php/Arch_User_Repository#Installing_packages).

### macOS

Puedes instalar la aplicación usando Homebrew (consulta la [definición de cask](https://github.com/th-ch/homebrew-youtube-music)):

```bash
brew install th-ch/youtube-music/youtube-music
```

Si instalas la aplicación manualmente y obtienes un error "está dañado y no se puede abrir" al iniciar la aplicación, ejecuta lo siguiente en la Terminal:

```bash
/usr/bin/xattr -cr /Applications/YouTube\ Music.app
```

### Windows

Puedes usar el [administrador de paquetes Scoop](https://scoop.sh) para instalar el paquete `youtube-music` desde
el [`extras` bucket](https://github.com/ScoopInstaller/Extras).

```bash
scoop bucket add extras
scoop install extras/youtube-music
```

Alternativamente, puedes usar [Winget](https://learn.microsoft.com/en-us/windows/package-manager/winget/), el administrador de paquetes CLI oficial de Windows 11 para instalar el paquete `th-ch.YouTubeMusic`.

*Nota: Microsoft Defender SmartScreen podría bloquear la instalación ya que proviene de un "editor desconocido". Esto también esválido para la instalación manual al intentar ejecutar el ejecutable (.exe) después de una descarga manual aquí en GitHub (mismo archivo).*

```bash
winget install th-ch.YouTubeMusic
```

#### Cómo instalar sin conexión a Internet? (en Windows)

- Descarga el archivo `*.nsis.7z` para _la arquitectura de tu dispositivo_ en la [página de lanzamientos](https://github.com/th-ch/youtube-music/releases/latest).
    - `x64` para Windows de 64 bits
    - `ia32` para Windows de 32 bits
    - `arm64` para Windows ARM64
- Descarga el instalador en la página de lanzamientos. (`*-Setup.exe`)
- Colócalos en el **mismo directorio**.
- Ejecuta el instalador.

## Temas

Puedes cargar archivos CSS para cambiar la apariencia de la aplicación (Opciones > Ajustes visuales > Tema).

Algunos temas predefinidos están disponibles en https://github.com/kerichdev/themes-for-ytmdesktop-player.

## Dev

```bash
git clone https://github.com/th-ch/youtube-music
cd youtube-music
pnpm install --frozen-lockfile
pnpm dev
```

## Crea tus propios plugins

Usando plugins, puedes:

- manipular la aplicación - se pasa el `BrowserWindow` de electron al controlador del plugin
- cambiar la interfaz manipulando el HTML/CSS

### Creación de un plugin

Crea una carpeta en `src/plugins/NOMBRE-DEL-PLUGIN`:

- `index.ts`: el archivo principal del plugin
```typescript
import style from './style.css?inline'; // importar estilo como inline

import { createPlugin } from '@/utils';

export default createPlugin({
  name: "Plugin Label",
  restartNeeded: true, // si el valor es true, ytmusic muestra el diálogo de reinicio
  config: {
    enabled: false,
  }, // tu configuración personalizada
  stylesheets: [style], // tu estilo personalizado,
  menu: async ({ getConfig, setConfig }) => {
    // Todos los métodos *Config están envueltos en Promise<T>
    const config = await getConfig();
    return [
      {
        label: "menu",
        submenu: [1, 2, 3].map((value) => ({
          label: `value ${value}`,
          type: "radio",
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

      // puedes comunicarte con el plugin de renderizado
      ipc.handle("some-event", () => {
        return "hello";
      });
    },
    // se activa cuando cambia la configuración
    onConfigChange(newConfig) { /* ... */ },
    // se activa cuando se desactiva el plugin
    stop(context) { /* ... */ },
  },
  renderer: {
    async start(context) {
      console.log(await context.ipc.invoke("some-event"));
    },
    // Solo disponible en el plugin de renderizado
    onPlayerApiReady(api: YoutubePlayer, context: RendererContext) {
      // establecer la configuración del plugin fácilmente
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

### Casos de uso comunes

- inyectar CSS personalizado: crea un archivo `style.css` en la misma carpeta y luego:

```typescript
// index.ts
import style from './style.css?inline'; // importar estilo como inline

import { createPlugin } from '@/utils';

export default createPlugin({
    name: 'Plugin Label',
    restartNeeded: true, // si el valor es true, ytmusic mostrará el diálogo de reinicio
    config: {
        enabled: false,
    }, // tu configuración personalizada
    stylesheets: [style], // tu estilo personalizado
    renderer() {} // define el hook del renderizador
});
```

- Si quieres cambiar el HTML:

```typescript
import { createPlugin } from '@/utils';

export default createPlugin({
    name: 'Plugin Label',
    restartNeeded: true, // si el valor es true, ytmusic mostrará el diálogo de reinicio
    config: {
        enabled: false,
    }, // tu configuración personalizada
    renderer() {
        // Elimina el botón de inicio de sesión
        document.querySelector(".sign-in-link.ytmusic-nav-bar").remove();
    } // define el hook del renderizador
});
```

- comunicación entre el front y el back: se puede hacer utilizando el módulo ipcMain de electron. Ver archivo `index.ts` y
    ejemplo en el plugin `sponsorblock`.

## Compilar

1. Clonar el repositorio
2. Seguir [esta guía](https://pnpm.io/es/installation) para instalar `pnpm`
3. Ejecutar `pnpm install --frozen-lockfile` para instalar las dependencias
4. Ejecutar `pnpm build:OS`

- `pnpm dist:win` - Windows
- `pnpm dist:linux` - Linux (amd64)
- `pnpm dist:linux:deb-arm64` - Linux (arm64 para Debian)
- `pnpm dist:linux:rpm-arm64` - Linux (arm64 para Fedora)
- `pnpm dist:mac` - macOS (amd64)
- `pnpm dist:mac:arm64` - macOS (arm64)

Construye la aplicación para macOS, Linux y Windows,
utilizando [electron-builder](https://github.com/electron-userland/electron-builder).

## Vista previa de producción

```bash
pnpm start
```

## Tests

```bash
pnpm test
```

Utiliza [Playwright](https://playwright.dev/) para probar la aplicación.

## Licencia

MIT © [th-ch](https://github.com/th-ch/youtube-music)

## Preguntas frecuentes

### ¿Por qué no se muestra el menú de aplicaciones?

Si la opción `Ocultar menú` está activada - puedes mostrar el menú con la tecla <kbd>alt</kbd> (o <kbd>\`</kbd> [acento grave] si estás utilizando el plugin in-app-menu)
