/**
 * JSON-LD structured data helpers for SEO and AEO.
 * Each function returns a plain object ready to be serialised
 * with JSON.stringify() and injected via <script type="application/ld+json">.
 */

const SITE_URL = "https://wahaj.pk";
const PERSON_NAME = "Wahaj Ansari";
const PERSON_IMAGE = `${SITE_URL}/img/img-mobile.jpg`;

// ─── Person ───────────────────────────────────────────────────────────────────
export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: PERSON_NAME,
    url: SITE_URL,
    image: PERSON_IMAGE,
    jobTitle: "Web Developer & SEO Specialist",
    description:
      "Wahaj Ansari is a web developer and SEO specialist based in Karachi, Pakistan, specialising in Next.js, WordPress, Shopify and technical SEO.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressCountry: "PK",
    },
    email: "wahajansari08@gmail.com",
    telephone: "+923162133633",
    sameAs: [
      "https://www.linkedin.com/in/wahajansari",
      "https://github.com/wahajansari",
      "https://twitter.com/wahajansari",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "WordPress",
      "Shopify",
      "Technical SEO",
      "Web Development",
      "TypeScript",
    ],
  };
}

// ─── WebSite ──────────────────────────────────────────────────────────────────
export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: `${PERSON_NAME} — Web Developer & SEO Specialist`,
    description:
      "Portfolio and blog of Wahaj Ansari — web developer and SEO specialist in Karachi, Pakistan.",
    publisher: { "@id": `${SITE_URL}/#person` },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/blog?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

// ─── BreadcrumbList ───────────────────────────────────────────────────────────
export interface BreadcrumbItem {
  name: string;
  href: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

// ─── Article (blog post) ──────────────────────────────────────────────────────
export interface ArticleSchemaInput {
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  tags: string[];
}

export function articleSchema(post: ArticleSchemaInput) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const imageUrl = post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}/#article`,
    headline: post.title,
    description: post.excerpt,
    url,
    image: { "@type": "ImageObject", url: imageUrl, width: 1200, height: 630 },
    datePublished: new Date(post.datePublished).toISOString(),
    dateModified: new Date(post.dateModified ?? post.datePublished).toISOString(),
    author: { "@id": `${SITE_URL}/#person` },
    publisher: { "@id": `${SITE_URL}/#person` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: post.tags.join(", "),
    inLanguage: "en-US",
  };
}

// ─── FAQPage (AEO — answer engine optimisation) ───────────────────────────────
export interface FAQItem {
  question: string;
  answer: string;
}

export function faqSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

// ─── ProfessionalService (for contact / home) ─────────────────────────────────
export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#service`,
    name: `${PERSON_NAME} — Web Development & SEO`,
    url: SITE_URL,
    image: PERSON_IMAGE,
    description:
      "Professional web development and SEO services by Wahaj Ansari. Next.js, WordPress, Shopify websites and technical SEO campaigns for businesses worldwide.",
    provider: { "@id": `${SITE_URL}/#person` },
    areaServed: ["PK", "GB", "US", "AE"],
    serviceType: ["Web Development", "SEO", "WordPress Development", "Shopify Development"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressCountry: "PK",
    },
    telephone: "+923162133633",
    email: "wahajansari08@gmail.com",
    priceRange: "$$",
  };
}
