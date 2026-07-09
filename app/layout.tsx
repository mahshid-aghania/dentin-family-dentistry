import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Dentin Family Dentistry | Best Dentist in Vaughan, ON",
  description:
    "Dentin Family Dentistry in Vaughan provides compassionate, high-quality dental care including implants, cosmetic, restorative, and emergency dentistry. Dr. Mehdi Adibrad.",
  keywords: "dentist Vaughan, dental implants Vaughan, cosmetic dentistry, family dentist, emergency dentist Vaughan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
