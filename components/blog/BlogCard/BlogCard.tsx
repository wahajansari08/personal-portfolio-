import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion";
import { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <Reveal
      className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30"
      delay={index * 0.05}
    >
      <article className="post-container">
        <div className="post-thumb">
          <Link
            href={`/blog/${post.slug}`}
            className="d-block position-relative overflow-hidden"
          >
            <Image
              src={post.image}
              alt="Blog Post"
              className="img-fluid"
              width={400}
              height={250}
            />
          </Link>
        </div>
        <div className="post-content">
          <div className="entry-header">
            <h3>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
          </div>
          <div className="entry-content open-sans-font">
            <p>{post.excerpt}</p>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
