import "./globals.css";

export const metadata = {
  title: "Muhammad Farooq",
  description: "Muhammad Farooq",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>{children}</body>
    </html>
  );
}
