### ディレクトリとファイルの生成

```sh
// カレントディレクトリはsrc/app
mkdir boxmodel
touch boxmodel/page.js
```

### ヘッダーを作成

src/app/layout.js

```jsx
<html lang="ja">
  <body>
    <header className="bg-sky-100 h-16 flex items-center justify-center">
      <a href="/" className="mx-4 hover:text-sky-600">
        トップ
      </a>
      <a href="/boxmodel" className="mx-4 hover:text-sky-600">
        ボックスの構造
      </a>
    <main>{children}</main>
  </body>
</html>
```

### 「ボックスの構造」ページを作成

src/app/boxmodel/page.js

```jsx
export default function BoxModel() {
  return (
    <div>
      <h1 className="pt-8 text-3xl font-bold">
        ボックスの構造（padding,margin,border,width,height）
      </h1>
      <hr className="my-2 border-t border-dashed border-gray-600" />

      <div className="m-8 bg-red-100">m-8:要素の外側の余白がマージン</div>
      <hr className="my-2 border-t border-dashed border-gray-600" />

      <div className="p-8 bg-red-200">p-8:要素の内側の余白がパディング</div>
      <hr className="my-2 border-t border-dashed border-gray-600" />

      <div className="p-8 m-8 bg-red-100">
        p-8 m-8:マージンとパディングの組み合わせで要素の内外に余白ができる
      </div>
      <hr className="my-2 border-t border-dashed border-gray-600" />

      <div className="p-8 m-8 bg-red-200 border-8 border-red-300">
        p-8 m-8
        border-8:マージンとパディングの間がボーダー。ボーダーの太さもカウントされる。
        なお、ボーダークラスの数値はマージンやパディングと単位が異なる。
      </div>
      <hr className="my-2 border-t border-dashed border-gray-600" />

      <div className="m-8 bg-red-100">
        m-8:マージンの上下同士は重なりが...👇
      </div>
      <div className="m-8 bg-red-100">m-8:共有される👆</div>
      <hr className="my-2 border-t border-dashed border-gray-600" />

      <div className="w-72 bg-red-200">w-72:幅を（値で）指定</div>
      <div className="w-1/2 bg-red-100">w-1/2:幅を比率で指定</div>
      <hr className="my-2 border-t border-dashed border-gray-600" />

      <div className="h-24 bg-red-200">h-24:高さを（値で）指定</div>
      <div className="h-1/2 bg-red-100">
        h-1/2:比率指定が効かない場合、要素の高さ（もしくは幅）に対する絶対値が設定されていないため。その場合、親要素に絶対値を設定する👇
      </div>
      <div className="h-96">
        <div className="h-1/2 bg-red-200">親要素h-96,子要素h-1/2</div>
      </div>
      <hr className="my-2 border-t border-dashed border-gray-600" />

      <div className="w-96 mx-auto bg-red-200">
        mx-auto:左右の余白が自動設定されるため、要素が中央に配置される。
      </div>
      <hr className="my-2 border-t border-dashed border-gray-600" />
    </div>
  );
}
```
