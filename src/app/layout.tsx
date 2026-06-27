import type { Metadata } from "next";
import { Fredoka, Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Playful and bold header font (Fredoka)
const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Friendly and highly readable body font (Quicksand)
const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Naincy Career School | Discover, Grow & Blast Off! 🚀",
  description:
    "Welcome to Naincy Career School! We blend core academic excellence with fun, hands-on career exploration paths to help kids find their passions and build bright futures.",
  keywords: [
    "Naincy Career School",
    "career school",
    "elementary school",
    "middle school",
    "kid-friendly school website",
    "interactive education",
    "hands-on coding space",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${quicksand.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 antialiased font-body">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
