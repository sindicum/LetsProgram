"use client"
import { useState} from "react";

export default function Home() {
  
  const [inputText,setInputText] = useState("");
  const [memo,setMemo] = useState([]);

  const onClickAddBtn = () => {
    setMemo((prevMemo) => [...prevMemo, inputText])
    setInputText("")
  }

  const onClickDeleteBtn = (index) => {
    setMemo((prevMemo) => prevMemo.filter((_, i) => i !== index));
  }

  return (
      <main className="p-2">
        <h1 className="text-3xl my-6">簡単メモアプリ（Next.js版）</h1>
        <input className="border" value={inputText} onChange={e => setInputText(e.target.value)}/>
        <button className="ml-4 px-2 border rounded bg-gray-100" onClick={onClickAddBtn}>追加</button>
        <div className="border p-4 my-2">
            <p>メモ</p>
            <ul className="list-disc list-inside m-2 p-2">
              {memo.map((text,index) => (
                <li key={index} className="my-4">
                  <span>{text}</span>
                  <button className="ml-4 px-2 border rounded bg-gray-100" onClick={() => onClickDeleteBtn(index)}>削除</button>
                </li>
              ))}
            </ul>
        </div>
      </main>
  );
}