import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Navbar = () => {
  const { scrollY } = useScroll();

  // ১. উইডথ: শুরুতে ১০০% থেকে কমে ৮৫% হবে (ইমেজ অনুযায়ী ৮৫% বেশি প্রিমিয়াম লাগে)
  const width = useTransform(scrollY, [0, 100], ["100%", "85%"]);
  
  // ২. প্যাডিং: স্লিম লুকের জন্য ২৪ পিক্সেল থেকে ১২ পিক্সেল
  const py = useTransform(scrollY, [0, 100], ["24px", "10px"]);
  
  // ৩. ব্যাকগ্রাউন্ড: পিউর ট্রান্সপারেন্ট থেকে গ্লাস-হোয়াইট
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]
  );
  
  // ৪. বর্ডার এবং শ্যাডো: স্ক্রল করলেই দৃশ্যমান হবে
  const border = useTransform(
    scrollY,
    [0, 100],
    ["1px solid rgba(0, 0, 0, 0)", "1px solid rgba(0, 0, 0, 0.05)"]
  );
  const shadow = useTransform(
    scrollY,
    [0, 100],
    ["none", "0px 10px 30px rgba(0,0,0,0.03)"]
  );

  // ৫. টপ পজিশন: স্ক্রল করলে উপর থেকে একটু গ্যাপ তৈরি করবে
  const top = useTransform(scrollY, [0, 100], ["0px", "15px"]);

  return (
    <motion.header
      style={{
        width,
        backgroundColor,
        border,
        boxShadow: shadow,
        top,
        paddingTop: py,
        paddingBottom: py,
        x: "-50%",
      }}
      className="fixed left-1/2 z-[100] backdrop-blur-md rounded-full px-10 flex items-center justify-center pointer-events-auto"
    >
      <nav className="w-full max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-white rotate-45"></div>
          </div>
          <span className="text-xl font-extrabold tracking-tighter text-[#1D1D1F]">
            Kodawave
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-10 text-[14px] font-semibold text-gray-500">
          {["Services", "About", "Blog", "Contact"].map((link) => (
            <a key={link} href="#" className="hover:text-black transition-colors">
              {link}
            </a>
          ))}
        </div>

        {/* Button */}
        <button className="bg-[#1D1D1F] text-white px-6 py-2.5 rounded-full text-[13px] font-bold hover:bg-black transition-all active:scale-95 shadow-sm">
          Start a project
        </button>
      </nav>
    </motion.header>
  );
};

export default Navbar;