import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Grace Worship Center",
    template: "%s | Grace Worship Center",
  },
  description: "A Christ-centered community in worship, word, and service.",
  metadataBase: new URL("https://www.example.com"),
  openGraph: {
    title: "Grace Worship Center",
    description: "A Christ-centered community in worship, word, and service.",
    url: "https://www.example.com",
    siteName: "Grace Worship Center",
    locale: "en_US",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
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
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {children}
        </main>
      </body>
    </html>
  );
}
