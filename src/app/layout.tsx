import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YANGINPRO | Akıllı Yangın Güvenliği Yönetim Platformu",
  description: "Türkiye'nin lider yangın güvenliği yönetim platformu. Binalarınızın yangın güvenliğini dijital ortamda yönetin, analiz edin ve raporlayın.",
  keywords: ["yangın güvenliği", "bina yönetimi", "yangın analizi", "yangın merdiveni", "sprinkler", "yangın raporu"],
  authors: [{ name: "YANGINPRO" }],
  openGraph: {
    title: "YANGINPRO | Akıllı Yangın Güvenliği Yönetim Platformu",
    description: "Türkiye'nin lider yangın güvenliği yönetim platformu. Binalarınızın yangın güvenliğini dijital ortamda yönetin.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
