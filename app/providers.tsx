"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import Navbaro from "@/components/Navbar/Navbar";

export function Providers({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) {
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <main className="flex min-h-screen flex-col items-center justify-start bg-white">
            {children}
          </main>
        </NextThemesProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}
