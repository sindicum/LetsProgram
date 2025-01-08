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

  const calcPixel = (el) => {
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
      <h1 className="pt-8 text-3xl font-bold text-center">単位と色</h1>
      <hr className="my-2 border-t border-dashed border-gray-600" />

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
                {calcPixel(el) + "px"}
              </td>
              <td className="px-4 py-2 border border-gray-500">
                <hr className={`${el} border-b-2 border-red-600`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr className="my-2 border-t border-dashed border-gray-600" />

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
