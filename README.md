# Rising_World_JapaneseLang
Rising World / Japanese Language translation project

---
## 超注意事項

※2024/12 時点、作業中につき完全翻訳前。  
　また翻訳データのご利用は自己責任でお願いします。

---

## 参考
https://forum.rising-world.net/thread/13463-translations-for-new-version-as-at-18th-october-french-mexican-and-spanish-for-n/?pageNo=1

## 動作確認済み環境
Rising World [Unity] 0.8.1 

## 使い方

1. ja-JP.json をダウンロードする
2. 下記パスに配置する
   `C:\Program Files (x86)\Steam\steamapps\common\RisingWorld\_New Version\Data\StreamingAssets\Languages`
3. 下記パスにあるファイルを開く
   `C:\Program Files (x86)\Steam\steamapps\common\RisingWorld\_New Version\config.properties`
4. 480行目付近にある `Game_Language=` を `Game_Language=ja-JP` に書き換える

あとは通常通り起動すると、日本語で文字が表記される。

## 注意事項
Rising World本来の美しいフォントではなく、微妙にダサいフォントになります。
また内容はAIと意訳を多く含むので、内容に誤りがある場合がございます。

バージョンアップ後は翻訳ファイルが未対応になるため、
一時的に `config.properties` の `Game_Language` をもとに戻すことを推奨。

---

## 翻訳方針（メモ）
基本は Gemini に下記プロンプトを投入後、JSONデータを投入する。

```
今から渡すJsonファイルの値の部分を日本語翻訳したものに変換をしてほしいです。出来ますか？
```

出力データのインデントを揃え、英語→日本語の内容に問題がないかを確認。  
改善の余地があれば、日本語訳を修正して完了とする。

