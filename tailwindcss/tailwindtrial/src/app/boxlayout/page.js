export default function BoxLayout() {
  return (
    // Reactはルート要素を必ず一つ持っている必要があり省略記法として<>を使う
    <>
      <h1 className="pt-8 text-3xl font-bold">ボックスのレイアウト</h1>
      <hr className="my-2 border-t border-dashed border-gray-600" />

      <div className="text-xl font-semibold text-gray-500">
        要素の外側の位置関係を制御〜block,inline,inline-block
      </div>
      <div className="bg-red-100 block">block:改行される</div>
      <div className="bg-red-200 inline w-1 h-1">
        inline:横に並べる（改行されない）。幅と高さは指定できない（指定しても効かない）。
      </div>
      <div className="bg-red-300 inline-block h-16">
        inline-block:横に並べる。こちらは幅と高さの指定が可能。
      </div>
      <hr className="my-2 border-t border-dashed border-gray-600" />

      <div className="text-xl font-semibold text-gray-500">
        HTMLタグのディスプレイプロパティ初期値がblockの例（改行）
      </div>
      <div className="bg-red-100">divタグ</div>
      <p className="bg-red-200">pタグ</p>
      <ul className="bg-red-100">ulタグ</ul>
      <h1 className="bg-red-200">h1〜h6タグ</h1>
      <div className="bg-red-100">
        これらのタグはwidthが親コンテナに対して横幅いっぱいになる
      </div>
      <hr className="my-2 border-t border-dashed border-gray-600" />

      <div className="text-xl font-semibold text-gray-500">
        HTMLタグのディスプレイプロパティ初期値がinline（横並び）
      </div>
      <div className="space-x-2">
        <a className="bg-red-100">aタグ</a>
        <span className="bg-red-200">spanタグ</span>
        <span className="bg-red-100 w-1">
          これらのタグはwidthが内容に合わせて自動調整される（widthを指定しても原則効かない）
        </span>
      </div>
      <hr className="my-2 border-t border-dashed border-gray-600" />

      <div>
        <div className="text-xl font-semibold text-gray-500">
          要素の内側の位置関係を制御〜flex
        </div>
        <div className="flex gap-2">
          <div className="bg-red-100">親要素にflexを指定すると...</div>
          <div className="bg-red-200">
            子要素のdivタグ（初期値がblock）が...
          </div>
          <div className="bg-red-100">03 inline化して横並びになる</div>
        </div>
      </div>
      <hr className="my-2 border-t border-dashed border-gray-600" />

      <div>
        <div className="text-xl font-semibold text-gray-500">
          要素の内側の位置関係を制御〜grid
        </div>
        <div className="grid grid-cols-2">
          <div className="bg-red-100">01 親要素にgridを指定し...</div>
          <div className="bg-red-200">
            02 併せて、各girdの配置指定（ここではgrid-cols-2）を指定すると...
          </div>
          <div className="bg-red-300">
            03 グリッドアイテムがグリッドに合わせて自動配置される。
          </div>
          <div className="bg-red-100">04</div>
          <div className="bg-red-200">05</div>
          <div className="bg-red-300">06</div>
        </div>
      </div>
      <hr className="my-2 border-t border-dashed border-gray-600" />
    </>
  );
}
