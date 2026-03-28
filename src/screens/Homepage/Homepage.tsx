import { Navigation, CartDrawer, SearchModal } from "../../components/Navigation";
import { Hero } from "../../components/Hero";
import { BestSellers } from "../../components/BestSellers";
import { About } from "../../components/About";
import { Testimonials } from "../../components/Testimonials";
import { Newsletter } from "../../components/Newsletter";
import { Footer } from "../../components/Footer";
import SectionReveal from "../../components/SectionReveal";

export const Homepage = (): JSX.Element => {
  return (
    <div className="bg-[#FDFCFB] w-full min-h-screen">
      <Navigation />
      <CartDrawer />
      <SearchModal />
      <main id="main-content">
        <Hero />
        <SectionReveal>
          <BestSellers />
        </SectionReveal>
        <SectionReveal>
          <About />
        </SectionReveal>
        <SectionReveal>
          <Testimonials />
        </SectionReveal>
        <SectionReveal>
          <Newsletter />
        </SectionReveal>
      </main>
      <Footer />
    </div>
  );
};
