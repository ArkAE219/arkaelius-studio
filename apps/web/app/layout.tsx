import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Providers } from "@/providers/providers";
import { CustomCursor } from "@/components/common/custom-cursor";
import { ScrollProgress } from "@/components/common/scroll-progress";
import { Analytics } from "@vercel/analytics/react";


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
    default: "ArkAelius Studio",
    template: "%s | ArkAelius Studio",
  },

  description:
    "ArkAelius Studio builds AI-powered websites, SaaS products, AI solutions, and premium digital experiences for ambitious startups and modern businesses.",

  keywords: [
    "ArkAelius Studio",
    "AI Agency",
    "Web Development",
    "Next.js",
    "React",
    "TypeScript",
    "UI UX",
    "Artificial Intelligence",
    "SaaS Development",
    "Startup",
    "Digital Agency",
  ],

  authors: [
    {
      name: "ArkAelius Studio",
    },
  ],

  creator: "ArkAelius Studio",
  publisher: "ArkAelius Studio",

  metadataBase: new URL("https://arkaelius.com"),

  openGraph: {
    title: "ArkAelius Studio",
    description:
      "Build the Future with AI. We craft premium websites, AI products and digital experiences.",

    url: "https://arkaelius.com",
    siteName: "ArkAelius Studio",

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ArkAelius Studio",
    description:
      "Build the Future with AI. Premium digital agency.",
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <Providers>
          
            <ScrollProgress />
            <CustomCursor />
            {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}