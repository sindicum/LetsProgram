import "./globals.css";

export const metadata = {
  title: "メモアプリ",
  description: "",
};



export default function RootLayout({ children }) {
  // const a = 'a'
  // a += 'a'
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
