import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { ZustandHydrate } from "@/state/ZustandHydrate";
import { NavLink } from "@/components/Navlink";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "dw2-text-generator",
  description: "it is a text generator for dw2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full" lang="en">
      <body className={cn(inter.className, "h-full dark")}>
        <header className="fixed w-full border-b p-5 flex justify-between gap-3">
          <NavLink href="/" text="create" />
          <NavLink href="/saved" text="saved" />
          <div className="ml-auto flex gap-3">
            <a
              className="hover:underline"
              href="https://store.steampowered.com/app/667530/Drunken_Wrestlers_2/"
              target="_blank"
            >
              dw2
            </a>
            <a
              className="hover:underline"
              href="https://x.com/_twsau"
              target="_blank"
            >
              twsau
            </a>
          </div>
        </header>
        <main className="relative p-5 flex flex-col gap-5 justify-center h-full max-w-lg mx-auto">
          {children}
        </main>
        <Toaster />
        <ZustandHydrate />
      </body>
    </html>
  );
}
