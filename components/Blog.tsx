import Image from "next/image";
import Reveal from "./Reveal";
import Subtitle from "./Subtitle";
import { POSTS } from "@/lib/posts";

export default function Blog() {
  return (
    <div className="content">
      <Reveal>
        <div className="line-space">
          <div className="circle" />
          <div className="line-horizontal" />
          <div className="circle" />
          <div className="circle-large center" />
          <div className="circle" />
          <div className="line-horizontal" />
          <div className="circle" />
        </div>
      </Reveal>
      <div className="block-center">
        <Reveal>
          <Subtitle centered>Blog</Subtitle>
        </Reveal>
        <Reveal delay={100}>
          <h2>News &amp; recipes</h2>
        </Reveal>
      </div>
      <div className="collection-list-wrapper">
        <div className="collection-list">
          {POSTS.map((post) => (
            <div key={post.slug} className="collection-item">
              <Reveal>
                <a href={`/post/${post.slug}`} className="link-image-blog">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    width={682}
                    height={413}
                    sizes="(max-width: 767px) 90vw, 30vw"
                    className="image-blog"
                  />
                </a>
              </Reveal>
              <Reveal delay={100}>
                <div className="block-blog">
                  <div className="date-blog">{post.date}</div>
                  <a href={`/post/${post.slug}`} className="link-heading-blog">
                    <h5 className="heading-blog">{post.title}</h5>
                  </a>
                  <p className="paragraph-summary">{post.summary}</p>
                  <a
                    href={`/post/${post.slug}`}
                    className="link-arrow"
                    aria-label="Read more"
                  >
                    <Image
                      src="/icons/arrow.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="arrow"
                    />
                  </a>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
