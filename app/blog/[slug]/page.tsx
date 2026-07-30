import { blogPosts } from "@/data/blog";
import BlogPostContent from "@/components/blog/BlogPostContent/BlogPostContent";
import { Reveal } from "@/components/motion";
import type { Metadata } from "next";

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
  return {
    title: `${post?.title} | Blog`,
    description: post?.excerpt || "Blog post",
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
