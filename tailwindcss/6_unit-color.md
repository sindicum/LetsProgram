### ディレクトリとファイルの生成

```sh
// カレントディレクトリはsrc/app
mkdir unit-color
touch unit-color/page.js
```

### ヘッダーの編集

リンクの追加
src/app/layout.js

```jsx
（略）
<header className="bg-sky-100 h-16 flex items-center justify-center">
    （略）
      <a href="/unit-color" className="mx-4 hover:text-sky-600">
        単位と色
      </a>
</header>
（略）
```

### 「単位と色」ページを作成

src/app/unit-color/page.js

```jsx
export default function UnitColor() {
  const widthClass = [
    "w-1",
    "w-2",
    "w-3",
    "w-4",
    "w-5",
    "w-6",
    "w-7",
    "w-8",
    "w-9",
    "w-10",
    "w-11",
    "w-12",
    "w-14",
    "w-16",
    "w-20",
    "w-24",
    "w-28",
    "w-32",
    "w-36",
    "w-40",
    "w-44",
    "w-48",
    "w-52",
    "w-56",
    "w-60",
    "w-72",
    "w-80",
    "w-96",
  ];

  const caclPixel = (el) => {
    const exact = el.split("-")[1];
    const calc = 4 * Number(exact);
    return calc;
  };

  const colorName = [
    "slate",
    "gray",
    "zinc",
    "neutral",
    "stone",
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
  ];
  const colorDensity = [
    "50",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ];

  return (
    <>
      <table className="mx-auto my-4 border border-gray-500">
        <caption className="text-2xl text-gray-500">長さの見本</caption>
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border border-gray-500">widthクラス名</th>
            <td className="px-4 py-2 border border-gray-500">ピクセル数</td>
            <td className="px-4 py-2 border border-gray-500">長さ</td>
          </tr>
        </thead>
        <tbody>
          {widthClass.map((el, idx) => (
            <tr key={idx}>
              <th className="px-4 py-2 border border-gray-500">{el}</th>
              <td className="px-4 py-2 border border-gray-500">
                {caclPixel(el) + "px"}
              </td>
              <td className="px-4 py-2 border border-gray-500">
                <hr className={`${el} border-b-2 border-red-600`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <table className="mx-auto my-4 border border-gray-500 table-fixed">
        <caption className="text-2xl text-gray-500">カラーパレット</caption>
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border border-gray-500"></th>
            {colorDensity.map((d_el, d_idx) => (
              <td key={d_idx} className="px-4 py-2 border border-gray-500 w-16">
                {d_el}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {colorName.map((c_el, c_idx) => (
            <tr key={c_idx}>
              <th className="px-4 py-2 border border-gray-500">{c_el}</th>
              {colorDensity.map((d_el, d_idx) => (
                <td key={d_idx} className="border border-gray-500 h-12">
                  <div className={`h-full bg-${c_el}-${d_el}`}></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
```

### tailwind.config.js を修正

- 動的に使用するクラス名は事前に以下を追加する必要がある。
- Tailwind CSS では、クラス名が静的であることがコンパイル時の要件のため、動的にクラス名を生成する際に適切な値が事前に分からない場合、特定のユーティリティクラスがスタイルに反映されないことがある。

```js
module.exports = {
  （略）
  safelist: [
    {
      pattern:
        /bg-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|)-(50|100|200|300|400|500|600|700|800|900|950)/,
    },
  ],
};
```
