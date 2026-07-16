import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "VessTrust — Pan-African Credit Infrastructure",
    template: "%s | VessTrust",
  },
  description:
    "VessTrust converts mobile money transaction history into a portable credit score for the 493 million unbanked adults across Africa.",
  metadataBase: new URL("https://vesstrust.com"),
  openGraph: {
    title: "VessTrust — Pan-African Credit Infrastructure",
    description:
      "VessTrust converts mobile money transaction history into a portable credit score for the 493 million unbanked adults across Africa.",
    url: "https://vesstrust.com",
    siteName: "VessTrust",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VessTrust Credit Infrastructure",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VessTrust — Pan-African Credit Infrastructure",
    description:
      "VessTrust converts mobile money transaction history into a portable credit score for the 493 million unbanked adults across Africa.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* Google Analytics 4 Placeholder */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="antialiased bg-navy-dark text-[#0E1629]">
        <NavBar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
