import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "../components/shared/SectionHeader";
import { PriceCard } from "../components/service/PriceCard";
import { services, pricingPlans } from "../constants/data";
import ServiceCTA from "../components/service/ServiceCTA";

const ServicesPage = () => {
  return (
    <div className="min-h-screen text-[#1D1D1F]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto relative">
          {/* Purple gradient background effect */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-200/30 rounded-full blur-[100px]"></div>
          </div>

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 bg-white border border-pink-100 text-pink-500 px-4 py-1.5 rounded-full text-[13px] font-bold shadow-sm mb-8"
          >
            <span>💼</span> Our Services
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Growth solutions for your{" "}
            <span className="text-pink-500">Business.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto"
          >
            We provide specialized technical and creative services designed to
            scale your digital presence and drive measurable results.
          </motion.p>
        </div>
      </section>

      {/* Individual service blocks */}
      <section className="py-16 px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="What We Offer"
            title="Comprehensive Digital Solutions"
            description="From web development to digital marketing, we cover all aspects of your online presence."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {services.map((s, i) => (
              <div
                key={i}
                className="flex gap-6 p-8 bg-white rounded-[32px] shadow-sm border border-gray-100 items-start hover:shadow-md transition-shadow"
              >
                <div className={`p-4 rounded-2xl ${s.color}`}>{s.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                  <button className="flex items-center gap-2 text-pink-500 font-bold hover:gap-3 transition-all">
                    Learn more <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages / pricing options */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Pricing"
            title="Flexible Packages"
            description="Choose the right plan that fits your growth stage. All plans include our core services with varying levels of support and features."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {pricingPlans.map((plan, i) => (
              <PriceCard key={i} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-action */}
      <ServiceCTA />
    </div>
  );
};

export default ServicesPage;
