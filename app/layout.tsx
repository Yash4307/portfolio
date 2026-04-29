import type { Metadata } from "next";
import { JetBrains_Mono, Syne } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Name — ML & AI Developer",
  description:
    "Python developer specializing in Machine Learning, Data Science, and AI systems. Building intelligent tools that are both powerful and secure.",
  keywords: ["machine learning", "data science", "AI", "Python", "LLMs", "prompt engineering"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name — ML & AI Developer",
    description: "Python developer specializing in ML, Data Science, and AI systems.",
    type: "website",
    // Add og:image once you have one in /public/og-image.png
    // images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name — ML & AI Developer",
    description: "Python developer specializing in ML, Data Science, and AI systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${syne.variable}`}>
      <body className="font-mono bg-surface text-text antialiased">
        <div className="grid-bg" aria-hidden="true" />
        <div className="scanline" aria-hidden="true" />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
