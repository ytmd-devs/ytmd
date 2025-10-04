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
		<img src="../../web/youtube-music.svg" width="400" height="100" alt="YouTube Music SVG">
	</a>
</div>

他の言語で読む: [🏴 英語](../../README.md), [🇰🇷 韓国語](./README-ko.md), [🇫🇷 フランス語](./README-fr.md), [🇮🇸 アイスランド語](./README-is.md), [🇪🇸 スペイン語](./README-es.md), [🇷🇺 ロシア語](./README-ru.md), [🇺🇦 ウクライナ語](./README-uk.md)

**YouTube MusicのElectronラッパーには以下の機能があります:**

- ネイティブの外観と操作感、元のインターフェースを維持することを目指しています
- カスタムプラグインのフレームワーク: スタイル、コンテンツ、機能など、YouTube Musicをニーズに合わせて変更し、ワンクリックでプラグインを有効/無効にできます

## デモ画像

|                          プレーヤースクリーン (アルバムカラーテーマ & アンビエントライト)                                |
|:---------------------------------------------------------------------------------------------------------:|
|![Screenshot1](https://github.com/th-ch/youtube-music/assets/16558115/53efdf73-b8fa-4d7b-a235-b96b91ea77fc)|

## コンテンツ

- [機能](#機能)
- [利用可能なプラグイン](#利用可能なプラグイン)
- [翻訳](#翻訳)
- [ダウンロード](#ダウンロード)
  - [Arch Linux](#arch-linux)
  - [MacOS](#macos)
  - [Windows](#windows)
    - [ネットワーク接続なしでインストールする方法 (Windows)](#ネットワーク接続なしでインストールする方法-windows)
- [テーマ](#テーマ)
- [開発](#開発)
- [独自のプラグインを作成する](#独自のプラグインを作成する)
  - [プラグインの作成](#プラグインの作成)
  - [一般的な使用例](#一般的な使用例)
- [ビルド](#ビルド)
- [プロダクションプレビュー](#プロダクションプレビュー)
- [テスト](#テスト)
- [ライセンス](#ライセンス)
- [FAQ](#faq)

## 機能:

- **一時停止時の自動確認** (常に有効): 一定時間後に音楽を一時停止する["視聴を続けますか？"](https://user-images.githubusercontent.com/61631665/129977894-01c60740-7ec6-4bf0-9a2c-25da24491b0e.png)ポップアップを無効にします

 - その他の機能...

## 利用可能なプラグイン:

- **広告ブロッカー**: すべての広告とトラッキングをブロックします

- **アルバムアクション**: プレイリストやアルバム内のすべての曲に「嫌いではない」「嫌い」「好き」「好きではない」ボタンを追加します

- **アルバムカラーテーマ**: アルバムのカラーパレットに基づいて動的なテーマと視覚効果を適用します

- **アンビエントモード**: 動画から柔らかい色を画面の背景に投影するライティング効果を適用します

- **���ーディオコンプレッサー**: オーディオにコンプレッションを適用します（信号の最も大きな部分の音量を下げ、最も小さな部分の音量を上げます）

- **ナビゲーションバーのぼかし**: ナビゲーションバーを透明でぼやけたものにします

- **年齢制限の回避**: YouTubeの年齢確認を回避します

- **字幕選択**: 字幕を有効にします

- **コンパクトサイドバー**: サイドバーを常にコンパクトモードに設定します

- **クロスフェード**: 曲間にクロスフェードを適用します

- **自動再生の無効化**: すべての曲を「一時停止」モードで開始します

- **[Discord](https://discord.com/) リッチプレゼンス**: [リッチプレゼンス](https://user-images.githubusercontent.com/28219076/104362104-a7a0b980-5513-11eb-9744-bb89eabe0016.png)を使用して、友達にあなたが聴いている曲を表示します

- **ダウンローダー**: UIから直接MP3/ソースオーディオをダウンロードします

- **イコライザー**: 特定の周波数範囲をブーストまたはカットするフィルターを追加します（例: ベースブースター）

- **指数音量**: 音量スライダーを[指数関数的](https://greasyfork.org/en/scripts/397686-youtube-music-fix-volume-ratio/)にして、低い音量を選択しやすくします

- **アプリ内メニュー**: [メニューバーをおしゃれで暗い外観にします](https://user-images.githubusercontent.com/78568641/112215894-923dbf00-8c29-11eb-95c3-3ce15db27eca.png)

  > (このプラグインとメニュー非表示オプションを有効にした後、メニューにアクセスする際に問題がある場合は、[この投稿](https://github.com/th-ch/youtube-music/issues/410#issuecomment-952060709)を参照してください)

- **スクロブラー**: [Last.fm](https://www.last.fm/)や[ListenBrainz](https://listenbrainz.org/)のスクロブリングサポートを追加します

- **Lumia Stream**: [Lumia Stream](https://lumiastream.com/)のサポートを追加します

- **Genius 歌詞**: ほとんどの曲に歌詞サポートを追加します

- **Music Together**: プレイリストを他の人と共有します。ホストが曲を再生すると、他の全員が同じ曲を聴くことができます

- **ナビゲーション**: お気に入りのブラウザのように、UIに直接統合された次/前のナビゲーション矢印を追加します

- **Googleログインなし**: インターフェースからGoogleログインボタンとリンクを削除します

- **通知**: 曲の再生が開始されると通知を表示します（Windowsでは[インタラクティブ通知](https://user-images.githubusercontent.com/78568641/114102651-63ce0e00-98d0-11eb-9dfe-c5a02bb54f9c.png)が利用可能です）

- **ピクチャーインピクチャー**: アプリをピクチャーインピクチャーモードに切り替えることができます

- **再生速度**: 速く聴いたり、遅く聴いたりできます！曲の速度を制御するスライダーを追加します

- **正確な音量**: カスタムHUDとカスタマイズ可能な音量ステップを使用して、マウスホイール/ホットキーで音量を正確に制御します

- **ショートカット (& MPRIS)**: 再生用のグローバルホットキー（再生/一時停止/次/前）を設定し、メディアキーをオーバーライドしてメディアOSDを無効にし、Ctrl/CMD + Fで検索を有効にし、LinuxのMPRISサポートを有効にし、[上級ユーザー](https://github.com/th-ch/youtube-music/issues/106#issuecomment-952156902)向けの[カスタムホットキー](https://github.com/Araxeus/youtube-music/blob/1e591d6a3df98449bcda6e63baab249b28026148/providers/song-controls.js#L13-L50)を追加します

- **嫌いな曲をスキップ**: 嫌いな曲をスキップします

- **無音部分をスキップ**: 無音部分を自動的にスキップします

- [**SponsorBlock**](https://github.com/ajayyy/SponsorBlock): イントロ/アウトロなどの音楽以外の部分や、曲が再生されていないミュージックビデオの部分を自動的にスキップします

- **同期歌詞**: [LRClib](https://lrclib.net)のようなプロバイダーを使用して、曲に同期した歌詞を提供します

- **タスクバーメディアコントロール**: [Windowsタスクバー](https://user-images.githubusercontent.com/78568641/111916130-24a35e80-8a82-11eb-80c8-5021c1aa27f4.png)から再生を制御します

- **TouchBar**: macOS用のカスタムTouchBarレイアウト

- **Tuna OBS**: [OBS](https://obsproject.com/)のプラグイン[Tuna](https://obsproject.com/forum/resources/tuna.843/)との統合

- **ビデオ品質チェンジャー**: ビデオオーバーレイの[ボタン](https://user-images.githubusercontent.com/78568641/138574366-70324a5e-2d64-4f6a-acdd-dc2a2b9cecc5.png)を使用してビデオ品質を変更できます

- **ビデオ切り替え**: ビデオ/ソングモードを切り替える[ボタン](https://user-images.githubusercontent.com/28893833/173663950-63e6610e-a532-49b7-9afa-54cb57ddfc15.png)を追加します。オプションでビデオタブ全体を削除することもできます

- **ビジュアライザー**: プレイヤーにさまざまな音楽ビジュアライザーを追加します

## 翻訳

[Hosted Weblate](https://hosted.weblate.org/projects/youtube-music/)で翻訳を手伝うことができます。

<a href="https://hosted.weblate.org/engage/youtube-music/">
  <img src="https://hosted.weblate.org/widget/youtube-music/i18n/multi-auto.svg" alt="翻訳状況" />
  <img src="https://hosted.weblate.org/widget/youtube-music/i18n/287x66-black.png" alt="翻訳状況 2" />
</a>

## ダウンロード

[最新リリース](https://github.com/th-ch/youtube-music/releases/latest)を確認して、最新バージョンをすばやく見つけることができます。

### Arch Linux

AURから[`youtube-music-bin`](https://aur.archlinux.org/packages/youtube-music-bin)パッケージをインストールします。AURのインストール手順については、この[wikiページ](https://wiki.archlinux.org/index.php/Arch_User_Repository#Installing_packages)を参照してください。

### macOS

Homebrewを使用してアプリをインストールできます（[cask定義](https://github.com/th-ch/homebrew-youtube-music)を参照）。

```bash
brew install th-ch/youtube-music/youtube-music
```

アプリを手動でインストールし、アプリの起動時に「破損しているため開けません」というエラーが表示される場合は、ターミナルで次のコマンドを実行します。

```bash
/usr/bin/xattr -cr /Applications/YouTube\ Music.app
```

### Windows

[Scoopパッケージマネージャー](https://scoop.sh)を使用して、[`extras`バケット](https://github.com/ScoopInstaller/Extras)から`youtube-music`パッケージをインストールできます。

```bash
scoop bucket add extras
scoop install extras/youtube-music
```

または、Windows 11の公式CLIパッケージマネージャーである[Winget](https://learn.microsoft.com/en-us/windows/package-manager/winget/)を使用して、`th-ch.YouTubeMusic`パッケージをインストールできます。

*注: 「不明な発行元」からのものであるため、Microsoft Defender SmartScreenがインストールをブロックする場合があります。これは、GitHubで手動でダウンロードした後に実行ファイル（.exe）を実行しようとする場合にも当てはまります。*

```bash
winget install th-ch.YouTubeMusic
```

#### ネットワーク接続なしでインストールする方法 (Windows)

- [リリースページ](https://github.com/th-ch/youtube-music/releases/latest)で_デバイスのアーキテクチャ_に対応する`*.nsis.7z`ファイルをダウンロードします。
  - `x64`は64ビットWindows用
  - `ia32`は32ビットWindows用
  - `arm64`はARM64 Windows用
- リリースページでインストーラーをダウンロードします。(`*-Setup.exe`)
- それらを**同じディレクトリ**に配置します。
- インストーラーを実行します。

## テーマ

CSSファイルを読み込んでアプリケーションの外観を変更できます（オプション > 視覚的調整 > テーマ）。

いくつかの事前定義されたテーマは、https://github.com/kerichdev/themes-for-ytmdesktop-player で利用できます。

## 開発

```bash
git clone https://github.com/th-ch/youtube-music
cd youtube-music
pnpm install --frozen-lockfile
pnpm dev
```

## 独自のプラグインを作成する

プラグインを使用すると、次のことができます。

- アプリを操作する - Electronの`BrowserWindow`がプラグインハンドラーに渡されます
- HTML/CSSを操作してフロントエンドを変更する

### プラグインの作成

`src/plugins/YOUR-PLUGIN-NAME`にフォルダーを作成します。

- `index.ts`: プラグインのメインファイル
```typescript
import style from './style.css?inline'; // スタイルをインラインとしてインポート

import { createPlugin } from '@/utils';

export default createPlugin({
  name: 'プラグインラベル',
  restartNeeded: true, // 値がtrueの場合、ytmusicは再起動ダイアログを表示します
  config: {
    enabled: false,
  }, // カスタム設定
  stylesheets: [style], // カスタムスタイル
  menu: async ({ getConfig, setConfig }) => {
    // すべての*ConfigメソッドはPromise<T>でラップされています
    const config = await getConfig();
    return [
      {
        label: 'メニュー',
        submenu: [1, 2, 3].map((value) => ({
          label: `値 ${value}`,
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

      // レンダラープラグインと通信できます
      ipc.handle('some-event', () => {
        return 'hello';
      });
    },
    // 設定が変更されたときに発生します
    onConfigChange(newConfig) { /* ... */ },
    // プラグインが無効になったときに発生します
    stop(context) { /* ... */ },
  },
  renderer: {
    async start(context) {
      console.log(await context.ipc.invoke('some-event'));
    },
    // レンダラーでのみ使用可能なフック
    onPlayerApiReady(api: YoutubePlayer, context: RendererContext) {
      // プラグイン設定を簡単に設定
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

### 一般的な使用例

- カスタムCSSの挿入: 同じフォルダーに`style.css`ファイルを作成し、次のようにします。

```typescript
// index.ts
import style from './style.css?inline'; // スタイルをインラインとしてインポート

import { createPlugin } from '@/utils';

export default createPlugin({
  name: 'プラグインラベル',
  restartNeeded: true, // 値がtrueの場合、ytmusicは再起動ダイアログを表示します
  config: {
    enabled: false,
  }, // カスタム設定
  stylesheets: [style], // カスタムスタイル
  renderer() {} // レンダラーフックを定義
});
```

- HTMLを変更したい場合:

```typescript
import { createPlugin } from '@/utils';

export default createPlugin({
  name: 'プラグインラベル',
  restartNeeded: true, // 値がtrueの場合、ytmusicは再起動ダイアログを表示します
  config: {
    enabled: false,
  }, // カスタム設定
  renderer() {
    // ログインボタンを削除
    document.querySelector(".sign-in-link.ytmusic-nav-bar").remove();
  } // レンダラーフックを定義
});
```

- フロントエンドとバックエンドの通信: ElectronのipcMainモジュールを使用して行うことができます。`index.ts`ファイルと`sponsorblock`プラグインの例を参照してください。

## ビルド

1. リポジトリをクローン
2. [このガイド](https://pnpm.io/installation)に従って`pnpm`をインストール
3. `pnpm install --frozen-lockfile`を実行して依存関係をインストール
4. `pnpm build:OS`を実行

- `pnpm dist:win` - Windows
- `pnpm dist:linux` - Linux (amd64)
- `pnpm dist:linux:deb-arm64` - Linux (Debian用arm64)
- `pnpm dist:linux:rpm-arm64` - Linux (Fedora用arm64)
- `pnpm dist:mac` - macOS (amd64)
- `pnpm dist:mac:arm64` - macOS (arm64)

[electron-builder](https://github.com/electron-userland/electron-builder)を使用して、macOS、Linux、およびWindows用のアプリをビルドします。

## プロダクションプレビュー

```bash
pnpm start
```

## テスト

```bash
pnpm test
```

[Playwright](https://playwright.dev/)を使用してアプリをテストします。

## ライセンス

MIT © [th-ch](https://github.com/th-ch/youtube-music)

## FAQ

### アプリのメニューが表示されないのはなぜですか？

`メニューを非表示`オプションがオンの場合 - <kbd>alt</kbd>キー（またはアプリ内メニュープラグインを使用している場合は<kbd>\`</kbd> [バックティック]キー）でメニューを表示できます
