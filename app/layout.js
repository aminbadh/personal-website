import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amin Ben Abelhafidh | Business Student & Technologist",
  description: "Amin Ben Abdelhafidh, a student at Tunis Business School, is passionate about technology and innovation. Specializing in software development, marketing, and project management, Amin is dedicated to creating impactful, user-friendly solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"mt-8 mx-12 lg:mx-60 lg:mt-12" + " " + inter.className} >{children}</body>
    </html>
  );
}
