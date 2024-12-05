export default function BoxLayout() {
  return (
    <div className="bg-gray-50">
      <h1 className="mt-8 text-3xl font-bold">ボックスモデル</h1>
      <hr className="my-2 border-t border-dashed border-gray-600" />
      <div className="m-8 bg-red-100">m-8:マージンは要素の外側</div>
      <hr className="my-2 border-t border-dashed border-gray-600" />
      <div className="p-8 bg-red-200">p-8:パディングは要素の内側</div>
      <hr className="my-2 border-t border-dashed border-gray-600" />
      <div className="p-8 m-8 bg-red-100">
        p-8 m-8:マージンとパディングの組み合わせで要素の内外に余白
      </div>
      <hr className="my-2 border-t border-dashed border-gray-600" />
      <div className="p-8 m-8 bg-red-200 border-8 border-red-300">
        p-8 m-8
        border-8:マージンとパディングの間がボーダー。ボーダーの太さもカウントされる。
        なお、ボーダークラスの数値はマージンやパディングと単位が異なる。
      </div>
      <hr className="my-2 border-t border-dashed border-gray-600" />
      <div className="m-8 bg-red-100">m-8:↓マージン同士は重なりが...</div>
      <div className="m-8 bg-red-100">m-8:↑共有される</div>
      <hr className="my-2 border-t border-dashed border-gray-600" />
    </div>
  );
}
