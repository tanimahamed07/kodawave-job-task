const ContactCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #6941C6 0px, #6941C6 1px, transparent 0, transparent 40px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div
          className="rounded-[40px] p-12 md:p-20 relative overflow-hidden text-center"
          style={{
            background:
              "linear-gradient(160deg, #FEFCE8 0%, #FFFDF5 40%, #F5F3FF 100%)",
            border: "1.5px solid #DDD6FE",
          }}
        >
          {/* Top glow */}
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-purple-300 to-transparent"></div>

          {/* Badge */}
          <div className="flex justify-center mb-7">
            <div className="inline-flex items-center gap-2 bg-white border border-pink-100 text-pink-500 px-4 py-1.5 rounded-full text-[13px] font-bold shadow-sm">
              <span>💬</span> Let's Talk
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-[52px] font-bold tracking-tighter text-gray-950 text-center leading-[1.08] mb-5">
            Have a project in mind? <br className="hidden md:block" />
            <span className="bg-linear-to-r from-gray-900 via-pink-500 to-gray-900 bg-clip-text text-transparent">
              Let's make it happen!
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-[17px] text-center leading-relaxed mb-11">
            Whether you need a consultation, have questions about our services,
            or want to discuss your next big idea, we're here to help. Get in
            touch and let's create something amazing together.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gray-950 hover:bg-black text-white px-10 py-[14px] rounded-full font-semibold text-sm tracking-wide transition-all duration-300 flex items-center gap-2 group">
              Book a Free Consultation
              <span className="group-hover:rotate-45 transition-transform">
                →
              </span>
            </button>

            <button className="text-gray-700 hover:text-gray-900 font-semibold text-sm flex items-center gap-3 group px-6 py-[14px] transition-colors">
              Send us a message
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Bottom glow */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-purple-300 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
