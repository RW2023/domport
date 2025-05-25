// File: src/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import PageWrapper from "./components/PageWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dominic Wilson | Child Actor & Model",
  description:
    "Portfolio of Dominic Wilson, a talented child actor and model. Explore his work in film, TV, and modeling.",
  openGraph: {
    title: "Dominic Wilson | Child Actor & Model",
    description:
      "Portfolio of Dominic Wilson showcasing his roles in film, television, and modeling projects.",
    url: "https://domport.vercel.app/",
    siteName: "Dominic Wilson Portfolio",
    type: "website",
    // images will be auto-detected from app/open-graph-image.png
  },
  twitter: {
    card: "summary_large_image",
    title: "Dominic Wilson | Child Actor & Model",
    description:
      "Explore Dominic Wilson’s work in film, TV, and modeling. Professional portfolio for casting and agencies.",
    // images will be auto-detected from app/open-graph-image.png
  },
  icons: {
    icon: "/favicon-64.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-background text-foreground">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <PageWrapper>{children}</PageWrapper>
          </main>
          {/* Footer goes here in the future */}
        </div>
      </body>
    </html>
  );
}
