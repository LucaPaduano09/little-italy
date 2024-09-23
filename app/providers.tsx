"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../redux/store/index";

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
        <NextThemesProvider attribute="class" defaultTheme="light">
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <main className="flex min-h-screen flex-col items-center justify-start bg-white">
                {children}
              </main>
            </PersistGate>
          </Provider>
        </NextThemesProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}
