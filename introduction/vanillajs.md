# メモアプリを作成してみる

### サーバーの構築
ディレクトリ作成
```
mkdir express
cd express
```
Expressのインストール
```
npm init -y
npm install express
touch server.js
```

```server.js
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
```

### index.htmlファイルの配置
ディレクトリとファイルの作成
```
mkdir public
touch public/index.html
```
public/index.htmlへの記述
```public/index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
トップページ
</body>
</html>
```

### サーバーの起動
```
node server.js
```
サーバーの停止はControl+C


### メモアプリの作成

ディレクトリとファイルの作成
```
mkdir public/src
touch public/src/index.js
touch public/src/styles.css
```

public/index.htmlへの記述
```public/index.html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>簡単メモアプリ</title>
    <link rel="stylesheet" href="src/styles.css">
</head>
<body>
    <h1 id="title">簡単メモアプリ</h1>
    <input id="add-text" />
    <button id="add-button">追加</button>
    <div class="container">
        <p>メモ</p>
        <ul id="memo-list"></ul>
    </div>
    <script src="src/index.js"></script>
</body>
</html>
```

public/src/index.jsへの記述
```public/src/index.js
const onClickAdd = () => {
    const textEl = document.getElementById("add-text");
    const text = textEl.value;
    textEl.value = "";
    const li = document.createElement("li");
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = text;
    const button = document.createElement("button");
    button.textContent = "削除";
    button.addEventListener("click", () => {
        const deleteTarget = button.closest("li");
        document.getElementById("memo-list").removeChild(deleteTarget);
    });
    div.appendChild(p);
    div.appendChild(button);
    li.appendChild(div);
    document.getElementById("memo-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", () => onClickAdd());
```
public/src/styles.cssへの記述
```public/src/styles.css
.container {
    border: solid 1px #ccc;
    padding: 16px;
    margin: 8px;
}

li > div {
    display: flex;
    align-items: center;
}

button {
    margin-left: 16px;
}
```

### サーバーの起動
```
node server.js
```
サーバーの停止はControl+C