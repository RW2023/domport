import type { Metadata } from "next";
import { Poppins, Karla } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const karla = Karla({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-karla",
});

export const metadata: Metadata = {
  title: "Dominic Wilson | Child Actor & Model",
  description:
    "Portfolio of Dominic Wilson, a talented child actor and model. Explore his work in film, TV, and modeling.",
  openGraph: {
    title: "Dominic Wilson | Child Actor & Model",
    description:
      "Portfolio of Dominic Wilson showcasing his roles in film, television, and modeling projects.",
    url: "https://yourdomain.com", // Replace with real domain
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
      <body
        className={`${poppins.variable} ${karla.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          {/* Footer goes here in the future */}
        </div>
      </body>
    </html>
  );
}