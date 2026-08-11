import Image from "next/image";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import LineVertical from "@/components/LineVertical";
import Footer from "@/components/Footer";

type MenuItem = {
  name: string;
  description: string;
  price: string;
};

type MenuCategory = {
  image: string;
  title: string;
  items: MenuItem[];
};

const MENU: MenuCategory[] = [
  {
    image: "/images/menu_1.avif",
    title: "Lunch",
    items: [
      {
        name: "Volutpat quis tortor.",
        description:
          "Praesent neque, integer a, id turpis cras tellus vulputate fringilla. Habitant elit at neque fringilla rutrum. Cursus et.",
        price: "$29",
      },
      {
        name: "Consequat laoreet.",
        description:
          "Non nec eu vestibulum porttitor. Tortor vel rhoncus adipiscing sagittis risus, vitae volutpat. Auctor aenean tellus.",
        price: "$12",
      },
      {
        name: "In feugiat odio.",
        description:
          "Pretium eros non leo egestas arcu. Integer nunc arcu faucibus fermentum gravida sit ac a sed. Turpis eu, sed arcu lectus vel.",
        price: "$16",
      },
      {
        name: "Sed in viverra lectus.",
        description:
          "Ornare eget commodo congue turpis gravida faucibus lacinia gravida euismod. Aenean blandit ullamcorper sit cursus.",
        price: "$7",
      },
      {
        name: "Diam sapien.",
        description:
          "Fermentum ac eu venenatis, pellentesque mi scelerisque eget facilisi. In ipsum vitae pellentesque malesuada nec.",
        price: "$20",
      },
    ],
  },
  {
    image: "/images/menu_2.avif",
    title: "Dinner",
    items: [
      {
        name: "Ante habitant.",
        description:
          "Consectetur pellentesque elit rhoncus tincidunt id aliquam nibh posuere et. Et ipsum, ac nisl metus lorem enim facilisi.",
        price: "$27",
      },
      {
        name: "Ac, est malesuada.",
        description:
          "Egestas non magnis non ut vel interdum ac faucibus sit. Sed est magna lobortis mauris enim mattis. Non imperdiet.",
        price: "$9",
      },
      {
        name: "Cursus aliquet.",
        description:
          "Eget vitae laoreet vitae morbi ullamcorper id mattis erat praesent. Scelerisque natoque vel velit leo. In mi tortor.",
        price: "$24",
      },
      {
        name: "Nibh libero sodales.",
        description:
          "Suscipit cum ut quam eu ac, urna pellentesque. Pretium tellus sit nibh posuere interdum elementum amet.",
        price: "$10",
      },
      {
        name: "Tellus viverra.",
        description:
          "Tortor ultricies vulputate eu diam. Purus sed mi at donec dictum viverra pellentesque. Orci amet diam elementum.",
        price: "$8",
      },
    ],
  },
  {
    image: "/images/menu_3.avif",
    title: "Seafood",
    items: [
      {
        name: "Adipiscing aliquam.",
        description:
          "Purus sed feugiat neque vulputate. Quisque sit ac ultrices mauris vel elementum consectetur. Tempor, dignissim quam.",
        price: "$21",
      },
      {
        name: "Non placerat platea.",
        description:
          "Ultricies pellentesque aliquet enim scelerisque massa ac nec, blandit eu. Sed molestie elit aliquet in adipiscing aliquam.",
        price: "$29",
      },
      {
        name: "Sapien ac orci augue.",
        description:
          "Sed id aliquam, orci, arcu. Maecenas in odio nunc pulvinar. Eget aliquam, in metus nibh risus, id. Suspendisse diam tristique.",
        price: "$13",
      },
    ],
  },
  {
    image: "/images/menu_4.avif",
    title: "Wine",
    items: [
      {
        name: "Auctor id tortor eget.",
        description:
          "Pellentesque erat ac, sit ut amet. Enim risus libero tortor, mollis lorem magna tincidunt blandit eu. Aliquam iaculis purus blandit in.",
        price: "$170",
      },
      {
        name: "Purus elementum orci.",
        description:
          "Tortor risus sed convallis enim, magna amet consectetur maecenas. Id gravida donec velit scelerisque vivamus.",
        price: "$124",
      },
      {
        name: "Sit non etiam ut dui.",
        description:
          "Nulla blandit egestas euismod velit ultrices. Sit cras mauris sit eros turpis a, ultrices in dolor. Ac lacus, arcu elit et sem ullamcorper.",
        price: "$250",
      },
    ],
  },
];

function MenuDivider() {
  return (
    <div className="line-space">
      <div className="circle" />
      <div className="line-horizontal" />
      <div className="circle" />
      <div className="circle-large center" />
      <div className="circle" />
      <div className="line-horizontal" />
      <div className="circle" />
    </div>
  );
}

export default function MenuPage() {
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
              <h1 className="heading-hero margin">Menu</h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="paragraph-hero margin">
                Pharetra facilisis amet, id sit. At scelerisque lectus
                pharetra. Urna rhoncus amet dignissim pretium.
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
          {MENU.map((category, index) => (
            <div key={category.title} className="menu-category">
              <Reveal>
                <div className="menu">
                  <Image
                    src={category.image}
                    alt={`${category.title} dishes`}
                    width={1424}
                    height={320}
                    sizes="(max-width: 479px) 155vw, 90vw"
                    className="image-menu"
                  />
                  <h3 className="heading-menu">{category.title}</h3>
                </div>
              </Reveal>

              {category.items.map((item, itemIndex) => (
                <Reveal key={item.name} delay={itemIndex * 100} className="w-full">
                  <div
                    className={`grid-menu-item ${
                      itemIndex % 2 === 1 ? "transparent" : ""
                    }`}
                  >
                    <div className="menu-item">{item.name}</div>
                    <p className="menu-paragraph">{item.description}</p>
                    <div className="menu-price">{item.price}</div>
                  </div>
                </Reveal>
              ))}

              {index < MENU.length - 1 && (
                <Reveal delay={category.items.length * 100}>
                  <MenuDivider />
                </Reveal>
              )}
            </div>
          ))}

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
