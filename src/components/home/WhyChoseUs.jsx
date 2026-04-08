import { motion } from "framer-motion";

const WhyChooseUs = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* --- Section Header --- */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="text-pink-500 font-bold text-sm uppercase tracking-widest">
              Why Choose Us
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-gray-950 mt-3 mb-4"
          >
            Built for performance, <br className="hidden md:block" />
            <span>designed for growth.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed"
          >
            We combine technical precision with creative strategy to build
            digital products that don't just look good—they perform.
          </motion.p>
        </div>

        {/* --- Cards Grid --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Card 1: Technical Excellence */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            /* স্ক্রিনশট অনুযায়ী bg-gray-50 এবং border-gray-100/50 সেট করা হয়েছে */
            className="relative p-8 md:p-10 bg-[#F9FAFB] border border-gray-200/50 rounded-[32px] group transition-all duration-500 shadow-sm hover:shadow-xl overflow-hidden flex flex-col justify-between"
          >
            <div className="relative z-10 flex-grow">
              <span className="text-[11px] uppercase tracking-widest text-blue-500 font-bold">
                Our Engineering
              </span>
              <h3 className="text-2xl font-bold mt-3 mb-4 text-gray-950 leading-tight tracking-tight">
                Scalable Solutions <br className="hidden xs:block" /> with React
                & Vite
              </h3>
              <p className="text-gray-500 mb-6 md:mb-8 leading-relaxed text-sm italic">
                "We don't just write code; we architect experiences that handle
                growth seamlessly."
              </p>

              <ul className="space-y-3">
                {[
                  "Clean, maintainable React components",
                  "Lightning-fast Vite-powered performance",
                  "Pixel-perfect responsive implementation",
                ].map((text, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-700 font-medium text-sm"
                  >
                    <div className="flex-shrink-0 bg-white p-1 rounded-full shadow-sm text-blue-500 group-hover:scale-110 transition-transform">
                      <CheckIcon />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="absolute bottom-8 right-8 opacity-10 group-hover:opacity-100 transition-all duration-700 transform group-hover:-translate-y-2">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-500 shadow-sm">
                <code className="font-bold text-xl">{"</>"}</code>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Strategy & Results */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            /* স্ক্রিনশট অনুযায়ী bg-gray-50 এবং border-gray-200/50 সেট করা হয়েছে */
            className="relative p-8 md:p-10 bg-[#F9FAFB] border border-gray-200/50 rounded-[32px] group transition-all duration-500 shadow-sm hover:shadow-xl overflow-hidden flex flex-col justify-between"
          >
            <div className="relative z-10 flex-grow">
              <span className="text-[11px] uppercase tracking-widest text-purple-500 font-bold">
                Our Strategy
              </span>
              <h3 className="text-2xl font-bold mt-3 mb-4 text-gray-950 leading-tight tracking-tight">
                Data-Driven SEO <br className="hidden xs:block" /> & Performance
                Ads
              </h3>
              <p className="text-gray-500 mb-6 md:mb-8 leading-relaxed text-sm italic">
                "Visibility is vanity, conversions are sanity. We focus on the
                metrics that matter."
              </p>

              <ul className="space-y-3">
                {[
                  "ROI-focused advertising campaigns",
                  "Search Engine Optimization that ranks",
                  "Weekly growth & analytics reporting",
                ].map((text, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-700 font-medium text-sm"
                  >
                    <div className="flex-shrink-0 bg-white p-1 rounded-full shadow-sm text-purple-500 group-hover:scale-110 transition-transform">
                      <CheckIcon />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="absolute bottom-8 right-8 opacity-10 group-hover:opacity-100 transition-all duration-700 transform group-hover:-translate-y-2">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-purple-500 shadow-sm">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const CheckIcon = () => (
  <svg
    className="w-3.5 h-3.5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default WhyChooseUs;
