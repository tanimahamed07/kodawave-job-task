import { motion } from "framer-motion";
import { Layout, Search, Megaphone } from "lucide-react";

// সার্ভিস ডাটা অ্যারে
const servicesData = [
  {
    icon: <Layout size={24} className="text-blue-500" />,
    title: "Web Development",
    desc: "High-quality, responsive websites built with modern technologies like React and Next.js.",
  },
  {
    icon: <Search size={24} className="text-purple-500" />,
    title: "SEO Optimization",
    desc: "Improve your search rankings and drive organic traffic to your business with expert SEO.",
  },
  {
    icon: <Megaphone size={24} className="text-pink-500" />,
    title: "Online Advertising",
    desc: "Targeted ad campaigns on Google and Social Media to maximize your ROI.",
  },
];


const ServiceCard = ({ icon, title, desc }) => (
  <motion.div
    whileHover={{ y: -10 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-8 bg-white border border-gray-100 rounded-[32px] shadow-sm hover:shadow-xl transition-all cursor-default"
  >
    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

const Services = () => {
  return (
    <section className="py-24 mt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* হেডার অংশ */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-pink-500 font-bold text-sm uppercase tracking-widest"
          >
            Our Expertise
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-3 mb-4">
            Services we offer
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We guide you throughout the entire process. From creative design
            to technical solutions, our services define industry excellence.
          </p>
        </div>

        {/* গ্রিড এবং ম্যাপিং */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;