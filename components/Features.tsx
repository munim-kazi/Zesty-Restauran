import Image from "next/image";
import Reveal from "./Reveal";
import Subtitle from "./Subtitle";
import Parallax from "./Parallax";

const FEATURES = [
  {
    number: "/icons/number-1.svg",
    title: "Fresh ingredients",
    text: "Dictumst gravida ac felis ipsum nibh orci mattis. In commodo, commodo quis ac non enim.",
  },
  {
    number: "/icons/number-2.svg",
    title: "Chef's specialties",
    text: "Nisl amet sed aliquam, lacus sed. Feugiat tristique enim cursus et. Arcu nec tempor a tellus et orci.",
  },
  {
    number: "/icons/number-3.svg",
    title: "WEDDINGS & EVENTS",
    text: "Quisque odio arcu curabitur facilisis. Iaculis ullamcorper facilisis augue tristique amet, semper.",
  },
];

export default function Features() {
  return (
    <div className="section background">
      <div className="content">
        <div className="grid-features">
          {FEATURES.map((feature) => (
            <div key={feature.number} className="feature">
              <Reveal>
                <Image
                  src={feature.number}
                  alt=""
                  width={105}
                  height={150}
                  className="number"
                />
              </Reveal>
              <Reveal delay={100}>
                <h4 className="heading-feature">{feature.title}</h4>
              </Reveal>
              <Reveal delay={200}>
                <p className="paragraph-feature">{feature.text}</p>
              </Reveal>
            </div>
          ))}
        </div>

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

        <div className="grid-modular">
          <div className="block-modular modular-heading">
            <Reveal>
              <Subtitle>our kitchen</Subtitle>
            </Reveal>
            <Reveal delay={100}>
              <h2>Prepared just for you, always using fresh ingredients</h2>
            </Reveal>
          </div>
          <div className="block-modular modular-text">
            <Reveal delay={150}>
              <p className="paragraph">
                Sed tellus porttitor ornare blandit. Nibh felis, id cursus
                tincidunt facilisis amet, vitae rhoncus. Sit vulputate aliquet
                faucibus consectetur. Blandit lectus.
              </p>
            </Reveal>
            <Reveal delay={250}>
              <a href="/menu" className="button-accent">
                OUR MENU
              </a>
            </Reveal>
          </div>
          <div className="image-block-modular">
            <Reveal delay={500}>
              <Image
                src="/images/img_4.avif"
                alt=""
                width={752}
                height={628}
                className="image-modular"
              />
            </Reveal>
            <Parallax className="image-modular-absolute">
              <Reveal delay={600}>
                <Image
                  src="/images/img_3.avif"
                  alt=""
                  width={719}
                  height={930}
                  className="image shadow"
                />
              </Reveal>
            </Parallax>
          </div>
        </div>
      </div>
    </div>
  );
}
