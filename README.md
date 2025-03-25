# Rising World 日本語化計画
Rising World / Japanese Language translation project

---
## 注意事項
本リポジトリで紹介している内容で生じた損害に対する一切の責任を負いません。
また、内容には充分に注意を払っていますが、その内容について保証するものではありません。

---

## 概要
JIW-Gamesより発売されているRising Worldというゲームの日本語化データです。  

[Rising World](https://store.steampowered.com/app/324080/Rising_World/)

適切な配置・設定をすることで、ゲーム内の表記を一部日本語化できます。

また、動画にて投稿している「平和な世界で暮らして」シリーズの情報を組み込んでおり、  
使い方や解説が必要な場合は動画を参照できるようになっています。

[「平和な世界で暮らして」シリーズ（YouTube Playlist）](https://youtube.com/playlist?list=PLth1xrgWZ1rAkfr4llQInVNoPaSjEujLI&si=JUSvRciXFmBNFX9E)


## 参考 & Special Thanks
翻訳方法参考
https://forum.rising-world.net/thread/13463-translations-for-new-version-as-at-18th-october-french-mexican-and-spanish-for-n/?pageNo=1

日本語訳参考
https://steamcommunity.com/sharedfiles/filedetails/?id=3325769054

## 動作確認済み環境
### OS
- Windows 11 24H2
- macOS Sequoia 15.3

### Rising World バージョン
Rising World 0.8.1  
（※Unity版のみ動作確認）

---

## 使い方

動画での解説は下記リンクよりご確認ください。

**※インストール直後の場合、初回の起動を実施しておくこと。下記作業の前に必要です。**

1. [Releaseページ](https://github.com/sky-tsakuya/Rising_World_JapaneseLang/releases) から、最新のデータ（Source Code.zip）をダウンロードする。  
   ダウンロード後、zipを展開しておく。
2. Steamの「Rising World」から、「ローカルファイルを閲覧」をクリック  
   下記の順番でアクセスしてください。
   1. ライブラリ一覧を開く
   2. 一覧にあるRising Worldを右クリック
   3. 「管理」を選択
   4. 「ローカルファイルを閲覧」をクリック。開くパスはこちら : `C:\Program Files (x86)\Steam\steamapps\common\RisingWorld\`
3. 下記パスを開き、`ja-JP.json` を配置する  
   `data\StreamingAssets\Languages`
   - ※（Windowsの場合）フルパスは下記
     - `C:\Program Files (x86)\Steam\steamapps\common\RisingWorld\data\StreamingAssets\Languages`
   - ※（macOSの場合）RisingWorld.appの中にある。パスは下記
     - `RisingWorld.app/Contents/Resources/data/StreamingAssets/Languages`
4. （2で開いた）`RisingWorld` フォルダーまで戻り、`config.properties` ファイルをメモ帳で開く
   - ※（Windowsの場合）フルパスは下記
     - `C:\Program Files (x86)\Steam\steamapps\common\RisingWorld\config.properties`
   - ※（macOSの場合）フルパスは下記
     - `/Users/【ユーザー名】/Library/Application Support/Steam/steamapps/common/RisingWorld/config.properties`

5. `Game_Language=` を `Game_Language=ja-JP` に書き換える
6. Steamから通常通り起動する。トップメニューが日本語で表記されればOK。

## 注意事項
Rising World本来の美しいフォントではなく、微妙にダサいフォントになります。
また内容はAIと意訳を多く含むので、内容に誤りがある場合がございます。

バージョンアップ後は翻訳データと実データに不整合が生じる可能性があるため、  
一時的に `config.properties` を `Game_Language=`（≒空欄）にすることを推奨します。

---

## 翻訳方針（メモ）
基本は Gemini 2.0 Flash に下記プロンプトを投入後、JSONデータを投入する。

```
今から渡すJsonファイルの値の部分を日本語翻訳したものに変換をしてほしいです。出来ますか？
```

出力データのインデントを揃え、英語→日本語の内容に問題がないかを確認。  
問題があれば、日本語訳を修正して完了とする。

## ファイル名とその役割
- ja-JP.json
  - メインデータ。日本語訳 + 動画内初出パートデータ有り
- Original
  - en.json
    - オリジナルデータ。差分取得のバックアップ用
  - ja-JP.json
    - 日本語訳データのみ。動画紹介パートのデータはなし