import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechCareer Hub | Find Your Path in Software Engineering",
  description: "A premium guide to software engineering career paths. Detailed roadmaps, insights, and skills required for modern tech roles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen flex flex-col antialiased text-gray-100 bg-[#050510]`}>
        {children}
      </body>
    </html>
  );
}
