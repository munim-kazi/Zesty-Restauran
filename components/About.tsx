import Image from "next/image";
import Reveal from "./Reveal";
import Subtitle from "./Subtitle";
import Parallax from "./Parallax";

export default function About() {
  return (
    <div className="section">
      <div className="content">
        <div className="grid">
          <div className="block">
            <Reveal>
              <Subtitle>About Us</Subtitle>
            </Reveal>
            <Reveal delay={100}>
              <h2>Zesty Gourmet Restaurant</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="paragraph max-w-430">
                Welcome to Zesty Gourmet Restaurant, where European flavors
                meet the finest seasonal ingredients. Every dish is crafted
                with care and served with passion.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <a href="/about" className="button-accent">
                More About Us
              </a>
            </Reveal>
          </div>
          <div className="image-block">
            <Parallax className="image-absolute">
              <Reveal delay={600}>
                <Image
                  src="/images/img_1.avif"
                  alt=""
                  width={565}
                  height={724}
                  className="image shadow"
                />
              </Reveal>
            </Parallax>
            <Reveal delay={500}>
              <Image
                src="/images/img_2.avif"
                alt=""
                width={730}
                height={933}
                className="image"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
