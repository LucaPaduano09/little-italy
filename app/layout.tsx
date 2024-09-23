import type { Metadata } from "next";
import "./globals.css";
import { Provider, useSelector } from "react-redux";
import store from "../redux/store/index";
import Navbaro from "@/components/Navbar/Navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Providers } from "./providers";
import CartButton from "@/components/CartButton/CartButton";
import Cookies from "js-cookie";

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
  let cartState = Cookies.get("cart");
  return (
    <html lang="en" className="light">
      <body className={"w-[100vw] h-[100vh]"}>
        <Providers session={session}>
          <Navbaro session={session} />
          {children}
          <CartButton itemsInCart={cartState} />
        </Providers>
      </body>
    </html>
  );
}
