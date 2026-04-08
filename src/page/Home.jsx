import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Navbar = () => {
  const { scrollY } = useScroll();

  /** * স্ক্রল অ্যানিমেশন লজিক (০ থেকে ১০০ পিক্সেলের মধ্যে পরিবর্তন হবে)
   */

  // ১. উইডথ পরিবর্তন: শুরুতে ১০০% থেকে কমে ৮০% হবে
  const width = useTransform(scrollY, [0, 100], ["100%", "80%"]);

  // ২. হাইট/প্যাডিং পরিবর্তন: শুরুতে বেশি (২৪ পিক্সেল), পরে কমে (১২ পিক্সেল) হবে যা স্লিম লুক দিবে
  const py = useTransform(scrollY, [0, 100], ["24px", "12px"]);

  // ৩. ব্যাকগ্রাউন্ড: শুরুতে একদম ট্রান্সপারেন্ট, স্ক্রল করলে সাদা (৮০% অপাসিটি)
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.85)"],
  );

  // ৪. বর্ডার: স্ক্রল করলে হালকা বর্ডার আসবে যা ইমেজে দেখা যাচ্ছে
  const border = useTransform(
    scrollY,
    [0, 100],
    ["1px solid rgba(0, 0, 0, 0)", "1px solid rgba(0, 0, 0, 0.08)"],
  );

  // ৫. টপ পজিশন: স্ক্রল করলে উপর থেকে ২০ পিক্সেল নিচে নামবে (Floating look)
  const top = useTransform(scrollY, [0, 100], ["0px", "20px"]);

  return (
    <motion.header
      style={{
        width,
        backgroundColor,
        border,
        top,
        paddingTop: py,
        paddingBottom: py,
        x: "-50%", // স্ক্রিন এর মাঝখানে রাখার জন্য
      }}
      className="fixed left-1/2 z-50 backdrop-blur-md rounded-full px-12 flex items-center justify-center transition-shadow duration-300"
    >
      <nav className="w-full max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-8 bg-[#1D1D1F] rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
            <div className="w-2.5 h-2.5 bg-white rotate-45"></div>
          </div>
          <span className="text-xl font-extrabold tracking-tighter text-[#1D1D1F]">
            Kodawave
          </span>
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex items-center gap-10 text-[14px] font-semibold text-gray-500">
          {["Services", "About", "Blog", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-black transition-colors relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Action Button */}
        <button className="bg-[#1D1D1F] text-white px-6 py-2 rounded-full text-[13px] font-bold hover:bg-black hover:shadow-lg transition-all active:scale-95">
          Start a project
        </button>
      </nav>
    </motion.header>
  );
};

export default Navbar;
