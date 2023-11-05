import type { Metadata } from "next";
import "./globals.css";
import Navbaro from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Little Italy",
  description: "Little Italy high quality italian food all over the globe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className={"w-[100vw] h-[100vh]"}>
        <Navbaro />
        {children}
      </body>
    </html>
  );
}
