import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import SectionHeader from "../shared/SectionHeader";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Founder, TechFlow",
    content: "Kodawave transformed our outdated site into a lead machine.",
    avatar: "👨‍💼",
  },
  {
    name: "Sarah Jenkins",
    role: "CEO, Spark Agency",
    content: "The ROI from their SEO strategies is absolutely incredible.",
    avatar: "👩‍💼",
  },
  {
    name: "David Chen",
    role: "Product Manager",
    content: "Technical precision combined with creative strategy. 10/10.",
    avatar: "👲",
  },
  {
    name: "Emma Wilson",
    role: "Store Owner",
    content: "Our sales increased by 40% after the new site launch.",
    avatar: "👩",
  },
  {
    name: "Michael Ross",
    role: "Creative Director",
    content: "Pixel perfect execution and lightning fast performance.",
    avatar: "🕶️",
  },
  {
    name: "Sofia Blake",
    role: "Startup Founder",
    content: "Best decision we made for our digital presence this year.",
    avatar: "👩‍🎨",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)",
          backgroundSize: "10px 10px",
        }}
      ></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <SectionHeader
          badge="Success Stories"
          title="Trusted by the best teams."
          description="We take pride in delivering excellence. See what our global clients have to say about their journey with Kodawave."
        />

        {/* --- Swiper Carousel --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mask-fade-edges"
        >
          {/* !pb-16 নিশ্চিত করবে যে ডটগুলো কার্ডের নিচে পর্যাপ্ত জায়গা পায় */}
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonial-swiper !overflow-visible !pb-16"
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="h-full p-8 bg-[#F9FAFB] border border-gray-200/50 rounded-[32px] flex flex-col gap-5 shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className="flex gap-1 text-amber-400 text-[10px]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>

                  <p className="text-gray-600 text-[15px] leading-relaxed italic font-medium">
                    "{item.content}"
                  </p>

                  <div className="flex items-center gap-3 pt-5 border-t border-gray-100 mt-auto">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
                      {item.avatar}
                    </div>
                    <div className="overflow-hidden text-left">
                      <h4 className="font-bold text-gray-950 text-xs truncate">
                        {item.name}
                      </h4>
                      <p className="text-gray-500 text-[10px] truncate font-medium uppercase tracking-wider">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style jsx global>{`
        .mask-fade-edges {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 5%,
            black 95%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 5%,
            black 95%,
            transparent
          );
        }
        /* Pagination Dots Styling - স্ট্যান্ডার্ড পজিশনিং */
        .testimonial-swiper .swiper-pagination {
          bottom: 0px !important; /* একদম নিচের বর্ডারে সেট করা */
        }
        .testimonial-swiper .swiper-pagination-bullet {
          background: #d1d5db; /* Gray-300 */
          opacity: 1;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #ec4899 !important; /* Pink-500 */
          width: 20px;
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        .swiper-slide {
          height: auto !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
