import React from "react";
import { motion } from "framer-motion";

const LogoItem = ({ name, icon }) => (
  <div className="flex items-center gap-2 text-xl font-bold text-gray-800 whitespace-nowrap">
    <span>{icon}</span>
    <span className="tracking-tighter">{name}</span>
  </div>
);

const Marquee = () => {
  const logos = [
    { name: "Landify", icon: "⬡" },
    { name: "Flexify", icon: "◈" },
    { name: "Flowboard", icon: "▲" },
    { name: "Agentify", icon: "●" },
    { name: "TodoFusion", icon: "■" },
    { name: "Identify", icon: "❖" },
  ];

  return (
    <section className="py-20 overflow-hidden">
      <p className="text-center text-[14px] text-gray-700 mb-10 tracking-wide uppercase px-6">
        Trusted by 800K+ freelancers and 20K+ teams like
      </p>
      <div className="relative flex overflow-hidden max-w-6xl mx-auto [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          className="flex flex-nowrap gap-20 items-center grayscale pr-20"
        >
          {[...logos, ...logos].map((logo, index) => (
            <LogoItem key={index} name={logo.name} icon={logo.icon} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Marquee;