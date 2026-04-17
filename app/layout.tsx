// app/layout.tsx
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackgroundDecoration from "@/components/BackgroundDecoration";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
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
      <body className="bg-[var(--clr-bg-cream)] text-[var(--clr-text-dark)] font-sans">
        {/* Grid pattern - lowest layer */}
        <BackgroundDecoration />
        
        {/* Content wrapper - sits above grid */}
        <div className="relative z-10">
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}