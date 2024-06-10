import Navbaro from "@/components/Navbar/Navbar";
import Products from "@/components/Products/Products";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import Newsletter from "@/components/Newsletter/Newsletter";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <Navbaro session={session ? session : null} /> */}
      <Products />
      <Newsletter session={session ? session : null} />
    </main>
  );
}
