import { Bungee } from "next/font/google";
import "./globals.css";
export const bungee = Bungee({
  weight: ["400"],
  subsets: ["latin"],
});
export const metadata = {
  title: "Muhammad Farooq",
  description: "Muhammad Farooq",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`dark ${bungee.className}`}>{children}</body>
    </html>
  );
}
