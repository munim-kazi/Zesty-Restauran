import Navbar from "./Navbar";
import Reveal from "./Reveal";
import LineVertical from "./LineVertical";
import Subtitle from "./Subtitle";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
};

export default function PageHeader({
  eyebrow,
  title,
  children,
}: PageHeaderProps) {
  return (
    <div className="section-page-hero">
      <Navbar />
      <div className="grid-page-hero">
        <Reveal className="h-full">
          <LineVertical variant="top" />
        </Reveal>
        <div className="block-hero">
          <Reveal>
            <Subtitle centered>{eyebrow}</Subtitle>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="heading-page">{title}</h1>
          </Reveal>
          {children}
        </div>
        <Reveal delay={400} className="h-full">
          <LineVertical variant="bottom" />
        </Reveal>
      </div>
    </div>
  );
}
