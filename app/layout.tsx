// app/layout.tsx
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackgroundDecoration from "@/components/BackgroundDecoration";

// Premium Serif for Headings
const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

// Minimalist Sans for Body
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500"],
});

export const metadata = {
  title: "Param — Corporate Gifting Redefined",
  description:
    "Premium corporate gifting solutions designed to impress clients and teams.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-[var(--clr-bg-cream)] text-[var(--clr-text-dark)] font-sans antialiased selection:bg-black selection:text-white">
        {/* Grid pattern - lowest layer */}
        <BackgroundDecoration />
        
        {/* Content wrapper - sits above grid */}
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
