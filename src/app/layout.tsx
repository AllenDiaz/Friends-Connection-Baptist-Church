import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grace Community Church - Growing in Faith Together",
  description: "Welcome to Grace Community Church. Join us in worship, fellowship, and growing in faith together as a community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm">© 2024 Grace Community Church. All rights reserved.</p>
              <p className="text-xs text-gray-400 mt-1">Growing in Faith Together</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
