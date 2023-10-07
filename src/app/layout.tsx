import "../styles/globals.css";

import { ContextProvider } from "@/context/store";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rahad Login Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="relative w-screen h-screen">
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
