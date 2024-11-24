## .vscode/launch.jsonを記述

サーバーサイドのデバッグはVSCodeで行う。
- .vscode/launch.jsonの記述
```js
{
    "version": "0.2.0",
    "configurations": [
        {
          "name": "memo-app:server-side",
          "type": "node-terminal",
          "request": "launch",
          "command": "npm run dev",
          "cwd": "${workspaceFolder}/nextjs_memoapp/memo-app",
        },
      ]
}
```
- 対象ファイルにブレイクポイントを設定
- 「実行とデバッグ」で緑矢印を実行。
 
クライアントサイドのデバッグはGithub Codespacesの場合、ブラウザで行う方が良さそう 
（そもそも設定方法が不明）
- 右クリック「検証」
- 「sources」で、対象ファイルにブレイクポイントを設定