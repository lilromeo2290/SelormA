import type { Metadata } from "next";
import { Poppins, Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Selorm A Ventures | Painting & Construction Works in Ghana",
  description:
    "Selorm A Ventures provides professional painting, scaffolding, column box installation, concrete support, and construction support services across Ghana. Quality workmanship, reliability, and timely delivery.",
  keywords: [
    "Selorm A Ventures",
    "Ghana construction company",
    "painting services Ghana",
    "scaffolding Ghana",
    "column box installation",
    "concrete support",
    "construction support Prampram",
    "wheel barrow supply Ghana",
    "professional painters Ghana",
    "building services Accra",
  ],
  authors: [{ name: "Selorm A Ventures" }],
  creator: "Selorm A Ventures",
  publisher: "Selorm A Ventures",
  icons: {
    icon: "/selorm-logo.png",
    shortcut: "/selorm-logo.png",
    apple: "/selorm-logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.selormaventures.com",
  },
  openGraph: {
    title: "Selorm A Ventures | Building Excellence Through Quality Craftsmanship",
    description:
      "Professional painting, construction support, scaffolding, and building services throughout Ghana. Committed to quality, reliability, and excellence.",
    url: "https://www.selormaventures.com",
    siteName: "Selorm A Ventures",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selorm A Ventures | Painting & Construction Works",
    description:
      "Professional painting, construction support, scaffolding, and building services throughout Ghana.",
  },
  category: "Construction & Painting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${poppins.variable} ${montserrat.variable} ${openSans.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
