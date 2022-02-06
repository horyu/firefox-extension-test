# README

ブラウザ拡張のtest用リポジトリです。

- bing以外にマッチするコンテントスクリプト
  - browser.runtime.onMessage.addListener でバックグラウンドからのメッセージを受け取る
  - 受け取ったらバックグラウンドに受け取り完了したと送る
- bingのコンテントスクリプト
  - browser.runtime.sendMessage でページ情報をバックグラウンドに送る
- ポップアップ
  - browser.runtime.onMessage.addListener でアクティブのタブIDをバックグラウンドに伝える
- バックグラウンド
  - bingコンテントスクリプトから受け取り、ポップアップで指定されたタブIDに送る
  - 指定されたタブIDから受け取り完了報告を受け取ったら送信をやめる

## メモ

- ポップアップ内でbingを開くのはiframeはSOPの都合で却下
  - 求める情報が書かれたURLをiframe一発で100％開けるなら問題ない
  - iframe内でログイン処理などを行う必要があると無理そう
