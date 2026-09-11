import type { Metadata } from "next";
import { Archivo_Black, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ScrollProgress from "@/components/motion/ScrollProgress";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/constants";
import "./globals.css";

const display = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const body = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
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
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-paper text-muted">
        <ScrollProgress />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
