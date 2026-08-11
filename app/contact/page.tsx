import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Subtitle from "@/components/Subtitle";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const CONTACT_INFO = [
  { label: "Address", value: "48 Gansevoort St, New York, NY 10014" },
  { label: "Phone", value: "+1 (212) 555-0184" },
  { label: "Email", value: "hello@zestyrestaurant.com" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Get in Touch">
        <Reveal delay={200}>
          <p className="paragraph-hero">
            Questions, private events, or feedback — we would love to hear from
            you.
          </p>
        </Reveal>
      </PageHeader>

      <div className="section">
        <div className="content">
          <div className="block-center">
            <Reveal>
              <Subtitle centered>contact us</Subtitle>
            </Reveal>
            <Reveal delay={100}>
              <h2>Send us a message</h2>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="form-container">
              <ContactForm />
            </div>
          </Reveal>

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

          <div className="grid-contact">
            {CONTACT_INFO.map((info) => (
              <div key={info.label} className="contact-card">
                <Reveal>
                  <div className="contact-label">{info.label}</div>
                </Reveal>
                <Reveal delay={100}>
                  <p className="contact-value">{info.value}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
