import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ArkAelius Studio | Build the Future with AI",
  description:
    "Premium AI Agency building websites, apps, SaaS and AI automation.",
  keywords: [
    "AI",
    "Web Development",
    "Next.js",
    "React",
    "ArkAelius Studio",
    "Software Company",
  ],
  authors: [{ name: "ArkAelius Studio" }],
  creator: "ArkAelius Studio",
  metadataBase: new URL("https://arkaelius-studio-web.vercel.app"),

  openGraph: {
    title: "ArkAelius Studio",
    description: "Build the Future with AI",
    url: "https://arkaelius-studio-web.vercel.app",
    siteName: "ArkAelius Studio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ArkAelius Studio",
    description: "Build the Future with AI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}