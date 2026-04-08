import { ArrowRight } from "lucide-react";
import SectionHeader from "../components/shared/SectionHeader";
import { PriceCard } from "../components/service/PriceCard";
import { services, pricingPlans } from "../constants/data";
import ServiceCTA from "../components/service/ServiceCTA";

const ServicesPage = () => {
  return (
    <div className="min-h-screen text-[#1D1D1F]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Growth solutions for your{" "}
            <span className="text-pink-500">Business.</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
            We provide specialized technical and creative services designed to
            scale your digital presence and drive measurable results.
          </p>
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
