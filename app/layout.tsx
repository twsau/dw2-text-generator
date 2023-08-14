import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { ZustandHydrate } from "@/state/ZustandHydrate";
import { Header } from "@/components/Header";

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
      <body className={cn(inter.className, "h-full")}>
        <Header />
        <main className="max-w-lg mx-auto relative top-24 p-3">{children}</main>
        <Toaster />
        <ZustandHydrate />
      </body>
    </html>
  );
}
