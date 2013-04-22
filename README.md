JenkinsStateWatcher
===================

執事が働いているかどうかを見張るChrome Extensionです。

Jenkinsが使用中かどうかを教えてくれます。
もし使用中ならば、Useと表示されます。
使ってなければ、なにも表示されません。

## インストール方法

現在はChrome Web Storeで公開していないので、インストール方法がちょっと複雑です。

* JenkinsStateWatcher.crx をダウンロードする。
* Chromeの拡張機能のページにcrxファイルをドラッグ＆ドロップする。
* インストールするか聞かれるのでインストールする。


## 設定方法

* Jenkinsアイコンの上で右クリックして、オプションページを表示します。
* JenkinsURLに、JenkinsのサイトのURLを入力します。(例: http://example.com:8080/jenkins/)
* IntervalMinutesに、確認する間隔を分単位で入力します。
* Saveボタンを押します。
