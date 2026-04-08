import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";
import { PriceCard } from "../service/PriceCard";
import { services, pricingPlans } from "../../constants/data";
import ServiceCTA from "../service/ServiceCTA";

const ServicesSection = () => {
  return (
    <div id="services" className="text-[#1D1D1F]">
      <section className="pt-16 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Growth solutions for your Business."
            titleHighlight="Business."
            description="We provide specialized technical and creative services designed to scale your digital presence."
          />
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
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
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Flexible Packages"
            description="Choose the right plan that fits your growth stage."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, i) => (
              <PriceCard key={i} {...plan} />
            ))}
          </div>
        </div>
        <ServiceCTA></ServiceCTA>
      </section>
    </div>
  );
};

export default ServicesSection;
