import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import SectionHeader from "../shared/SectionHeader";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = ({
  testimonials,
  badge = "Success Stories",
  title = "Trusted by the best teams.",
  description = "We take pride in delivering excellence. See what our global clients have to say about their journey with Kodawave.",
}) => {
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

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <SectionHeader badge={badge} title={title} description={description} />

        {/* --- Swiper Carousel --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            loopAdditionalSlides={2}
            centeredSlides={false}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={800}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="testimonial-swiper pb-16"
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="h-full p-8 bg-[#F9FAFB] border border-gray-200/50 rounded-[32px] flex flex-col gap-5 shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className="flex gap-1 text-amber-400 text-[10px]">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>

                  <p className="text-gray-600 text-[15px] leading-relaxed italic font-medium">
                    "{item.text || item.content}"
                  </p>

                  <div className="flex items-center gap-3 pt-5 border-t border-gray-100 mt-auto">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 rounded-full object-cover shadow-sm border border-gray-100 group-hover:scale-110 transition-transform"
                      />
                    ) : (
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
                        {item.avatar || "👤"}
                      </div>
                    )}
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
        .testimonial-swiper {
          overflow: hidden;
          padding: 0 2px;
        }
        .testimonial-swiper .swiper-wrapper {
          align-items: stretch;
        }
        .testimonial-swiper .swiper-slide {
          height: auto !important;
          display: flex;
        }
        .testimonial-swiper .swiper-pagination {
          position: relative;
          margin-top: 30px;
          text-align: center;
        }
        .testimonial-swiper .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
          width: 8px;
          height: 8px;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #ec4899 !important;
          width: 24px;
          border-radius: 10px;
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
