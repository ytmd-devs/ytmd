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

Leia em outros idiomas: [🏴 Inglês](../../README.md), [🇰🇷 Coreano](./README-ko.md), [🇫🇷 Francês](./README-fr.md), [🇮🇸 Islandês](./README-is.md), [🇪🇸 Espanhol](./README-es.md), [🇷🇺 Russo](./README-ru.md), [🇺🇦 Ucraniano](./README-uk.md), [🇧🇷 Português](./README-pt.md)

**Wrapper do Electron para o YouTube Music com os seguintes recursos:**

- Visual e comportamento nativos: Mantém a interface original do YouTube Music.
- Estrutura para plugins personalizados: Adapte o YouTube Music às suas necessidades (estilo, conteúdo, funcionalidades). Ative/desative plugins com um clique.

## Imagem de demonstração

|                  Tela do Player (tema de cores do álbum e luz ambiente)                     |
|:---------------------------------------------------------------------------------------------------------:|
|![Screenshot1](https://github.com/th-ch/youtube-music/assets/16558115/53efdf73-b8fa-4d7b-a235-b96b91ea77fc)|

## Conteúdo

- [Recursos](#recursos)
- [Plugins disponíveis](#plugins-disponíveis)
- [Tradução](#tradução)
- [Download](#download)
  - [Arch Linux](#arch-linux)
  - [MacOS](#macos)
  - [Windows](#windows)
    - [Como instalar sem conexão à internet? (no Windows)](#como-instalar-sem-conexão-à-internet-no-windows)
- [Temas](#temas)
- [Dev](#dev)
- [Crie seus próprios plugins](#crie-seus-próprios-plugins)
  - [Criando um plugin](#criando-um-plugin)
  - [Casos de uso comuns](#casos-de-uso-comuns)
- [Compilar](#compilar)
- [Prévia de produção](#prévia-de-produção)
- [Testes](#testes)
- [Licença](#licença)
- [Perguntas Frequentes](#perguntas-frequentes)

## Recursos:

- **Confirmação automática quando pausado** (Sempre ativado): desativa
  o popup ["Continuar assistindo?"](https://user-images.githubusercontent.com/61631665/129977894-01c60740-7ec6-4bf0-9a2c-25da24491b0e.png)
  que pausa a música após um certo tempo

- E mais...

## Plugins disponíveis:

- **Bloqueador de anúncios**: Bloqueia todos os anúncios e rastreamentos automaticamente

- **Ações de Álbum**: Adiciona botões para Remover dislike, Dar dislike, Curtir e Remover curtida em todas as músicas de uma playlist ou álbum

- **Tema de cores do álbum**: Aplica um tema dinâmico e efeitos visuais baseados na paleta de cores do álbum

- **Modo ambiente**: Cria um efeito de iluminação projetando cores suaves do vídeo no fundo da tela

- **Compressor de áudio**: Aplica compressão ao áudio (reduz o volume das partes mais altas e aumenta o das mais baixas)

- **Barra de navegação desfocada**: Torna a barra de navegação transparente e desfocada

- **Contornar restrições de idade**: Ignora a verificação de idade do YouTube

- **Seletor de legendas**: Ativa legendas

- **Barra lateral compacta**: Mantém a barra lateral sempre no modo compacto

- **Crossfade**: Transição suave entre músicas

- **Desativar reprodução automática**: Faz com que todas as músicas iniciem no modo "pausado"

- **[Discord](https://discord.com/) Rich Presence**: Mostra para seus amigos o que você está ouvindo com [Rich Presence](https://user-images.githubusercontent.com/28219076/104362104-a7a0b980-5513-11eb-9744-bb89eabe0016.png)

- **Downloader**: Baixa MP3 [diretamente da interface](https://user-images.githubusercontent.com/61631665/129977677-83a7d067-c192-45e1-98ae-b5a4927393be.png) [(youtube-dl)](https://github.com/ytdl-org/youtube-dl)

- **Equalizador**: Adiciona filtros para aumentar ou reduzir faixas específicas de frequência (ex: reforço de graves)

- **Volume exponencial**: Torna o controle de volume [exponencial](https://greasyfork.org/en/scripts/397686-youtube-music-fix-volume-ratio/) para facilitar a seleção de volumes mais baixos

- **Menu integrado**: [Dá às barras um visual elegante e escuro](https://user-images.githubusercontent.com/78568641/112215894-923dbf00-8c29-11eb-95c3-3ce15db27eca.png)

  > (veja [este post](https://github.com/th-ch/youtube-music/issues/410#issuecomment-952060709) se tiver problemas para acessar o menu após ativar este plugin e a opção de ocultar menu)

- **Scrobbler**: Adiciona suporte para scrobbling no [Last.fm](https://www.last.fm/) e [ListenBrainz](https://listenbrainz.org/)

- **Lumia Stream**: Adiciona suporte para [Lumia Stream](https://lumiastream.com/)

- **Letras Genius**: Adiciona suporte a letras para a maioria das músicas

- **Música Juntos**: Compartilhe uma playlist com outros. Quando o host toca uma música, todos ouvem a mesma música

- **Navegação**: Botões de avançar/voltar integrados diretamente na interface, como no seu navegador favorito

- **Sem login do Google**: Remove botões e links de login do Google da interface

- **Notificações**: Exibe uma notificação quando uma música começa a tocar ([notificações interativas](https://user-images.githubusercontent.com/78568641/114102651-63ce0e00-98d0-11eb-9dfe-c5a02bb54f9c.png) disponíveis no Windows)

- **Picture-in-picture**: Permite alternar o aplicativo para o modo picture-in-picture

- **Velocidade de reprodução**: Ouça rápido, ouça devagar! [Adiciona um controle deslizante para ajustar a velocidade](https://user-images.githubusercontent.com/61631665/129976003-e55db5ba-bf42-448c-a059-26a009775e68.png)

- **Volume preciso**: Controle o volume com precisão usando roda do mouse/atalhos, com HUD personalizado e níveis de volume customizáveis

- **Atalhos (& MPRIS)**: Permite configurar teclas de atalho globais para controle (play/pause/próxima/anterior) + desativa [OSD de mídia](https://user-images.githubusercontent.com/84923831/128601225-afa38c1f-dea8-4209-9f72-0f84c1dd8b54.png) sobrescrevendo teclas de mídia + ativa Ctrl/CMD + F para busca + suporte a MPRIS no Linux para teclas de mídia + [atalhos personalizados](https://github.com/Araxeus/youtube-music/blob/1e591d6a3df98449bcda6e63baab249b28026148/providers/song-controls.js#L13-L50) para [usuários avançados](https://github.com/th-ch/youtube-music/issues/106#issuecomment-952156902)

- **Pular músicas marcadas com "não gostei"**: Ignora automaticamente músicas que você deu dislike

- **Pular silêncios**: Ignora automaticamente seções silenciosas

- [**SponsorBlock**](https://github.com/ajayyy/SponsorBlock): Ignora automaticamente partes não musicais como introduções/outros ou partes de clipes onde a música não está tocando

- **Letras sincronizadas**: Fornece letras sincronizadas para músicas, usando serviços como [LRClib](https://lrclib.net)

- **Controle de mídia na barra de tarefas**: Controle a reprodução pela [barra de tarefas do Windows](https://user-images.githubusercontent.com/78568641/111916130-24a35e80-8a82-11eb-80c8-5021c1aa27f4.png)

- **TouchBar**: Layout personalizado para a TouchBar do macOS

- **Tuna OBS**: Integração com o plugin [Tuna](https://obsproject.com/forum/resources/tuna.843/) do [OBS](https://obsproject.com/)

- **Seletor de qualidade de vídeo**: Permite alterar a qualidade do vídeo com um [botão](https://user-images.githubusercontent.com/78568641/138574366-70324a5e-2d64-4f6a-acdd-dc2a2b9cecc5.png) na sobreposição do vídeo

- **Alternar vídeo**: Adiciona um [botão](https://user-images.githubusercontent.com/28893833/173663950-63e6610e-a532-49b7-9afa-54cb57ddfc15.png) para alternar entre modos Vídeo/Música. Pode também remover completamente a aba de vídeo

- **Visualizador**: Diferentes visualizadores de música

## Tradução

Você pode ajudar com as traduções no [Hosted Weblate](https://hosted.weblate.org/projects/youtube-music/).

<a href="https://hosted.weblate.org/engage/youtube-music/">
  <img src="https://hosted.weblate.org/widget/youtube-music/i18n/multi-auto.svg" alt="status da tradução" />
  <img src="https://hosted.weblate.org/widget/youtube-music/i18n/287x66-black.png" alt="status da tradução 2" />
</a>

## Download

Você pode verificar o [último lançamento](https://github.com/th-ch/youtube-music/releases/latest) para encontrar rapidamente a versão mais recente.

### Arch Linux

Instale o pacote [`youtube-music-bin`](https://aur.archlinux.org/packages/youtube-music-bin) do AUR. Para instruções de instalação do AUR, consulte esta [página da wiki](https://wiki.archlinux.org/index.php/Arch_User_Repository#Installing_packages).

### macOS

Você pode instalar o aplicativo usando Homebrew (veja a [definição do cask](https://github.com/th-ch/homebrew-youtube-music)):

```bash
brew install th-ch/youtube-music/youtube-music
```

Se você instalar o aplicativo manualmente e receber o erro "is damaged and can’t be opened." ao abrir o app, execute o seguinte no Terminal:

```bash
/usr/bin/xattr -cr /Applications/YouTube\ Music.app
```

### Windows

Você pode usar o [gerenciador de pacotes Scoop](https://scoop.sh) para instalar o pacote `youtube-music` do [`extras bucket`](https://github.com/ScoopInstaller/Extras).

```bash
scoop bucket add extras
scoop install extras/youtube-music
```

Alternativamente, você pode usar o [Winget](https://learn.microsoft.com/en-us/windows/package-manager/winget/), o gerenciador de pacotes CLI oficial do Windows 11, para instalar o pacote `th-ch.YouTubeMusic`.

*Nota: O Microsoft Defender SmartScreen pode bloquear a instalação por ser de um "publicador desconhecido". Isso também acontece na instalação manual ao tentar executar o arquivo .exe após download manual aqui no GitHub (mesmo arquivo).*

```bash
winget install th-ch.YouTubeMusic
```

#### Como instalar sem conexão à internet? (no Windows)

- Baixe o arquivo `*.nsis.7z` para _sua arquitetura de dispositivo_ na [página de lançamentos](https://github.com/th-ch/youtube-music/releases/latest).
  - `x64` para Windows 64-bit
  - `ia32` para Windows 32-bit
  - `arm64` para Windows ARM64
- Baixe o instalador na página de lançamentos (`*-Setup.exe`)
- Coloque os arquivos no **mesmo diretório**
- Execute o instalador

## Temas

Você pode carregar arquivos CSS para alterar a aparência do aplicativo (Opções > Ajustes Visuais > Temas).

Alguns temas pré-definidos estão disponíveis em https://github.com/kerichdev/themes-for-ytmdesktop-player.

## Dev

```bash
git clone https://github.com/th-ch/youtube-music
cd youtube-music
pnpm install --frozen-lockfile
pnpm dev
```

## Crie seus próprios plugins

Usando plugins, você pode:

- Manipular o aplicativo - o `BrowserWindow` do electron é passado para o manipulador de plugins
- Alterar a interface manipulando o HTML/CSS

### Criando um plugin

Crie uma pasta em `src/plugins/NOMBRE-DEL-PLUGIN`:

- `index.ts`: o arquivo principal do plugin
```typescript
import style from './style.css?inline'; // importar estilo como inline

import { createPlugin } from '@/utils';

export default createPlugin({
  name: "Plugin Label",
  restartNeeded: true, // se true, o ytmusic mostra diálogo de reinício
  config: {
    enabled: false,
  }, // sua configuração personalizada
  stylesheets: [style], // seu estilo personalizado
  menu: async ({ getConfig, setConfig }) => {
    // Todos os métodos *Config são wrappers Promise<T>
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

      // você pode se comunicar com o plugin renderer
      ipc.handle("some-event", () => {
        return "hello";
      });
    },
    // disparado quando a configuração muda
    onConfigChange(newConfig) { /* ... */ },
    // disparado quando o plugin é desativado
    stop(context) { /* ... */ },
  },
  renderer: {
    async start(context) {
      console.log(await context.ipc.invoke("some-event"));
    },
    // Hook disponível apenas no renderer
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

### Casos de uso comuns

- **Injetar CSS personalizado**: crie um arquivo `style.css` na mesma pasta e então:

```typescript
// index.ts
import style from './style.css?inline'; // importa estilo como inline

import { createPlugin } from '@/utils';

export default createPlugin({
    name: 'Plugin Label',
    restartNeeded: true, // se true, o ytmusic mostrará um diálogo de reinício
    config: {
        enabled: false,
    }, // sua configuração personalizada
    stylesheets: [style], // seu estilo personalizado
    renderer() {} // define o hook renderer
});
```

- Se quiser alterar o HTML:

```typescript
import { createPlugin } from '@/utils';

export default createPlugin({
    name: 'Plugin Label',
    restartNeeded: true, // se true, o ytmusic mostrará o diálogo de reinício
    config: {
        enabled: false,
    }, // sua configuração personalizada
    renderer() {
        // Remove o botão de login
        document.querySelector(".sign-in-link.ytmusic-nav-bar").remove();
    } // define o hook renderer
});
```

- Comunicação entre front-end e back-end: pode ser feita usando o módulo ipcMain do Electron. Consulte o arquivo `index.ts` e o exemplo no plugin `sponsorblock`.

## Compilar

1. Clone o repositório
2. Siga [este guia](https://pnpm.io/installation) para instalar o `pnpm`
3. Execute `pnpm install --frozen-lockfile` para instalar as dependências
4. Execute `pnpm build:OS`

- `pnpm dist:win` - Windows
- `pnpm dist:linux` - Linux (amd64)
- `pnpm dist:linux:deb-arm64` - Linux (arm64 para Debian)
- `pnpm dist:linux:rpm-arm64` - Linux (arm64 para Fedora)
- `pnpm dist:mac` - macOS (amd64)
- `pnpm dist:mac:arm64` - macOS (arm64)

Compila o aplicativo para macOS, Linux e Windows,
usando [electron-builder](https://github.com/electron-userland/electron-builder).

## Prévia de Produção

```bash
pnpm start
```

## Testes

```bash
pnpm test
```

Utiliza [Playwright](https://playwright.dev/) para testar o aplicativo.

## Licença

MIT © [th-ch](https://github.com/th-ch/youtube-music)

## Perguntas Frequentes

### Por que o menu do aplicativo não aparece?

Se a opção `Ocultar menu` estiver ativada - você pode exibir o menu com a tecla <kbd>alt</kbd> (ou <kbd>\`</kbd> [acento grave] se estiver usando o plugin in-app-menu)
