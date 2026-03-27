import { Navigation } from "../../components/Navigation";
import { Hero } from "../../components/Hero";
import { FeaturedCollections } from "../../components/FeaturedCollections";
import { BestSellers } from "../../components/BestSellers";
import { About } from "../../components/About";
import { Inspiration } from "../../components/Inspiration";
import { Testimonials } from "../../components/Testimonials";
import { Newsletter } from "../../components/Newsletter";
import { Footer } from "../../components/Footer";

export const Homepage = (): JSX.Element => {
  return (
    <div className="bg-white w-full">
      <Navigation />
      <Hero />
      <FeaturedCollections />
      <BestSellers />
      <About />
      <Inspiration />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};
