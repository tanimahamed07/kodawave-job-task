import WhyChoseUs from "../components/home/WhyChoseUs";
import Marquee from "../components/home/Marquee";
import Testimonials from "../components/home/Testimonials";
import Services from "../components/home/Services";
import CTA from "../components/home/CTA";
import Hero from "../components/home/Hero";
import { homeTestimonials } from "../constants/data";

const Home = () => {
  return (
    <div className="min-h-screen text-[#1D1D1F] font-sans selection:bg-pink-100 overflow-x-hidden">
      <main className="relative pt-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-100/50 rounded-full blur-[120px]"></div>
          <div className="absolute top-40 right-1/4 w-72 h-72 bg-blue-100/50 rounded-full blur-[120px]"></div>
        </div>
        <Hero />
        <Services />
        <WhyChoseUs />
        <Marquee />
        <Testimonials
          testimonials={homeTestimonials}
          badge="Success Stories"
          title="Real results from real clients."
          description="See how we've helped businesses achieve their digital goals and drive measurable growth."
        />
        <CTA />
      </main>
    </div>
  );
};

export default Home;
