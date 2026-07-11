import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import InstagramBar from "./components/InstagramBar";
import { AuthProvider } from "./components/AuthContext";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
  preload: true,
});

const SITE_URL = "https://dentin-family-dentistry.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dentin Family Dentistry | Best Dentist in Vaughan, ON",
    template: "%s | Dentin Family Dentistry Vaughan",
  },
  description:
    "Dentin Family Dentistry in Vaughan provides compassionate, high-quality dental care including implants, cosmetic, restorative, and emergency dentistry. Dr. Mehdi Adibrad — Periodontist & Implant Surgeon.",
  keywords: [
    "dentist Vaughan",
    "dental implants Vaughan",
    "cosmetic dentistry Vaughan",
    "family dentist Vaughan ON",
    "emergency dentist Vaughan",
    "periodontist Vaughan",
    "dental implant surgeon Vaughan",
    "CDCP dentist Vaughan",
    "Dr Mehdi Adibrad",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE_URL,
    siteName: "Dentin Family Dentistry",
    title: "Dentin Family Dentistry | Best Dentist in Vaughan, ON",
    description:
      "Compassionate, high-quality dental care in Vaughan — implants, cosmetic, restorative & emergency dentistry. Dr. Mehdi Adibrad, Periodontist & Implant Surgeon.",
    images: [
      {
        url: "/images/dr-adibrad.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Mehdi Adibrad — Dentin Family Dentistry Vaughan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dentin Family Dentistry | Best Dentist in Vaughan, ON",
    description:
      "Compassionate, high-quality dental care in Vaughan — implants, cosmetic, restorative & emergency dentistry.",
    images: ["/images/dr-adibrad.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["Dentist", "LocalBusiness"],
  name: "Dentin Family Dentistry",
  description:
    "Compassionate, high-quality dental care in Vaughan, ON — dental implants, cosmetic dentistry, restorative care, and 24/7 emergency dental services.",
  url: SITE_URL,
  telephone: "+14379002200",
  email: "dfdentistry3300@gmail.com",
  image: `${SITE_URL}/images/dr-adibrad.jpg`,
  logo: `${SITE_URL}/images/logo-color.png`,
  priceRange: "$$",
  currenciesAccepted: "CAD",
  paymentAccepted: "Cash, Credit Card, Insurance, CDCP",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3300 Steeles Ave W, Unit #6",
    addressLocality: "Vaughan",
    addressRegion: "ON",
    postalCode: "L4K 2Y4",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.7949,
    longitude: -79.5356,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "21:00",
    },
  ],
  hasMap: "https://maps.google.com/?q=3300+Steeles+Ave+W+Vaughan+ON",
  sameAs: [
    "https://www.instagram.com/dentin_family_dentistry/",
    "https://www.facebook.com/DentinFamilyDentistry/",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "87",
  },
  medicalSpecialty: ["Dentistry", "Periodontics", "Oral Surgery"],
  availableService: [
    { "@type": "MedicalProcedure", name: "Dental Implants" },
    { "@type": "MedicalProcedure", name: "Cosmetic Dentistry" },
    { "@type": "MedicalProcedure", name: "General Dentistry" },
    { "@type": "MedicalProcedure", name: "Emergency Dental Care" },
    { "@type": "MedicalProcedure", name: "Oral Surgery" },
    { "@type": "MedicalProcedure", name: "Endodontics" },
    { "@type": "MedicalProcedure", name: "Pediatric Dentistry" },
    { "@type": "MedicalProcedure", name: "Restorative Dentistry" },
  ],
  founder: {
    "@type": "Person",
    name: "Dr. Mehdi Adibrad",
    jobTitle: "Periodontist & Implant Surgeon",
    alumniOf: "NDEB Equivalency Process",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
          <InstagramBar />
          <Footer />
          <ChatBot />
        </AuthProvider>
      </body>
    </html>
  );
}
