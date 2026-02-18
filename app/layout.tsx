import type { Metadata, Viewport } from "next";
import { Ysabeau } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

// Google Font – change the import and variable name to switch fonts.
// Use variable: "--font-sans" so Tailwind/globals don't need updating.
const ysabeau = Ysabeau({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Lebu Kale Heywet Church | A Community of Faith, Worship & Love",
  description:
    "Welcome to Lebu Kale Heywet Church in Addis Ababa. Join us for worship, fellowship, and spiritual growth. Sunday Service at 3:00 PM.",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ysabeau.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
