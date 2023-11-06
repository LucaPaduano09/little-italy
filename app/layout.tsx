import type { Metadata } from "next";
import "./globals.css";
import Navbaro from "@/components/Navbar/Navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Little Italy",
  description: "Little Italy high quality italian food all over the globe",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en" className="light">
      <body className={"w-[100vw] h-[100vh]"}>
        <Navbaro session={session} />
        {children}
      </body>
    </html>
  );
}
