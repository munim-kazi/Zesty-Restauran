import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Catering from "@/components/Catering";
import Slider from "@/components/Slider";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <div className="section">
        <Catering />
        <Slider />
        <Blog />
      </div>
      <Footer />
    </>
  );
}
