import type { Metadata } from "next";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid/PortfolioGrid";
import JsonLd from "@/components/common/JsonLd/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

const SITE_URL = "https://wahaj.pk";

export const metadata: Metadata = {
  title: "Portfolio — Next.js, WordPress, Shopify & SEO Projects",
  description:
    "Browse Wahaj Ansari's portfolio of web development and SEO projects. Next.js applications, WordPress sites, Shopify stores and SEO campaigns delivered for clients worldwide.",
  alternates: { canonical: `${SITE_URL}/portfolio` },
  openGraph: {
    url: `${SITE_URL}/portfolio`,
    title: "Portfolio — Next.js, WordPress, Shopify & SEO Projects",
    description:
      "Web development and SEO projects by Wahaj Ansari — Next.js, WordPress, Shopify and SEO.",
    images: [{ url: "/img/og-image.jpg", width: 1200, height: 630, alt: "Wahaj Ansari Portfolio" }],
  },
};

const portfolioFaqs = [
  {
    question: "What types of websites has Wahaj Ansari built?",
    answer:
      "Wahaj Ansari has built Next.js web applications, WordPress business websites, Shopify e-commerce stores, and managed SEO campaigns for clients in healthcare, SaaS, e-commerce, real estate and professional services.",
  },
  {
    question: "Can I see examples of your WordPress work?",
    answer:
      "Yes. The portfolio includes WordPress projects for clients including cleaning services, medical providers, HR consultancies and more. Visit wahaj.pk/portfolio and filter by WordPress.",
  },
  {
    question: "Do you build Shopify stores?",
    answer:
      "Yes. Shopify development services include custom theme development, store setup, product management and performance optimisation.",
  },
];

export default function PortfolioPage() {
  return (
    <main className="ib-main-content">
      <JsonLd schema={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Portfolio", href: "/portfolio" }])} />
      <JsonLd schema={faqSchema(portfolioFaqs)} />
      <PortfolioGrid />
    </main>
  );
}
