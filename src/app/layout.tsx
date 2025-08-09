import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js SSR Starter",
  description: "A Next.js starter template featuring server-side rendering, TypeScript, and Tailwind CSS",
  keywords: ["Next.js", "React", "TypeScript", "SSR", "Tailwind CSS"],
  authors: [{ name: "Next.js SSR Starter" }],
  openGraph: {
    title: "Next.js SSR Starter",
    description: "A Next.js starter template featuring server-side rendering, TypeScript, and Tailwind CSS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
