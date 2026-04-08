import { motion } from "framer-motion";
import { Target, Users, Award, TrendingUp } from "lucide-react";
import CTA from "../components/home/CTA";
import Testimonials from "../components/home/Testimonials";

const stats = [
  { label: "Projects Completed", value: "500+" },
  { label: "Happy Clients", value: "200+" },
  { label: "Team Members", value: "25+" },
  { label: "Years Experience", value: "10+" },
];

const values = [
  {
    icon: <Target className="text-blue-500" size={32} />,
    title: "Our Vision",
    desc: "To empower businesses with cutting-edge digital solutions that drive measurable growth and lasting success.",
  },
  {
    icon: <Users className="text-purple-500" size={32} />,
    title: "Our Team",
    desc: "A diverse group of designers, developers, and strategists passionate about creating exceptional digital experiences.",
  },
  {
    icon: <Award className="text-pink-500" size={32} />,
    title: "Our Expertise",
    desc: "Specialized in React, Next.js, SEO optimization, and performance-driven advertising campaigns.",
  },
  {
    icon: <TrendingUp className="text-orange-500" size={32} />,
    title: "Our Approach",
    desc: "Data-driven strategies combined with creative excellence to deliver results that exceed expectations.",
  },
];

const AboutPage = () => {
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
            <span>🎯</span> Our Story
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-semibold tracking-[-0.04em] leading-[1.1] mb-8"
          >
            Building digital <span className="text-pink-500">excellence</span>{" "}
            together.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 mx-auto mb-10 leading-relaxed max-w-2xl"
          >
            We're a team of passionate creators, strategists, and technologists
            dedicated to transforming businesses through innovative digital
            solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-5"
          >
            <button className="bg-white border border-gray-200 px-8 py-3.5 rounded-full text-sm font-bold shadow-sm hover:shadow-md active:scale-95 transition-all">
              Meet the team
            </button>
            <button className="flex items-center gap-2 text-sm font-bold hover:translate-x-1 transition-transform">
              Our values <span>→</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-pink-500 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-pink-500 font-bold text-sm uppercase tracking-widest"
            >
              Who We Are
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-3 mb-4">
              Our Story & Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 p-8 bg-white rounded-[32px] shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="p-4 bg-gray-50 rounded-2xl h-fit">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CTA />
    </div>
  );
};

export default AboutPage;
