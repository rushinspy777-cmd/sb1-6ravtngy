import { Navigation } from "../../components/Navigation";
import { Hero } from "../../components/Hero";
import { FeaturedCollections } from "../../components/FeaturedCollections";
import { BestSellers } from "../../components/BestSellers";
import { About } from "../../components/About";
import { Inspiration } from "../../components/Inspiration";
import { Testimonials } from "../../components/Testimonials";
import { Newsletter } from "../../components/Newsletter";
import { Footer } from "../../components/Footer";
import SectionReveal from "../../components/SectionReveal";

export const Homepage = (): JSX.Element => {
  return (
    <div className="bg-[#FDFCFB] w-full min-h-screen">
      <Navigation />
      <Hero />
      <SectionReveal>
        <FeaturedCollections />
      </SectionReveal>
      <SectionReveal>
        <BestSellers />
      </SectionReveal>
      <SectionReveal>
        <About />
      </SectionReveal>
      <SectionReveal>
        <Inspiration />
      </SectionReveal>
      <SectionReveal>
        <Testimonials />
      </SectionReveal>
      <SectionReveal>
        <Newsletter />
      </SectionReveal>
      <Footer />
    </div>
  );
};
