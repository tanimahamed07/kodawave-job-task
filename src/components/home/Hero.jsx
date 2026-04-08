import React from "react";
import { motion } from "framer-motion";

const MemoJiAvatar = ({
  emoji,
  bgColor,
  positionClasses,
  shape = "rounded-2xl",
  delay = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay }}
    className={`absolute ${positionClasses} flex items-center justify-center pointer-events-none md:pointer-events-auto`}
  >
    <div
      className={`w-14 h-14 md:w-16 md:h-16 ${shape} ${bgColor} flex items-center justify-center shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300`}
    >
      <span className="text-2xl md:text-3xl">{emoji}</span>
    </div>
  </motion.div>
);

const Hero = () => {
  return (
    <section className="max-w-4xl mx-auto text-center px-6 relative">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="inline-flex items-center gap-2 bg-white border border-pink-100 text-pink-500 px-4 py-1.5 rounded-full text-[13px] font-bold shadow-sm mb-8"
      >
        <span>🪄</span> Made in Kodawave
      </motion.div>

      <MemoJiAvatar
        emoji="👨‍🎨"
        bgColor="bg-sky-400"
        positionClasses="top-[-40px] left-[-20px] md:left-[-100px]"
        delay={0.2}
      />
      <MemoJiAvatar
        emoji="👩‍💻"
        bgColor="bg-rose-400"
        positionClasses="top-0 right-[-20px] md:right-[-100px]"
        delay={0.3}
      />
      <MemoJiAvatar
        emoji="👲"
        bgColor="bg-amber-400"
        positionClasses="bottom-0 left-[-30px] md:left-[-120px]"
        delay={0.4}
      />
      <MemoJiAvatar
        emoji="🕶️"
        bgColor="bg-cyan-400"
        positionClasses="bottom-[-60px] right-[-20px] md:right-[-80px]"
        delay={0.5}
      />

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-6xl font-semibold tracking-[-0.04em] leading-[1.1] mb-8"
      >
        Grow Your Business in the Digital World
      </motion.h1>

      <motion.p className="text-lg text-gray-500 mx-auto mb-10 leading-relaxed max-w-2xl">
        Kodawave is your trusted digital partner. We take your business to the
        peak of success through web development, SEO, digital marketing, and
        more.
      </motion.p>

      <div className="flex items-center justify-center gap-5">
        <button className="bg-white border border-gray-200 px-8 py-3.5 rounded-full text-sm font-bold shadow-sm hover:shadow-md active:scale-95 transition-all">
          Our work
        </button>
        <button className="flex items-center gap-2 text-sm font-bold hover:translate-x-1 transition-transform">
          Schedule a call <span>→</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
