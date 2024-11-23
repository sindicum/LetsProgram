import "./globals.css";

export const metadata = {
  title: "簡単メモアプリ",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
