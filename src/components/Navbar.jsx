import { useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const springConfig = { stiffness: 100, damping: 20, restDelta: 0.001 };

  // Desktop animations
  const widthRaw = useTransform(scrollY, [0, 150], ["100%", "60%"]);
  const width = useSpring(widthRaw, springConfig);

  const pyRaw = useTransform(scrollY, [0, 150], ["20px", "8px"]);
  const py = useSpring(pyRaw, springConfig);

  const pxRaw = useTransform(scrollY, [0, 150], ["40px", "20px"]);
  const px = useSpring(pxRaw, springConfig);

  const topRaw = useTransform(scrollY, [0, 150], ["20px", "20px"]);
  const top = useSpring(topRaw, springConfig);

  const scaleRaw = useTransform(scrollY, [0, 150], [1, 0.95]);
  const scale = useSpring(scaleRaw, springConfig);

  // Mobile animations
  const mobileWidthRaw = useTransform(
    scrollY,
    [0, 150],
    ["100%", "calc(100% - 32px)"],
  );
  const mobileWidth = useSpring(mobileWidthRaw, springConfig);

  const mobileTopRaw = useTransform(scrollY, [0, 150], ["0px", "16px"]);
  const mobileTop = useSpring(mobileTopRaw, springConfig);

  const mobileBorderRadiusRaw = useTransform(
    scrollY,
    [0, 150],
    ["0px", "9999px"],
  );
  const mobileBorderRadius = useSpring(mobileBorderRadiusRaw, springConfig);

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"],
  );

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

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setMobileMenuOpen(false)}
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
        />
      )}

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
          x: "-50%",
        }}
        className="hidden md:flex fixed left-1/2 z-100 rounded-full items-center justify-center pointer-events-auto"
      >
        <nav className="w-6xl flex items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 cursor-pointer shrink-0"
          >
            <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rotate-45"></div>
            </div>
            <span className="text-lg font-extrabold tracking-tighter text-[#1D1D1F]">
              Kodawave
            </span>
          </Link>

          <div className="flex items-center gap-4 text-[13px] font-semibold text-gray-900">
            <Link
              to="/services"
              className={`hover:text-black transition-all whitespace-nowrap px-4 py-2 rounded-full ${
                isActive("/services")
                  ? "bg-purple-100/60 text-black"
                  : "hover:bg-gray-50"
              }`}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`hover:text-black transition-all whitespace-nowrap px-4 py-2 rounded-full ${
                isActive("/about")
                  ? "bg-purple-100/60 text-black"
                  : "hover:bg-gray-50"
              }`}
            >
              About
            </Link>
            <Link
              to="/blog"
              className={`hover:text-black transition-all whitespace-nowrap px-4 py-2 rounded-full ${
                isActive("/blog")
                  ? "bg-purple-100/60 text-black"
                  : "hover:bg-gray-50"
              }`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className={`hover:text-black transition-all whitespace-nowrap px-4 py-2 rounded-full ${
                isActive("/contact")
                  ? "bg-purple-100/60 text-black"
                  : "hover:bg-gray-50"
              }`}
            >
              Contact
            </Link>
          </div>

          <button className="bg-[#1D1D1F] text-white px-5 py-2 rounded-full text-[12px] font-bold hover:bg-black transition-all active:scale-95 shadow-sm whitespace-nowrap shrink-0">
            Start a project
          </button>
        </nav>
      </motion.header>

      {/* Mobile Navbar */}
      <motion.header
        style={{
          width: mobileWidth,
          top: mobileTop,
          backgroundColor,
          border,
          boxShadow: shadow,
          borderRadius: mobileBorderRadius,
          left: "50%",
          x: "-50%",
        }}
        className="md:hidden fixed z-50"
      >
        <motion.nav
          style={{
            paddingTop: py,
            paddingBottom: py,
            paddingLeft: px,
            paddingRight: px,
          }}
          className="flex items-center justify-between"
        >
          <Link to="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rotate-45"></div>
            </div>
            <span className="text-lg font-extrabold tracking-tighter text-[#1D1D1F]">
              Kodawave
            </span>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.nav>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-gray-200 overflow-hidden"
          >
            <div className="flex flex-col p-4">
              <Link
                to="/services"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-semibold py-3 px-4 rounded-xl transition-all ${
                  isActive("/services")
                    ? "bg-purple-100/60 text-pink-500"
                    : "text-gray-900 hover:bg-gray-50"
                }`}
              >
                Services
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-semibold py-3 px-4 rounded-xl transition-all ${
                  isActive("/about")
                    ? "bg-purple-100/60 text-pink-500"
                    : "text-gray-900 hover:bg-gray-50"
                }`}
              >
                About
              </Link>
              <Link
                to="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-semibold py-3 px-4 rounded-xl transition-all ${
                  isActive("/blog")
                    ? "bg-purple-100/60 text-pink-500"
                    : "text-gray-900 hover:bg-gray-50"
                }`}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-semibold py-3 px-4 rounded-xl transition-all ${
                  isActive("/contact")
                    ? "bg-purple-100/60 text-pink-500"
                    : "text-gray-900 hover:bg-gray-50"
                }`}
              >
                Contact
              </Link>
              <button className="bg-[#1D1D1F] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-black transition-all mt-4">
                Start a project
              </button>
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  );
};

export default Navbar;
