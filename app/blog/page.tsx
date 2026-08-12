import type { Metadata } from "next";
import BlogGrid from "@/components/blog/BlogGrid/BlogGrid";
import { Reveal } from "@/components/motion";
import JsonLd from "@/components/common/JsonLd/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

const SITE_URL = "https://wahaj.pk";

export const metadata: Metadata = {
  title: "Blog — Web Development & SEO Insights",
  description:
    "Articles on web development, SEO strategy, WordPress, Next.js and Shopify by Wahaj Ansari. Practical guides for businesses looking to improve their online presence.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    url: `${SITE_URL}/blog`,
    title: "Blog — Web Development & SEO Insights by Wahaj Ansari",
    description:
      "Practical articles on web development, SEO, WordPress, Next.js and Shopify by Wahaj Ansari.",
    images: [{ url: "/img/og-image.jpg", width: 1200, height: 630, alt: "Wahaj Ansari Blog" }],
  },
};

type BlogSearchParams = Promise<{ page?: string }>;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: BlogSearchParams;
}) {
  const { page: pageParam } = await searchParams;
  const parsed = parseInt(pageParam ?? "1", 10);
  const currentPage = Number.isFinite(parsed) && parsed >= 1 ? parsed : 1;

  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }])} />
      <section className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
        <Reveal className="position-relative" y={14}>
          <h1>
            my <span>blog</span>
          </h1>
          <span className="title-bg">posts</span>
        </Reveal>
      </section>

      <main className="ib-main-content">
        <BlogGrid currentPage={currentPage} />
      </main>
    </>
  );
}
