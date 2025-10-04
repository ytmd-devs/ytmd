<div align="center">

# 유튜브 뮤직 (YouTube Music)

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
		<img src="../../web/youtube-music.svg" width="400" height="100" alt="YouTube Music SVG">
	</a>
</div>

다른 언어로 읽어보세요: [🏴 영어](../../README.md), [🇰🇷 한국인](./README-ko.md), [🇫🇷 프랑스 국민](./README-fr.md), [🇮🇸 아이슬란드어](./README-is.md), [🇪🇸 스페인 사람](./README-es.md), [🇷🇺 러시아인](./README-ru.md), [🇺🇦 우크라이나어](./README-uk.md), [🇧🇷 포르투갈어](./README-pt.md), [🇯🇵 일본어](./README-ja.md)

**유튜브 뮤직의 Electron 래퍼; 기능:**

- 원래의 인터페이스를 유지하는 것을 목표로 하는 네이티브 디자인 및 느낌
- 맞춤 플러그인을 위한 프레임워크: 스타일, 콘텐츠, 기능 등 필요에 따라 유튜브 뮤직을 변경하고, 클릭 한 번으로 플러그인을 활성화/비활성화할 수 있습니다.

## Content

- [기능](#기능)
- [사용 가능한 플러그인](#사용-가능한-플러그인)
- [번역](#번역)
- [다운로드](#다운로드)
  - [Arch Linux](#arch-linux)
  - [MacOS](#macos)
  - [Windows](#windows)
    - [(Windows에서) 네트워크에 연결하지 않고 설치하는 방법은 무엇인가요?](#windows에서-네트워크에-연결하지-않고-설치하는-방법은-무엇인가요)
- [테마](#테마)
- [개발](#개발)
- [나만의 플러그인 만들기](#나만의-플러그인-만들기)
  - [플러그인 만들기](#플러그인-만들기)
  - [일반적인 사용 예](#일반적인-사용-예)
- [빌드](#빌드)
- [프로덕션 빌드 미리보기](#프로덕션-빌드-미리보기)
- [테스트](#테스트)
- [라이선스](#라이선스)
- [자주 묻는 질문](#자주-묻는-질문)

## 기능:

- **일시 정지 시 자동 확인** (항상 활성화 됨): 일정 시간이 지나면 음악을 일시 정지하는 ["계속 시청하시겠습니까?"](https://user-images.githubusercontent.com/61631665/129977894-01c60740-7ec6-4bf0-9a2c-25da24491b0e.png) 팝업을 비활성화합니다.

- 이외에 더 많은 기능 ...

## 사용 가능한 플러그인:

- **애드블록**: 모든 광고와 트래커를 즉시 차단합니다

- **앨범 컬러 기반 테마**: 앨범 색상 팔레트를 기반으로 동적 테마 및 시각 효과를 적용합니다

- **앰비언트 모드**: 영상의 간접 조명을 화면 배경에 투사합니다.

- **오디오 컴프레서**: 오디오에 컴프레서를 적용합니다 (신호에서 가장 시끄러운 부분의 음량을 낮추고 가장 조용한 부분의 음량을 높임)

- **네비게이션 바 흐림 효과**: 내비게이션 바를 투명하고 흐릿하게 만듭니다

- **나이 제한 우회**: 유튜브의 나이 제한을 우회합니다

- **자막 선택기**: 자막을 활성화합니다

- **컴팩트 사이드바**: 사이드바를 항상 컴팩트 모드로 설정합니다

- **크로스페이드**: 노래 사이에 크로스페이드 효과를 적용합니다

- **자동 재생 해제**: 노래를 '일시 정지' 모드로 시작하게 합니다

- [**디스코드 활동 상태**](https://discord.com/): [활동 상태 (Rich Presence)](https://user-images.githubusercontent.com/28219076/104362104-a7a0b980-5513-11eb-9744-bb89eabe0016.png)를 사용하여 친구들에게 내가 듣는 음악을 보여주세요

- **다운로더**: UI에서 [직접](https://user-images.githubusercontent.com/61631665/129977677-83a7d067-c192-45e1-98ae-b5a4927393be.png) MP3/소스 오디오를 다운로드하세요

- **지수 볼륨**: 음량 슬라이더를 [지수적](https://greasyfork.org/en/scripts/397686-youtube-music-fix-volume-ratio/)으로 만들어 더 낮은 음량을 쉽게 선택할 수 있도록 합니다.

- **인앱 메뉴**: [메뉴 표시줄을 더 멋지게, 그리고 다크 또는 앨범의 색상으로 만듭니다](https://user-images.githubusercontent.com/78568641/112215894-923dbf00-8c29-11eb-95c3-3ce15db27eca.png)

  > (이 플러그인 및 메뉴 숨기기 옵션을 활성화한 후 메뉴에 액세스하는 데 문제가 있는 경우 [이 글](https://github.com/th-ch/youtube-music/issues/410#issuecomment-952060709)을 참조하세요)

- [**Last.fm**](https://www.last.fm/): Last.fm에 대한 스크러블 지원을 추가합니다

- **Lumia Stream**: [Lumia Stream](https://lumiastream.com/) 지원을 추가합니다

- **Genius 가사**: 더 많은 곡에 대해 가사 지원을 추가합니다

- **네비게이션**: 브라우저에서처럼, UI에 직접 통합된 앞으로/뒤로 탐색하는 화살표를 추가합니다

- **Google 로그인 제거**: UI에서 Google 로그인 버튼 및 링크 제거하기

- **알림**: 노래 재생이 시작되면 알림을 표시 (Windows에서는 [대화형 알림](https://user-images.githubusercontent.com/78568641/114102651-63ce0e00-98d0-11eb-9dfe-c5a02bb54f9c.png) 사용 가능)

- **PiP**: 앱을 PiP 모드로 전환할 수 있게 허용합니다

- **재생 속도**: 빨리 듣거나, 천천히 들어보세요! [노래 속도를 제어하는 슬라이더를 추가합니다](https://user-images.githubusercontent.com/61631665/129976003-e55db5ba-bf42-448c-a059-26a009775e68.png)

- **정확한 음량**: 사용자 지정 HUD와 사용자 지정 음량 단계 및 마우스 휠/단축키를 사용하여 음량을 정확하게 제어하세요

- **영상 품질 체인저**: 영상 오버레이의 [버튼](https://user-images.githubusercontent.com/78568641/138574366-70324a5e-2d64-4f6a-acdd-dc2a2b9cecc5.png)으로 영상 품질을 변경할 수 있게 합니다

- **단축키 (& MPRIS)**: 재생을 위한 전역 단축키 설정 허용 (재생/일시 정지/다음/이전) + 미디어 키를 재정의하여 [미디어 osd](https://user-images.githubusercontent.com/84923831/128601225-afa38c1f-dea8-4209-9f72-0f84c1dd8b54.png) 비활성화 + Ctrl/CMD + F 검색 활성화 + 미디어 키에 대한 리눅스 MPRIS 지원 활성화 + [고급 사용자](https://github.com/th-ch/youtube-music/issues/106#issuecomment-952156902)를 위한 [사용자 지정 단축키](https://github.com/Araxeus/youtube-music/blob/1e591d6a3df98449bcda6e63baab249b28026148/providers/song-controls.js#L13-L50) 지원

- **무음 건너뛰기** - 노래의 무음 부분을 자동으로 건너뜁니다

- [**SponsorBlock**](https://github.com/ajayyy/SponsorBlock): 인트로/아웃트로와 같은 음악이 아닌 부분이나, 노래가 재생되지 않는 뮤직 비디오의 일부를 자동으로 건너뜁니다

- **작업표시줄 미디어 컨트롤**: [Windows 작업표시줄](https://user-images.githubusercontent.com/78568641/111916130-24a35e80-8a82-11eb-80c8-5021c1aa27f4.png)에서 재생을 제어하세요

- **TouchBar**: macOS 사용자를 위한 TouchBar 위젯을 추가합니다

- **Tuna-OBS**: [OBS](https://obsproject.com/)의 플러그인, [Tuna](https://obsproject.com/forum/resources/tuna.843/)와 통합을 활성화합니다

- **영상 전환**: 영상/노래 모드를 전환하는 [버튼](https://user-images.githubusercontent.com/28893833/173663950-63e6610e-a532-49b7-9afa-54cb57ddfc15.png)을 추가합니다. 선택적으로 전체 영상 탭을 제거할 수도 있습니다

- **비주얼라이저**: 플레이어에 시각화 도구 추가

## 번역

[Hosted Weblate](https://hosted.weblate.org/projects/youtube-music/)에서 번역을 도울 수 있습니다.

<a href="https://hosted.weblate.org/engage/youtube-music/">
  <img src="https://hosted.weblate.org/widget/youtube-music/i18n/multi-auto.svg" alt="번역 상태" />
  <img src="https://hosted.weblate.org/widget/youtube-music/i18n/287x66-black.png" alt="번역 상태 2" />
</a>

## 다운로드

[최신 릴리즈](https://github.com/th-ch/youtube-music/releases/latest)를 확인하여 최신 버전을 빠르게 찾을 수 있습니다.

### Arch Linux

AUR에서 [`youtube-music-bin`](https://aur.archlinux.org/packages/youtube-music-bin) 패키지를 설치합니다. AUR 설치 지침은 [이 위키 페이지](https://wiki.archlinux.org/index.php/Arch_User_Repository#Installing_packages)를 참조하세요.

### MacOS

Homebrew를 사용하여 앱을 설치할 수 있습니다:
```bash
brew install --cask https://raw.githubusercontent.com/th-ch/youtube-music/master/youtube-music.rb
```

(앱을 수동으로 설치하고) 앱을 실행할 때 `손상되었기 때문에 열 수 없습니다.`라는 오류가 발생하면 터미널에서 다음을 실행하세요:

```bash
/usr/bin/xattr -cr /Applications/YouTube\ Music.app
```

### Windows

[Scoop 패키지 매니저](https://scoop.sh)를 사용하여 [`extras` 버킷](https://github.com/ScoopInstaller/Extras)에서 `youtube-music` 패키지를 설치할 수 있습니다.

```bash
scoop bucket add extras
scoop install extras/youtube-music
```

또는 Windows 11의 공식 CLI 패키지 관리자인 [Winget](https://learn.microsoft.com/en-us/windows/package-manager/winget/)을 사용하여 `th-ch.YouTubeMusic` 패키지를 설치할 수 있습니다.

*참고: "알 수 없는 게시자"의 파일이기 때문에 Microsoft Defender의 SmartScreen에서 설치를 차단할 수 있습니다. 이는 GitHub에서 동일 파일을 수동으로 다운로드한 후 실행 파일(.exe)을 실행하려고 할 때도 마찬가지로 발생합니다.*

```bash
winget install th-ch.YouTubeMusic
```

#### (Windows에서) 네트워크에 연결하지 않고 설치하는 방법은 무엇인가요?

- [릴리즈 페이지](https://github.com/th-ch/youtube-music/releases/latest)에서 _본인 기기 아키텍처_에 맞는 `*.nsis.7z` 파일을 다운로드하세요.
  - `x64`는 64비트 Windows 용입니다.
  - `ia32`는 32비트 Windows 용입니다.
  - `arm64`는 ARM64 Windows 용입니다.
- 릴리즈 페이지에서 설치기를 다운로드하세요. (`*-Setup.exe`)
- 두 파일을 **동일한 위치**에 놓아주세요.
- 설치기를 실행하세요.

## 테마

CSS 파일을 로드하여 애플리케이션의 모양을 변경할 수 있습니다(설정 > 시각적 변경 > 테마).

일부 사전 정의 테마는 https://github.com/kerichdev/themes-for-ytmdesktop-player 에서 사용할 수 있습니다.

## 개발

```bash
git clone https://github.com/th-ch/youtube-music
cd youtube-music
pnpm install --frozen-lockfile
pnpm dev
```

## 나만의 플러그인 만들기

플러그인을 사용하면 할 수 있는 것들:

- 앱 조작 - Electron에서 `BrowserWindow`가 플러그인 핸들러로 전달
- HTML/CSS를 조작하여 프론트엔드를 변경

### 플러그인 만들기

`plugins/나만의-플러그인-이름`에 폴더를 만듭니다:

- `index.ts`: 플러그인의 메인 파일입니다.
```typescript
import style from './style.css?inline'; // 스타일을 인라인으로 가져옵니다

import { createPlugin } from '@/utils';

export default createPlugin({
  name: 'Plugin Label',
  restartNeeded: true, // 값이 true면, YTM은 재시작 다이얼로그를 표시합니다
  config: {
    enabled: false,
  }, // 나의 커스텀 config
  stylesheets: [style], // 나의 스타일
  menu: async ({ getConfig, setConfig }) => {
    // 모든 *Config 메서드는 Promise<T>로 래핑됩니다
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

      // 이를 사용하여 렌더러 플러그인과 통신할 수 있습니다
      ipc.handle('some-event', () => {
        return 'hello';
      });
    },
    // config가 변경되면 실행됩니다
    onConfigChange(newConfig) { /* ... */ },
    // 플러그인이 비활성화되면 실행됩니다
    stop(context) { /* ... */ },
  },
  renderer: {
    async start(context) {
      console.log(await context.ipc.invoke('some-event'));
    },
    // 렌더러에서만 사용 가능한 훅입니다
    onPlayerApiReady(api: YoutubePlayer, context: RendererContext<T>) {
      // 플러그인의 config를 간단하게 설정할 수 있습니다
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

### 일반적인 사용 예

- 사용자 정의 CSS 삽입: 같은 폴더에 `style.css` 파일을 생성합니다:

```typescript
// index.ts
import style from './style.css?inline'; // 스타일을 인라인으로 가져옵니다

import { createPlugin } from '@/utils';

export default createPlugin({
  name: 'Plugin Label',
  restartNeeded: true, // 값이 true면, YTM은 재시작 다이얼로그를 표시합니다
  config: {
    enabled: false,
  }, // 나의 커스텀 config
  stylesheets: [style], // 나의 커스텀 스타일
  renderer() {} // 렌더러 훅 정의
});
```

- HTML을 변경하려는 경우:

```typescript
import { createPlugin } from '@/utils';

export default createPlugin({
  name: 'Plugin Label',
  restartNeeded: true, // 값이 true면, YTM은 재시작 다이얼로그를 표시합니다
  config: {
    enabled: false,
  }, // 나의 커스텀 config
  renderer() {
    // 로그인 버튼을 제거합니다
    document.querySelector(".sign-in-link.ytmusic-nav-bar").remove();
  } // 렌더러 훅 정의
});
```

- 프론트엔드와 백엔드 간의 통신: Electron의 `ipcMain` 모듈을 사용하여 수행할 수 있습니다. `SponsorBlock` 플러그인의 `index.ts` 파일과 예제를 참조하세요.

## 빌드

1. 레포지토리를 복제 (clone) 합니다
2. [이 가이드](https://pnpm.io/installation)에 따라 `pnpm`을 설치합니다.
3. `pnpm install --frozen-lockfile`을 실행하여 종속성을 설치합니다.
4. `pnpm build:OS`을 실행합니다.

- `pnpm dist:win` - Windows
- `pnpm dist:linux` - Linux
- `pnpm dist:mac` - MacOS

[electron-builder](https://github.com/electron-userland/electron-builder)를 사용하여 macOS, Linux 및 Windows용 앱을 빌드합니다.

## 프로덕션 빌드 미리보기

```bash
pnpm start
```

## 테스트

```bash
pnpm test
```

[Playwright](https://playwright.dev/)를 사용하여 앱을 테스트합니다.

## 라이선스

MIT © [th-ch](https://github.com/th-ch/youtube-music)

## 자주 묻는 질문

### 앱 메뉴가 표시되지 않는 이유는 무엇인가요?

`메뉴 숨기기` 옵션이 켜져 있는 경우 - <kbd>alt</kbd> 키(또는 인앱 메뉴 플러그인을 사용하는 경우 <kbd>\`</kbd> [백틱] 키)로 메뉴를 표시할 수 있습니다.
