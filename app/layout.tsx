import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Sreekanth Rathod | Computer Science Student & Technology Enthusiast",
  description:
    "Portfolio of Sreekanth Rathod, a Computer Science Engineering student exploring software development, AI, data analytics, cloud technologies, and modern web development.",
  keywords: [
    "Sreekanth Rathod",
    "Computer Science Student",
    "Software Developer",
    "AI Enthusiast",
    "Data Analytics",
    "Web Development",
    "Bengaluru",
    "Portfolio",
  ],
  authors: [{ name: "Sreekanth Rathod" }],
  openGraph: {
    title: "Sreekanth Rathod | CS Student & Technology Enthusiast",
    description:
      "Portfolio of Sreekanth Rathod — a CSE student from Bengaluru exploring AI, data, software development, and cloud technologies.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased">{children}</body>
    </html>
  );
}
