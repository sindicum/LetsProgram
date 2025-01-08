### ディレクトリとファイルの生成

```sh
// カレントディレクトリはsrc/app
mkdir flex
touch flex/page.js
```

### ヘッダーの編集

リンクの追加
src/app/layout.js

```jsx
（略）
<header className="bg-sky-100 h-16 flex items-center justify-center">
    （略）
      <a href="/flex" className="mx-4 hover:text-sky-600">
        フレキシブルボックスレイアウト
      </a>
</header>
（略）
```

### 「フレキシブルボックスレイアウト」ページを作成

src/app/flex/page.js

```jsx
export default function FlexibleBoxLayout() {
  return (
    <>
      <h1 className="pt-8 text-3xl font-bold">
        フレキスブルボックスレイアウト
      </h1>
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
        親要素にflexを指定
      </div>
      <div className="flex">
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
        親要素にgap（この場合はgap-2）を指定し子要素間にスペースを設ける
      </div>
      <div className="flex gap-2">
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
        子要素にbasisで幅を設定する。01〜05:basis-6〜24,06〜09:basis-1/12〜1/4
      </div>
      <div className="flex gap-2">
        <div className="bg-red-100 basis-8">01</div>
        <div className="bg-red-200 basis-12">02</div>
        <div className="bg-red-300 basis-16">03</div>
        <div className="bg-red-400 basis-20">04</div>
        <div className="bg-red-500 basis-24">05</div>
        <div className="bg-red-600 basis-1/12">06</div>
        <div className="bg-red-700 basis-1/6">07</div>
        <div className="bg-red-800 basis-1/5">08</div>
        <div className="bg-red-900 basis-1/4">09</div>
      </div>
      <hr className="my-2 border-t border-dashed border-gray-600" />

      <div className="text-xl font-semibold text-gray-500">
        子要素の幅に絶対値（basis-72）を設定しても、画面一杯に並んだ場合は幅が自動調整される
      </div>
      <div className="bg-orange-300 w-72 border-2 border-dotted">
        basis-72の幅
      </div>
      <div className="flex">
        <div className="bg-red-100 basis-72">01</div>
        <div className="bg-red-200 basis-72">02</div>
        <div className="bg-red-300 basis-72">03</div>
        <div className="bg-red-400 basis-72">04</div>
        <div className="bg-red-500 basis-72">05</div>
        <div className="bg-red-600 basis-72">06</div>
        <div className="bg-red-700 basis-72">07</div>
        <div className="bg-red-800 basis-72">08</div>
        <div className="bg-red-900 basis-72">09</div>
      </div>
      <hr className="my-2 border-t border-dashed border-gray-600" />

      <div className="text-xl font-semibold text-gray-500">
        flex-wrapを指定すると子要素で指定した幅は維持され折り返される
      </div>
      <div className="flex flex-wrap">
        <div className="bg-red-100 basis-72">01</div>
        <div className="bg-red-200 basis-72">02</div>
        <div className="bg-red-300 basis-72">03</div>
        <div className="bg-red-400 basis-72">04</div>
        <div className="bg-red-500 basis-72">05</div>
        <div className="bg-red-600 basis-72">06</div>
        <div className="bg-red-700 basis-72">07</div>
        <div className="bg-red-800 basis-72">08</div>
        <div className="bg-red-900 basis-72">09</div>
      </div>
      <hr className="my-2 border-t border-dashed border-gray-600" />

      <div className="text-xl font-semibold text-gray-500">
        フレックスアイテムの収縮〜flex-1,flex-auto
      </div>
      <div>設定無し（明示する場合はflex-initial）</div>
      <div className="flex">
        <div className="bg-red-100 w-8">w-8</div>
        <div className="bg-red-200 w-12">w-12</div>
        <div className="bg-red-300 w-20">w-20</div>
        <div className="bg-red-400 w-32">w-32</div>
        <div className="bg-red-500 w-48">w-48</div>
      </div>
      <div>flex-1:各要素の幅に囚われず均等に収縮</div>
      <div className="flex">
        <div className="bg-red-100 w-8 flex-1">w-8</div>
        <div className="bg-red-200 w-12 flex-1">w-12</div>
        <div className="bg-red-300 w-20 flex-1">w-20</div>
        <div className="bg-red-400 w-32 flex-1">w-32</div>
        <div className="bg-red-500 w-48 flex-1">w-48</div>
      </div>
      <div>flex-auto:各要素の幅の比率を維持して収縮</div>
      <div className="flex">
        <div className="bg-red-100 w-8 flex-auto">w-8</div>
        <div className="bg-red-200 w-12 flex-auto">w-12</div>
        <div className="bg-red-300 w-20 flex-auto">w-20</div>
        <div className="bg-red-400 w-32 flex-auto">w-32</div>
        <div className="bg-red-500 w-48 flex-auto">w-48</div>
      </div>
      <hr className="my-2 border-t border-dashed border-gray-600" />

      <div className="text-xl font-semibold text-gray-500">
        フレックスアイテムの並び順（右→左:flex-row-reverse）
      </div>
      <div className="flex flex-row-reverse">
        <div className="bg-red-100 w-12">01</div>
        <div className="bg-red-200 w-12">02</div>
        <div className="bg-red-300 w-12">03</div>
        <div className="bg-red-400 w-12">04</div>
        <div className="bg-red-500 w-12">05</div>
        <div className="bg-red-600 w-12">06</div>
        <div className="bg-red-700 w-12">07</div>
        <div className="bg-red-800 w-12">08</div>
        <div className="bg-red-900 w-12">09</div>
      </div>
      <hr className="my-2 border-t border-dashed border-gray-600" />

      <div className="text-xl font-semibold text-gray-500">
        フレックスアイテムの並び順（上→下:flex-col）
      </div>
      <div className="flex flex-col">
        <div className="bg-red-100 w-12">01</div>
        <div className="bg-red-200 w-12">02</div>
        <div className="bg-red-300 w-12">03</div>
        <div className="bg-red-400 w-12">04</div>
        <div className="bg-red-500 w-12">05</div>
        <div className="bg-red-600 w-12">06</div>
        <div className="bg-red-700 w-12">07</div>
        <div className="bg-red-800 w-12">08</div>
        <div className="bg-red-900 w-12">09</div>
      </div>
      <hr className="my-2 border-t border-dashed border-gray-600" />

      <div className="text-xl font-semibold text-gray-500">
        フレックスアイテムの並び順（下→上:flex-col-reverse）
      </div>
      <div className="flex flex-col-reverse">
        <div className="bg-red-100 w-12">01</div>
        <div className="bg-red-200 w-12">02</div>
        <div className="bg-red-300 w-12">03</div>
        <div className="bg-red-400 w-12">04</div>
        <div className="bg-red-500 w-12">05</div>
        <div className="bg-red-600 w-12">06</div>
        <div className="bg-red-700 w-12">07</div>
        <div className="bg-red-800 w-12">08</div>
        <div className="bg-red-900 w-12">09</div>
      </div>
      <hr className="my-2 border-t border-dashed border-gray-600" />

      <div className="text-xl font-semibold text-gray-500">
        フレックスアイテムの位置揃え（横方向の中央揃え:justyfi-center）
      </div>
      <div className="flex justify-center">
        <div className="bg-red-100">01</div>
        <div className="bg-red-200">02</div>
        <div className="bg-red-300">03</div>
      </div>
      <hr className="my-2 border-t border-dashed border-gray-600" />

      <div className="text-xl font-semibold text-gray-500">
        フレックスアイテムの位置揃え（横方向の右揃え:justify-end）
      </div>
      <div className="flex justify-end">
        <div className="bg-red-100">01</div>
        <div className="bg-red-200">02</div>
        <div className="bg-red-300">03</div>
      </div>
      <hr className="my-2 border-t border-dashed border-gray-600" />

      <div className="text-xl font-semibold text-gray-500">
        フレックスアイテムの位置揃え（縦方向の中央揃え:items-center）
      </div>
      <div className="flex items-center h-24 border m-2">
        <div className="bg-red-100">01</div>
        <div className="bg-red-200">02</div>
        <div className="bg-red-300">03</div>
      </div>
      <hr className="my-2 border-t border-dashed border-gray-600" />

      <div className="text-xl font-semibold text-gray-500">
        フレックスアイテムの位置揃え（縦方向の下揃え:items-end）
      </div>
      <div className="flex items-end h-24 border m-2">
        <div className="bg-red-100">01</div>
        <div className="bg-red-200">02</div>
        <div className="bg-red-300">03</div>
      </div>
      <hr className="my-2 border-t border-dashed border-gray-600" />
    </>
  );
}
```
