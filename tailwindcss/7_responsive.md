### ディレクトリとファイルの生成

```sh
// カレントディレクトリはsrc/app
mkdir responsive
touch responsive/page.js
```

### ヘッダーの編集

- リンクの追加
- ヘッダーのリンク数がだいぶ増えたため、flex-wrap で折り返し設定をする。
  src/app/layout.js

```jsx
（略）
<header className="bg-sky-100 h-16 flex items-center justify-center flex-wrap">
    （略）
    <a href="/responsive" className="mx-4 hover:text-sky-600">
    レスポンシブ
    </a>
</header>
（略）
```

### 「レスポンシブ」ページを作成

src/app/responsive/page.js

```jsx
export default function Responsive() {
  const breakpoint = [
    { prefix: "sm", width: "640px" },
    { prefix: "md", width: "768px" },
    { prefix: "lg", width: "1024px" },
    { prefix: "xl", width: "1280px" },
    { prefix: "2xl", width: "1536px" },
  ];

  const items = [
    { text: "01", bgcolor: "bg-red-100" },
    { text: "02", bgcolor: "bg-red-200" },
    { text: "03", bgcolor: "bg-red-300" },
    { text: "04", bgcolor: "bg-orange-100" },
    { text: "05", bgcolor: "bg-orange-200" },
    { text: "06", bgcolor: "bg-orange-300" },
    { text: "07", bgcolor: "bg-yellow-100" },
    { text: "08", bgcolor: "bg-yellow-200" },
    { text: "09", bgcolor: "bg-yellow-300" },
  ];

  return (
    <>
      <h1 className="pt-8 text-3xl font-bold text-center">レスポンシブ</h1>
      <hr className="my-2 border-t border-dashed border-gray-600" />

      <table className="mx-auto my-4 border border-gray-500">
        <caption className="text-2xl text-gray-500">ブレイクポイント</caption>
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border border-gray-500">プレフィクス</th>
            <td className="px-4 py-2 border border-gray-500">最小幅</td>
          </tr>
        </thead>
        <tbody>
          {breakpoint.map((el, idx) => (
            <tr key={idx}>
              <th className="px-4 py-2 border border-gray-500">{el.prefix}</th>
              <td className="px-4 py-2 border border-gray-500">{el.width}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center">
        プレフィックスは指定されたブレイクポイント以降で有効（モバイルファーストの考え）
      </div>
      <hr className="my-2 border-t border-dashed border-gray-600" />

      <div className="text-xl font-semibold text-gray-500 text-center">
        グリッドレイアウトで、grid-cols-1、sm:grid-cols-2〜2xl:grid-cols-6と設定。
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mx-auto w-11/12 ">
        {items.map((el, idx) => (
          <div
            className={`${el.bgcolor} h-24 flex items-center justify-center`}
            key={idx}
          >
            {el.text}
          </div>
        ))}
      </div>
    </>
  );
}
```
