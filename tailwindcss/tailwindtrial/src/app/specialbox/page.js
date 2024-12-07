export default function SpecialBoxLayouts() {
  const position = [
    { prop: "relative", description: "相対", notes: "" },
    {
      prop: "absolute",
      description: "絶対",
      notes: "親要素にposition指定しない場合はブラウザ基準",
    },
    { prop: "fixed", description: "固定", notes: "ブラウザ基準" },
    {
      prop: "sticky",
      description: "スティッキー",
      notes: "スクロールにより指定場所から固定開始",
    },
    {
      prop: "static",
      description: "デフォルト値",
      notes: "通常は指定不要（明示したい場合に使用）",
    },
  ];
  return (
    <>
      <h1 className="pt-8 text-3xl font-bold text-center">特殊なボックス</h1>
      <hr className="my-2 border-t border-dashed border-gray-600" />

      <div className="text-xl font-semibold text-gray-500 text-center">
        float指定することで、浮動ボックスを左寄せ、または右寄せが出来る
      </div>
      <div className="w-1/2 mx-auto flex">
        <div className="w-1/3 m-1">
          <div className="text-center">指定無し</div>
          <div className="h-12 bg-red-100">01</div>
          <div className="h-12 bg-red-200">02</div>
          <div className="h-12 bg-red-300">03</div>
        </div>

        <div className="w-1/3 m-1">
          <div className="text-center">float-left</div>
          <div className="h-20 bg-red-100 float-left">01</div>
          <div className="h-12 bg-red-200">02</div>
          <div className="h-12 bg-red-300">03</div>
        </div>

        <div className="w-1/3 m-1">
          <div className="text-center">float-right</div>
          <div className="h-20 bg-red-100 float-right">01</div>
          <div className="h-12 bg-red-200">02</div>
          <div className="h-12 bg-red-300">03</div>
        </div>
      </div>
      <hr className="my-2 border-t border-dashed border-gray-600" />

      <div className="text-xl font-semibold text-gray-500 text-center">
        positionプロパティによる位置指定
      </div>
      <div className="text-center">
        top-*,right-*,bottom-*,left-*で位置を調整する
      </div>
      <table className="mx-auto my-4 border border-gray-500 w-1/2">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border border-gray-500">プロパティ</th>
            <td className="p-2 border border-gray-500 text-center">配置</td>
            <td className="p-2 border border-gray-500 text-center">備考</td>
          </tr>
        </thead>
        <tbody>
          {position.map((el, idx) => (
            <tr key={idx}>
              <th className="p-2 border border-gray-500">{el.prop}</th>
              <td className="p-2 border border-gray-500 text-center">
                {el.description}
              </td>
              <td className="p-2 border border-gray-500">{el.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-1/2 mx-auto grid grid-cols-2 gap-4">
        <div>
          <div className="text-center">指定無し（static）</div>
          <div className="h-12 bg-red-100">01</div>
          <div className="h-12 bg-red-200 static">02</div>
          <div className="h-12 bg-red-300">03</div>
        </div>

        <div>
          <div className="text-center">relative</div>
          <div className="h-12 bg-red-100">01</div>
          <div className="h-12 bg-red-200 relative top-2 left-2">
            02:relative top-2 left-2
          </div>
          <div className="h-12 bg-red-300">03</div>
        </div>

        <div className="relative">
          <div className="text-center">absolute</div>
          <div className="h-12 bg-red-100 absolute top-10 right-0">
            01:absolute top-10 right-0
          </div>
          <div className="h-12 bg-red-200">02</div>
          <div className="h-12 bg-red-300">03</div>
          <div className="text-red-500 font-bold">親要素にrelative指定</div>
        </div>

        <div>
          <div className="text-center">fixed</div>
          <div className="h-12 bg-red-100">01</div>
          <div className="h-12 bg-red-200">02</div>
          <div className="h-12 bg-red-300 fixed bottom-10 right-10">
            03:fixed bottom-10 right-10
          </div>
          <div className="text-red-500 font-bold">
            03は右下に固定されている!!
          </div>
        </div>

        <div className="col-span-2">
          <div className="text-center">sticky</div>
          <div className="h-36 bg-red-100 sticky top-0">01:sticky top-0</div>
          <div className="h-[50vh] bg-red-200">02</div>
          <div className="h-[50vh] bg-red-300">03</div>
        </div>
      </div>

      <div className="h-48 text-center">
        最後までスクロールしてstickyが聞いてるか確認してみましょう
      </div>
      <hr className="my-2 border-t border-dashed border-gray-600" />

      <div className="text-xl font-semibold text-gray-500 text-center">
        z-indexによる重ね合わせ制御
      </div>
      <div className="text-center">
        relative指定すると、後から指定した要素が画面手前に配置される。z-indexで重ね合わせ順の制御が可能。
      </div>
      <div className="text-center mt-4">z-index無し</div>
      <div className="w-1/2 mx-auto grid grid-cols-2">
        <div className="h-36 bg-red-100 flex items-center justify-center">
          01:relative指定無し
        </div>
        <div className="h-36 bg-red-200  flex items-center justify-center relative top-4 -left-4">
          02:relative指定有り
        </div>
        <div className="h-36 bg-red-300  flex items-center justify-center relative -top-4 left-4">
          03:relative指定有り
        </div>
        <div className="h-36 bg-orange-100  flex items-center justify-center">
          04:relative指定無し
        </div>
      </div>
      <div className="text-center mt-4">z-index有り</div>
      <div className="w-1/2 mx-auto grid grid-cols-2">
        <div className="h-36 bg-red-100 flex items-center justify-center">
          01:relative指定無し
        </div>
        <div className="h-36 bg-red-200  flex items-center justify-center relative top-4 -left-4">
          02:relative指定有り
        </div>
        <div className="h-36 bg-red-300  flex items-center justify-center relative -top-4 left-4">
          03:relative指定有り
        </div>
        <div className="h-36 bg-orange-100  flex items-center justify-center z-10">
          04:relative指定無し<span className="text-red-500">（z-10指定）</span>
        </div>
      </div>
    </>
  );
}
