import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HomeShine Interior | Premium Interior Design in Pune",
  description: "Transform your space with HomeShine Interior. Expert modular kitchen, residential, and commercial interior design services in Pune. Quality craftsmanship, on-time delivery.",
  keywords: ["interior designer Pune", "modular kitchen Pune", "residential interior design", "commercial interior design", "interior design Aundh"],
  openGraph: {
    title: "HomeShine Interior | Premium Interior Design in Pune",
    description: "Transform your space with HomeShine Interior. Expert modular kitchen, residential, and commercial interior design services in Pune.",
    url: "https://demo-interior-website-project.vercel.app",
    siteName: "HomeShine Interior",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HomeShine Interior Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HomeShine Interior | Premium Interior Design in Pune",
    description: "Transform your space with HomeShine Interior. Expert modular kitchen, residential, and commercial interior design services in Pune.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
