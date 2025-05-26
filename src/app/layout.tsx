import type { Metadata, Viewport } from "next";
import { Dosis } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const dosis = Dosis({
  variable: "--font-dosis",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maxhofkinder Kinder e.V.",
  description: "Maxhof Kinder e.V.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${dosis.variable} font-dosis min-h-screen`}>
        <Header />
        
        <main className="mx-auto px-2 md:px-16 lg:px-24 flex-grow mt-8 mb-16">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}


