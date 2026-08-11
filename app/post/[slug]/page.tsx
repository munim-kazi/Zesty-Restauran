import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import Subtitle from "@/components/Subtitle";
import Footer from "@/components/Footer";
import LineVertical from "@/components/LineVertical";
import { POSTS, getPost, type PostBlock } from "@/lib/posts";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Zesty`,
    description: post.summary,
  };
}

function PostImage({ block }: { block: Extract<PostBlock, { type: "image" }> }) {
  return (
    <div className="post-image-block">
      <Image
        src={block.src}
        alt={block.alt}
        width={1920}
        height={1210}
        className="image"
      />
    </div>
  );
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <div className="section-page-hero">
        <Navbar />
        <div className="grid-page-hero">
          <Reveal className="h-full">
            <LineVertical variant="top" />
          </Reveal>
          <div className="block-hero">
            <Reveal>
              <Subtitle centered>{post.date}</Subtitle>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="heading-page post-heading">{post.title}</h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="paragraph-hero">{post.summary}</p>
            </Reveal>
          </div>
          <Reveal delay={400} className="h-full">
            <LineVertical variant="bottom" />
          </Reveal>
        </div>
      </div>

      <div className="section">
        <div className="content">
          <div className="post-body">
            <Reveal>
              <div className="image-block post-cover">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  width={1920}
                  height={1210}
                  className="image"
                />
              </div>
            </Reveal>
            {post.content.map((block, index) => (
              <Reveal key={index} delay={index > 0 ? 50 : 0}>
                {block.type === "paragraph" && <p>{block.text}</p>}
                {block.type === "heading" && <h3>{block.text}</h3>}
                {block.type === "quote" && (
                  <blockquote className="post-quote">{block.text}</blockquote>
                )}
                {block.type === "image" && <PostImage block={block} />}
              </Reveal>
            ))}
            <Reveal delay={100}>
              <div className="block-center post-nav">
                <a href="/blog" className="button">
                  Back to Blog
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
