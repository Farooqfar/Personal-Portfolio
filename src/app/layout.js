import { Space_Grotesk } from "next/font/google";
import "./globals.css";
export const outfit = Space_Grotesk({
  subsets: ["latin"],
});
export const metadata = {
  title: "Muhammad Farooq",
  description: "Muhammad Farooq",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`dark ${outfit.className}`}>{children}</body>
    </html>
  );
}
