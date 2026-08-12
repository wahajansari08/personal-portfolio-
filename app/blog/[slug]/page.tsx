import { blogPosts } from "@/data/blog";
import BlogPostContent from "@/components/blog/BlogPostContent/BlogPostContent";
import { Reveal } from "@/components/motion";
import type { Metadata } from "next";
import JsonLd from "@/components/common/JsonLd/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

const SITE_URL = "https://wahaj.pk";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

type BlogPostParams = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: BlogPostParams;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: BlogPostParams;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return <div>Post not found</div>;

  return (
    <>
      <JsonLd schema={articleSchema({ title: post.title, slug: post.slug, excerpt: post.excerpt, image: post.image, datePublished: post.date, tags: post.tags })} />
      <JsonLd schema={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: post.title, href: `/blog/${post.slug}` }])} />
      {/* Page Title Starts */}
      <section className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
        <Reveal className="position-relative" y={14}>
          <h1>
            my <span>blog</span>
          </h1>
          <span className="title-bg">posts</span>
        </Reveal>
      </section>
      {/* Page Title Ends */}

      <main className="ib-main-content">
        <BlogPostContent post={post} />
      </main>
    </>
  );
}
