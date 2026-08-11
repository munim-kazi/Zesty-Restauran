import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Subtitle from "@/components/Subtitle";
import ReservationForm from "@/components/ReservationForm";
import Footer from "@/components/Footer";

const HOURS = [
  { days: "Monday – Thursday", time: "12:00 – 22:00" },
  { days: "Friday – Saturday", time: "12:00 – 23:30" },
  { days: "Sunday", time: "12:00 – 21:00" },
];

export default function ReservationPage() {
  return (
    <>
      <PageHeader eyebrow="Reservation" title="Book a Table">
        <Reveal delay={200}>
          <p className="paragraph-hero">
            We accept reservations up to thirty days in advance. For parties of
            eight or more, please call us directly.
          </p>
        </Reveal>
      </PageHeader>

      <div className="section">
        <div className="content">
          <div className="block-center">
            <Reveal>
              <Subtitle centered>make a reservation</Subtitle>
            </Reveal>
            <Reveal delay={100}>
              <h2>Join us for dinner</h2>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="form-container">
              <ReservationForm />
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

          <div className="block-center">
            <Reveal>
              <Subtitle centered>opening hours</Subtitle>
            </Reveal>
            <Reveal delay={100}>
              <h3>When to visit</h3>
            </Reveal>
          </div>
          <div className="hours-list">
            {HOURS.map((row) => (
              <Reveal key={row.days}>
                <div className="hours-row">
                  <div className="hours-days">{row.days}</div>
                  <div className="hours-time">{row.time}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <div className="image-block reservation-image">
              <Image
                src="/images/interior.jpg"
                alt="The dining room at Zesty"
                width={1920}
                height={1210}
                className="image"
              />
            </div>
          </Reveal>
        </div>
      </div>

      <Footer />
    </>
  );
}
