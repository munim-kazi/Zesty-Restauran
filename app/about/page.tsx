import Image from "next/image";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import LineVertical from "@/components/LineVertical";
import Subtitle from "@/components/Subtitle";
import Footer from "@/components/Footer";

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

export default function AboutPage() {
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
              <h1 className="heading-hero">About</h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="paragraph-hero margin">
                Pharetra, purus sed elit dignissim. Pulvinar mi quam phasellus
                id risus vehicula quisque adipiscing.
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
          <div className="grid-about">
            <Reveal className="image-block">
              <Image
                src="/images/img_8.avif"
                alt=""
                width={1086}
                height={1026}
                sizes="91vw"
                className="image"
              />
            </Reveal>
            <Reveal delay={150} className="image-block">
              <Image
                src="/images/img_9.avif"
                alt=""
                width={1050}
                height={1230}
                sizes="91vw"
                className="image shadow"
              />
            </Reveal>
            <Reveal delay={300} className="block-about">
              <h3 className="heading">Cuisine Introduction</h3>
              <p className="paragraph max-w-430">
                Sed tellus porttitor ornare blandit. Nibh felis, id cursus
                tincidunt facilisis amet, vitae rhoncus. Sit vulputate aliquet
                faucibus consectetur.
                <br />
                Blandit lectus.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="section background">
        <div className="content">
          <div className="grid">
            <Reveal className="image-block">
              <Image
                src="/images/img_7.avif"
                alt=""
                width={968}
                height={1113}
                sizes="91vw"
                className="image"
              />
            </Reveal>
            <Reveal delay={200} className="block">
              <h3 className="heading">Executive Chef Milo Newman</h3>
              <p className="paragraph margin">
                Hac a enim, ultricies hac id non arcu ipsum. Sed sem velit cras
                congue a et adipiscing senectus ultrices. Risus rhoncus metus
                eu iaculis turpis a, varius fermentum. Placerat sit libero, sit
                vitae. Elit nunc sit at magna. Praesent etiam vulputate nec sit
                est amet.
                <br />
                <br />
                Eget sit ullamcorper dis pellentesque ut nulla cursus.
                Curabitur quis nec nunc id eget elementum nulla nec. Bibendum
                eget ut dictum felis egestas.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="content">
          <div className="block-center">
            <Reveal>
              <Subtitle centered>Careers</Subtitle>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="heading">A look behind the scenes</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="paragraph">
                Sodales dolor felis, sed in. Faucibus eget libero risus
                elementum magna quam. In tortor, nisl porttitor enim ultrices
                aliquet mauris a feugiat. Fermentum aliquam diam eget elit.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <a href="/contact" className="button-accent">
                JOIN US
              </a>
            </Reveal>
          </div>

          <div className="image-block-careers">
            <Reveal>
              <Image
                src="/images/img_5.avif"
                alt=""
                width={1645}
                height={902}
                sizes="(max-width: 991px) 90vw, 91vw"
                className="image"
              />
            </Reveal>
            <Reveal delay={150} className="image-careers-absolute">
              <Image
                src="/images/img_6.avif"
                alt=""
                width={789}
                height={969}
                sizes="(max-width: 479px) 31vw, (max-width: 767px) 32vw, (max-width: 991px) 31vw, 32vw"
                className="image shadow"
              />
            </Reveal>
          </div>

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
