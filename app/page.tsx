import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection/HeroSection";
import JsonLd from "@/components/common/JsonLd/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

const SITE_URL = "https://wahaj.pk";

export const metadata: Metadata = {
  title: "Wahaj Ansari — Web Developer & SEO Specialist in Karachi",
  description:
    "Wahaj Ansari is a web developer and SEO specialist based in Karachi, Pakistan. I build fast, search-optimised websites using Next.js, WordPress and Shopify.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    url: SITE_URL,
    title: "Wahaj Ansari — Web Developer & SEO Specialist in Karachi",
    description:
      "Fast, search-optimised websites built with Next.js, WordPress and Shopify by Wahaj Ansari, Karachi.",
    images: [{ url: "/img/og-image.jpg", width: 1200, height: 630, alt: "Wahaj Ansari" }],
  },
};

const homeFaqs = [
  {
    question: "What services does Wahaj Ansari offer?",
    answer:
      "Wahaj Ansari offers web development and SEO services including Next.js application development, WordPress website design, Shopify store setup, and technical SEO campaigns for businesses worldwide.",
  },
  {
    question: "Where is Wahaj Ansari based?",
    answer:
      "Wahaj Ansari is based in Karachi, Pakistan and works with clients across Pakistan, the UK, the US and the UAE.",
  },
  {
    question: "Can Wahaj Ansari build a website for my business?",
    answer:
      "Yes. Wahaj Ansari builds custom websites using Next.js, WordPress and Shopify. Each project starts with understanding your business goals before any development begins.",
  },
  {
    question: "Does Wahaj Ansari do SEO?",
    answer:
      "Yes. SEO services include technical SEO audits, on-page optimisation, local SEO, keyword research, and link building for businesses looking to improve their search rankings.",
  },
  {
    question: "How can I hire Wahaj Ansari?",
    answer:
      "You can get in touch via the contact page at wahaj.pk/contact or by emailing wahajansari08@gmail.com directly.",
  },
];

export default function HomePage() {
  return (
    <main className="ib-main-content">
      <JsonLd schema={breadcrumbSchema([{ name: "Home", href: "/" }])} />
      <JsonLd schema={faqSchema(homeFaqs)} />
      <HeroSection />
    </main>
  );
}
