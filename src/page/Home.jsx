import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { ServiceCard } from "../components/shared/ServiceCard";
import { Layout, Search, Megaphone } from "lucide-react";
import WhyChoseUs from "../components/home/WhyChoseUs";
import Marquee from "../components/home/Marquee";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";



const Home = () => {
  return (
    <div className="min-h-screen text-[#1D1D1F] font-sans selection:bg-pink-100 overflow-x-hidden">
      <Navbar />
      <main className="relative pt-40 pb-32">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-100/50 rounded-full blur-[120px]"></div>
          <div className="absolute top-40 right-1/4 w-72 h-72 bg-blue-100/50 rounded-full blur-[120px]"></div>
        </div>

        {/* Hero Section */}
        <Hero></Hero>

        {/* Services Section */}
        <Services/>

        <WhyChoseUs />
        <Marquee />
        <Testimonials></Testimonials>
        <CTA />
      </main>
    </div>
  );
};

export default Home;
