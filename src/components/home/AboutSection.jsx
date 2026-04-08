import { motion } from "framer-motion";
import SectionHeader from "../shared/SectionHeader";
import { stats, values } from "../../constants/data";

const AboutSection = () => {
  return (
    <div id="about" className="text-[#1D1D1F]">
      <section className="pt-20 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Building digital excellence together."
            titleHighlight="excellence"
            description="We're a team of passionate creators, strategists, and technologists dedicated to transforming businesses through innovative digital solutions."
          />
        </div>
      </section>

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

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader badge="Who We Are" title="Our Story & Values" />

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
    </div>
  );
};

export default AboutSection;
