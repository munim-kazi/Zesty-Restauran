import Reveal from "./Reveal";
import Subtitle from "./Subtitle";

export default function Catering() {
  return (
    <div className="content">
      <div className="block-center">
        <Reveal>
          <Subtitle centered>WEDDINGS &amp; EVENTS</Subtitle>
        </Reveal>
        <Reveal delay={100}>
          <h2>Catering For Your WEDDINGS &amp; EVENTS</h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="paragraph">
            Duis sed quam egestas consectetur lacus, massa. Ipsum duis sit quis
            consectetur viverra porttitor elit magna. Lacu
          </p>
        </Reveal>
        <Reveal delay={300}>
          <a href="/contact" className="button-accent">
            book a catering
          </a>
        </Reveal>
      </div>
    </div>
  );
}
