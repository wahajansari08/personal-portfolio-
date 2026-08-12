import type { Metadata } from "next";
import { Open_Sans, Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/skins/circle.css";
import "@/styles/globals.css";
import "@/styles/skins/globalcolor.css";
import Navbar from "@/components/common/Navbar/Navbar";
import Footer from "@/components/common/Footer/Footer";
import ClientInit from "@/components/common/ClientInit/ClientInit";
import JsonLd from "@/components/common/JsonLd/JsonLd";
import { personSchema, webSiteSchema, professionalServiceSchema } from "@/lib/schema";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-open-sans",
  display: "swap",
});

const SITE_URL = "https://wahaj.pk";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Wahaj Ansari — Web Developer & SEO Specialist",
    template: "%s | Wahaj Ansari",
  },
  description:
    "Wahaj Ansari is a web developer and SEO specialist based in Karachi, Pakistan. Expert in Next.js, WordPress, Shopify development and technical SEO strategies.",
  keywords: [
    "web developer Karachi",
    "Next.js developer",
    "WordPress developer",
    "Shopify developer",
    "SEO specialist Pakistan",
    "full stack developer",
    "Wahaj Ansari",
  ],
  authors: [{ name: "Wahaj Ansari", url: SITE_URL }],
  creator: "Wahaj Ansari",
  publisher: "Wahaj Ansari",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Wahaj Ansari — Web Developer & SEO Specialist",
    title: "Wahaj Ansari — Web Developer & SEO Specialist",
    description:
      "Web developer and SEO specialist based in Karachi, Pakistan. Next.js, WordPress, Shopify & technical SEO.",
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wahaj Ansari — Web Developer & SEO Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wahaj Ansari — Web Developer & SEO Specialist",
    description:
      "Web developer and SEO specialist based in Karachi, Pakistan. Next.js, WordPress, Shopify & technical SEO.",
    images: ["/img/og-image.jpg"],
    creator: "@wahajansari",
  },
  verification: {
    google: "",   // paste your Search Console verification token here
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const htmlClass = [poppins.variable, openSans.variable].filter(Boolean).join(" ");

  return (
    <html lang="en" dir="ltr" data-theme="light" suppressHydrationWarning className={htmlClass}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <meta name="theme-color" content="#111111" />
      </head>
      <body className="has-default-menu light">
        <ClientInit />
        <Navbar />
        {children}
        <Footer />
        <JsonLd schema={[personSchema(), webSiteSchema(), professionalServiceSchema()]} />
      </body>
    </html>
  );
}
