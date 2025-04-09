import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amin Ben Abelhafidh | Business & Technology Professional",
  description: "Amin Ben Abdelhafidh, a BSBA student at Tunis Business School, combines analytical marketing insights with technical capabilities. Specializing in marketing analytics and software development, Amin is dedicated to driving impactful and user-friendly results.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"mt-8 mx-12 lg:mx-36 xl:mx-60 lg:mt-12" + " " + inter.className} >{children}</body>
    </html>
  );
}
