import Newsletter from "./Newsletter";
import LineVertical from "./LineVertical";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/webflow/" },
  { label: "Facebook", href: "https://www.facebook.com/webflow/" },
  { label: "Twitter", href: "https://twitter.com/webflow" },
];

const QUICK_LINKS = [
  { label: "Licensing", href: "/template-info/licensing" },
  { label: "Style Guide", href: "/template-info/style-guide" },
  { label: "Changelog", href: "/template-info/changelog" },
];

export default function Footer() {
  return (
    <div className="section-footer">
      <div className="content">
        <Newsletter />
        <div className="grid-footer">
          <div className="block-footer">
            <h6 className="heading-footer">Social</h6>
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-footer"
              >
                {link.label.toUpperCase()}
              </a>
            ))}
          </div>
          <LineVertical variant="bottom" />
          <div className="block-footer">
            <h6 className="heading-footer">Quick Links</h6>
            {QUICK_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="link-footer">
                {link.label.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="sub-footer">
        <div className="text-sub-footer">
          Made by <span className="link-sub-footer dynamic">Munim.</span>{" "}
          Powered by <span className="link-sub-footer dynamic">K@zi.</span>
        </div>
      </div>
    </div>
  );
}
