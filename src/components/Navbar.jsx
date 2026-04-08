import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Navbar = () => {
  const { scrollY } = useScroll();

  // ১. উইডথ: শুরুতে ১০০% থেকে কমে ৬০% হবে (ইমেজ ৫ ও ৮ এর মতো লুক পেতে)
  const width = useTransform(scrollY, [0, 150], ["100%", "50%"]);

  // ২. প্যাডিং: স্ক্রল করলে নেভিবারটি আরও স্লিম হবে
  const py = useTransform(scrollY, [0, 150], ["20px", "8px"]);
  const px = useTransform(scrollY, [0, 150], ["40px", "20px"]);

  // ৩. ব্যাকগ্রাউন্ড: পিউর ট্রান্সপারেন্ট থেকে গ্লাস-হোয়াইট
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 100)"],
  );

  // ৪. বর্ডার এবং শ্যাডো: স্ক্রল করলেই প্রিমিয়াম বর্ডার দেখা যাবে
  const border = useTransform(
    scrollY,
    [0, 100],
    ["1px solid rgba(0, 0, 0, 0)", "1px solid rgba(0, 0, 0, 0.08)"],
  );
  const shadow = useTransform(
    scrollY,
    [0, 100],
    ["none", "0px 15px 35px rgba(0,0,0,0.05)"],
  );

  // ৫. টপ পজিশন ও স্কেল: স্ক্রল করলে সামান্য ছোট হবে
  const top = useTransform(scrollY, [0, 150], ["0px", "20px"]);
  const scale = useTransform(scrollY, [0, 150], [1, 0.95]);

  return (
    <motion.header
      style={{
        width,
        backgroundColor,
        border,
        boxShadow: shadow,
        top,
        scale,
        paddingTop: py,
        paddingBottom: py,
        paddingLeft: px,
        paddingRight: px,
        x: "-50%",
      }}
      className="fixed left-1/2 z-[100] rounded-full flex items-center justify-center pointer-events-auto"
    >
      <nav className="w-6xl flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer flex-shrink-0">
          <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rotate-45"></div>
          </div>
          <span className="text-lg font-extrabold tracking-tighter text-[#1D1D1F]">
            Kodawave
          </span>
        </div>

        {/* Links: স্ক্রল করলে গ্যাপ কিছুটা কমবে */}
        <motion.div className="hidden md:flex items-center gap-14 text-[13px] font-semibold text-gray-900">
          {["Services", "About", "Blog", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-black transition-colors whitespace-nowrap"
            >
              {link}
            </a>
          ))}
        </motion.div>

        {/* Button: স্ক্রল করলে প্যাডিং কিছুটা কমবে */}
        <motion.button className="bg-[#1D1D1F] text-white px-5 py-2 rounded-full text-[12px] font-bold hover:bg-black transition-all active:scale-95 shadow-sm whitespace-nowrap flex-shrink-0">
          Start a project
        </motion.button>
      </nav>
    </motion.header>
  );
};

export default Navbar;
