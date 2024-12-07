### ディレクトリとファイルの生成

```sh
// カレントディレクトリはsrc/app
mkdir grid
touch grid/page.js
```

### ヘッダーの編集

リンクの追加
src/app/layout.js

```jsx
（略）
<header className="bg-sky-100 h-16 flex items-center justify-center">
    （略）
      <a href="/grid" className="mx-4 hover:text-sky-600">
        グリッドレイアウト
      </a>
</header>
（略）
```

### 「グリッドレイアウト」ページを作成

src/app/grid/page.js

```jsx
export default function GridLayout() {
  return (
    <>
      <h1 className="pt-8 text-3xl font-bold">グリッドレイアウト</h1>
      <hr className="my-2 border-t border-dashed border-gray-600" />

      <div className="text-xl font-semibold text-gray-500">
        ブロックディスプレイのデフォルト
      </div>
      <div>
        <div className="bg-red-100">01</div>
        <div className="bg-red-200">02</div>
        <div className="bg-red-300">03</div>
        <div className="bg-red-400">04</div>
        <div className="bg-red-500">05</div>
        <div className="bg-red-600">06</div>
        <div className="bg-red-700">07</div>
        <div className="bg-red-800">08</div>
        <div className="bg-red-900">09</div>
      </div>
      <hr className="my-2 border-t border-dashed border-gray-600" />

      <div className="text-xl font-semibold text-gray-500">
        親要素にgrid grid-cols-2を指定:二列のグリッド
      </div>
      <div className="grid grid-cols-2">
        <div className="bg-red-100">01</div>
        <div className="bg-red-200">02</div>
        <div className="bg-red-300">03</div>
        <div className="bg-red-400">04</div>
        <div className="bg-red-500">05</div>
        <div className="bg-red-600">06</div>
        <div className="bg-red-700">07</div>
        <div className="bg-red-800">08</div>
        <div className="bg-red-900">09</div>
      </div>
      <hr className="my-2 border-t border-dashed border-gray-600" />

      <div className="text-xl font-semibold text-gray-500">
        親要素にgrid grid-cols-3を指定:三列のグリッド
      </div>
      <div className="grid grid-cols-3">
        <div className="bg-red-100">01</div>
        <div className="bg-red-200">02</div>
        <div className="bg-red-300">03</div>
        <div className="bg-red-400">04</div>
        <div className="bg-red-500">05</div>
        <div className="bg-red-600">06</div>
        <div className="bg-red-700">07</div>
        <div className="bg-red-800">08</div>
        <div className="bg-red-900">09</div>
      </div>
      <hr className="my-2 border-t border-dashed border-gray-600" />
      <div className="text-xl font-semibold text-gray-500">
        親要素にgrid grid-rows-4
        grid-flow-col:二行のグリッド（grid-rows-*だけだとアイテムが縦方向に並ぶためgrid-flow-colが必要）
      </div>
      <div className="grid grid-rows-2 grid-flow-col">
        <div className="bg-red-100">01</div>
        <div className="bg-red-200">02</div>
        <div className="bg-red-300">03</div>
        <div className="bg-red-400">04</div>
        <div className="bg-red-500">05</div>
        <div className="bg-red-600">06</div>
        <div className="bg-red-700">07</div>
        <div className="bg-red-800">08</div>
        <div className="bg-red-900">09</div>
      </div>
      <hr className="my-2 border-t border-dashed border-gray-600" />

      <div className="text-xl font-semibold text-gray-500">
        親要素にgrid
        grid-rows-3を指定し三列グリッドにし、二番目要素を横（col-span-2）に,
        三番目要素を縦（row-span-2）に広げ、九番目要素位置を左から三行目（col-start-3s）に指定
      </div>
      <div className="grid grid-cols-3">
        <div className="bg-red-100">01</div>
        <div className="bg-red-200 col-span-2">02</div>
        <div className="bg-red-300 row-span-2">03</div>
        <div className="bg-red-400">04</div>
        <div className="bg-red-500">05</div>
        <div className="bg-red-600">06</div>
        <div className="bg-red-700">07</div>
        <div className="bg-red-800 ">08</div>
        <div className="bg-red-900 col-start-3">09</div>
      </div>
      <hr className="my-2 border-t border-dashed border-gray-600" />

      <div className="text-xl font-semibold text-gray-500">
        grid-cols[a_b_c]、grid-rows[e_f_g)でグリッドの横幅・縦幅を調整:例ではgrid-cols-[200px_1fr_3fr]
        grid-rows-[1fr_2fr_3fr_4fr]
      </div>
      <div className="grid grid-cols-[200px_1fr_3fr] grid-rows-[1fr_2fr_3fr_4fr]">
        <div className="bg-red-100">01</div>
        <div className="bg-red-200 col-span-2">02</div>
        <div className="bg-red-300 row-span-2">03</div>
        <div className="bg-red-400">04</div>
        <div className="bg-red-500">05</div>
        <div className="bg-red-600">06</div>
        <div className="bg-red-700">07</div>
        <div className="bg-red-800 ">08</div>
        <div className="bg-red-900 col-start-3">09</div>
      </div>
      <hr className="my-2 border-t border-dashed border-gray-600" />
    </>
  );
}
```
