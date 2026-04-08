import { useState, useEffect } from "react";
// ১. useSpring ইমপোর্ট করুন
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // স্প্রিং কনফিগারেশন (এটি অ্যানিমেশনকে স্মুথ করবে)
  const springConfig = { stiffness: 100, damping: 20, restDelta: 0.001 };

  // ২. ট্র্যান্সফর্ম ভ্যালুগুলোকে useSpring এর মধ্য দিয়ে পাস করুন
  const widthRaw = useTransform(scrollY, [0, 150], ["100%", "60%"]);
  const width = useSpring(widthRaw, springConfig);

  const pyRaw = useTransform(scrollY, [0, 150], ["20px", "8px"]);
  const py = useSpring(pyRaw, springConfig);

  const pxRaw = useTransform(scrollY, [0, 150], ["40px", "20px"]);
  const px = useSpring(pxRaw, springConfig);

  const topRaw = useTransform(scrollY, [0, 150], ["0px", "20px"]);
  const top = useSpring(topRaw, springConfig);

  const scaleRaw = useTransform(scrollY, [0, 150], [1, 0.95]);
  const scale = useSpring(scaleRaw, springConfig);

  // ব্যাকগ্রাউন্ড এবং বর্ডার সরাসরি ব্যবহার করা ভালো (এগুলোতে স্প্রিং প্রয়োজন হয় না সাধারণত)
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"]
  );

  const border = useTransform(
    scrollY,
    [0, 100],
    ["1px solid rgba(0, 0, 0, 0)", "1px solid rgba(0, 0, 0, 0.08)"]
  );

  const shadow = useTransform(
    scrollY,
    [0, 100],
    ["none", "0px 15px 35px rgba(0,0,0,0.05)"]
  );

  // Scroll spy logic (অপরিবর্তিত)
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["services", "about", "blog", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (window.scrollY < 100) setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  }, [location]);

  return (
    <>
      {/* Desktop Navbar */}
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
          x: "-50%", // সেন্টারিং ঠিক রাখার জন্য
        }}
        className="hidden md:flex fixed left-1/2 z-100 rounded-full items-center justify-center pointer-events-auto"
      >
        <nav className="w-full max-w-6xl flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2 cursor-pointer shrink-0">
            <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rotate-45"></div>
            </div>
            <span className="text-lg font-extrabold tracking-tighter text-[#1D1D1F]">
              Kodawave
            </span>
          </a>

          <div className="flex items-center gap-4 text-[13px] font-semibold text-gray-900">
            <Link to={isHome ? "#services" : "/#services"} className={`px-4 py-2 rounded-full transition-all ${activeSection === "services" ? "bg-purple-100/60 text-black" : "hover:bg-gray-50"}`}>Services</Link>
            <Link to={isHome ? "#about" : "/#about"} className={`px-4 py-2 rounded-full transition-all ${activeSection === "about" ? "bg-purple-100/60 text-black" : "hover:bg-gray-50"}`}>About</Link>
            <Link to={isHome ? "#blog" : "/#blog"} className={`px-4 py-2 rounded-full transition-all ${activeSection === "blog" ? "bg-purple-100/60 text-black" : "hover:bg-gray-50"}`}>Blog</Link>
            <Link to={isHome ? "#contact" : "/#contact"} className={`px-4 py-2 rounded-full transition-all ${activeSection === "contact" ? "bg-purple-100/60 text-black" : "hover:bg-gray-50"}`}>Contact</Link>
          </div>

          <motion.button className="bg-[#1D1D1F] text-white px-5 py-2 rounded-full text-[12px] font-bold hover:bg-black transition-all active:scale-95 shadow-sm shrink-0">
            Start a project
          </motion.button>
        </nav>
      </motion.header>

      {/* Mobile Navbar - অপরিবর্তিত */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <nav className="flex items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rotate-45"></div>
            </div>
            <span className="text-lg font-extrabold tracking-tighter text-[#1D1D1F]">Kodawave</span>
          </a>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        {mobileMenuOpen && (
          <div className="bg-white border-t border-gray-200 px-6 py-4 flex flex-col gap-4">
            <Link to={isHome ? "#services" : "/#services"} onClick={() => setMobileMenuOpen(false)} className="font-semibold py-2">Services</Link>
            <Link to={isHome ? "#about" : "/#about"} onClick={() => setMobileMenuOpen(false)} className="font-semibold py-2">About</Link>
            <Link to={isHome ? "#blog" : "/#blog"} onClick={() => setMobileMenuOpen(false)} className="font-semibold py-2">Blog</Link>
            <Link to={isHome ? "#contact" : "/#contact"} onClick={() => setMobileMenuOpen(false)} className="font-semibold py-2">Contact</Link>
            <button className="bg-[#1D1D1F] text-white px-6 py-3 rounded-full text-sm font-bold">Start a project</button>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;