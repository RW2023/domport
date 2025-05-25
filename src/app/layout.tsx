// File: src/app/layout.tsx

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
  title: "Dominic Wilson | Child Actor & Model",
  description:
    "Portfolio of Dominic Wilson, a talented child actor and model. Explore his work in film, TV, and modeling.",
  openGraph: {
    title: "Dominic Wilson | Child Actor & Model",
    description:
      "Portfolio of Dominic Wilson showcasing his roles in film, television, and modeling projects.",
    url: "https://yourdomain.com",
    siteName: "Dominic Wilson Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dominic Wilson | Child Actor & Model",
    description:
      "Explore Dominic Wilson’s work in film, TV, and modeling. Professional portfolio for casting and agencies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">
          {/* Navbar goes here */}
          <main className="flex-grow">{children}</main>
          {/* Footer goes here in the future */}
        </div>
      </body>
    </html>
  );
}
