import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/constants";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Ard Nabta Building Contracting L.L.C. delivers licensed villa construction, extensions, and building contracting across Dubai.",
  keywords: [
    "villa construction Dubai",
    "building contractor Dubai",
    "villa extension Hatta",
    "Dubai Municipality licensed contractor",
    "villa renovation Dubai",
  ],
  openGraph: {
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description:
      "Licensed villa construction, extensions, and building contracting across Dubai.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description:
      "Licensed villa construction, extensions, and building contracting across Dubai.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col bg-background text-body">
        <TopBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
