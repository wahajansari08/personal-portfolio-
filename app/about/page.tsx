import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero/AboutHero";
import Skills from "@/components/about/Skills/Skills";
import Experience from "@/components/about/Experience/Experience";
import Education from "@/components/about/Education/Education";
import Hobbies from "@/components/about/Hobbies/Hobbies";
import { Reveal } from "@/components/motion";
import JsonLd from "@/components/common/JsonLd/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

const SITE_URL = "https://wahaj.pk";

export const metadata: Metadata = {
  title: "About Me — Web Developer & SEO Specialist",
  description:
    "Learn about Wahaj Ansari — a web developer and SEO specialist from Karachi with expertise in Next.js, WordPress, Shopify and technical SEO. View my skills, experience and education.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    url: `${SITE_URL}/about`,
    title: "About Wahaj Ansari — Web Developer & SEO Specialist",
    description:
      "Skills, experience and background of Wahaj Ansari — web developer and SEO specialist based in Karachi, Pakistan.",
    images: [{ url: "/img/og-image.jpg", width: 1200, height: 630, alt: "About Wahaj Ansari" }],
  },
};

const aboutFaqs = [
  {
    question: "What technologies does Wahaj Ansari specialise in?",
    answer:
      "Wahaj Ansari specialises in Next.js, React, TypeScript, WordPress, Shopify, and technical SEO including on-page optimisation, site audits and local SEO.",
  },
  {
    question: "How many years of experience does Wahaj Ansari have?",
    answer:
      "Wahaj Ansari has several years of professional experience delivering websites and SEO projects for clients across various industries including healthcare, e-commerce, SaaS and professional services.",
  },
  {
    question: "Does Wahaj Ansari work with small businesses?",
    answer:
      "Yes. Wahaj Ansari works with businesses of all sizes, from startups and small local businesses to growing companies that need custom web development or SEO support.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <JsonLd schema={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "About", href: "/about" }])} />
      <JsonLd schema={faqSchema(aboutFaqs)} />
      <AboutHero />
      <hr className="separator" />
      <Skills />
      <hr className="separator mt-1" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Reveal delay={0.06}>
              <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
                Experience <span>&</span> Education
              </h3>
            </Reveal>
          </div>
          <Experience />
          <Education />
        </div>
      </div>
      <hr className="separator mt-1" />
      <Hobbies />
    </main>
  );
}
