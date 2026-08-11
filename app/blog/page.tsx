import Image from "next/image";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import LineVertical from "@/components/LineVertical";
import Footer from "@/components/Footer";
import { POSTS } from "@/lib/posts";

export default function BlogPage() {
  return (
    <>
      <div className="section-top">
        <Navbar />
        <div className="grid-hero min-h-45vh">
          <Reveal className="h-full">
            <LineVertical variant="top" />
          </Reveal>
          <div className="block-hero">
            <Reveal delay={100}>
              <h1 className="heading-hero">News &amp; recipes</h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="paragraph-hero margin">
                Tempor in est dictumst purus sit tristique feugiat nam nulla.
                Nunc, pretium odio et massa consequat.
              </p>
            </Reveal>
          </div>
          <Reveal delay={400} className="h-full">
            <LineVertical variant="bottom" />
          </Reveal>
        </div>
      </div>

      <div className="section-first">
        <div className="content">
          <div className="collection-list-wrapper-blog">
            <div className="collection-list-blog">
              {POSTS.map((post) => (
                <Reveal key={post.slug}>
                  <div className="collection-item-blog">
                    <a
                      href={`/post/${post.slug}`}
                      className="link-image-blog"
                      aria-label={post.title}
                    >
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        width={682}
                        height={413}
                        sizes="(max-width: 479px) 90vw, 45vw"
                        className="image-blog-page"
                      />
                    </a>
                    <div className="block-blog-page">
                      <div className="date-blog">{post.date}</div>
                      <a
                        href={`/post/${post.slug}`}
                        className="link-heading-blog"
                      >
                        <h4 className="heading-blog">{post.title}</h4>
                      </a>
                      <p className="paragraph-summary">{post.summary}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <div className="line-space margin">
              <div className="circle" />
              <div className="line-horizontal" />
              <div className="circle" />
              <div className="circle-large center" />
              <div className="circle" />
              <div className="line-horizontal" />
              <div className="circle" />
            </div>
          </Reveal>
        </div>
      </div>

      <Footer />
    </>
  );
}
