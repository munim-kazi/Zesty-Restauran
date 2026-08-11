import Navbar from "./Navbar";
import Reveal from "./Reveal";
import LineVertical from "./LineVertical";
import HeroShape from "./HeroShape";

export default function Hero() {
  return (
    <div className="section-hero">
      <link
        rel="preload"
        as="image"
        href="/images/hero.avif"
        media="(max-width: 767px)"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href="/images/hero_2x.avif"
        media="(min-width: 768px)"
        fetchPriority="high"
      />
      <Navbar />

      <div className="grid-hero">
        <Reveal className="h-full">
          <LineVertical variant="top" />
        </Reveal>
        <div className="block-hero">
          <Reveal delay={100}>
            <h1 className="heading-hero">Outstanding European Cuisine</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="paragraph-hero">
              We use only the finest local ingredients available and offer
              seasonal specials throughout the year.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <a href="/reservation" className="button">
              Book a Table
            </a>
          </Reveal>
        </div>
        <Reveal delay={400} className="h-full">
          <LineVertical variant="bottom" />
        </Reveal>
      </div>
      <HeroShape />
    </div>
  );
}
