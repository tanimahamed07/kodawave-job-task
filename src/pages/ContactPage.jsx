import { motion } from "framer-motion";
import ContactForm from "../components/contact/ContactForm";
import ContactCTA from "../components/contact/ContactCTA";
import { contactInfo } from "../constants/data";

const ContactPage = () => {
  return (
    <div className="min-h-screen text-[#1D1D1F]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto relative">
          {/* Purple gradient background effect */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-200/30 rounded-full blur-[100px]"></div>
          </div>

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 bg-white border border-pink-100 text-pink-500 px-4 py-1.5 rounded-full text-[13px] font-bold shadow-sm mb-8"
          >
            <span>💬</span> Get In Touch
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Let's start a <span className="text-pink-500">conversation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Have a project in mind? We'd love to hear from you. Get in touch and
            let's build something amazing together.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((info, i) => (
            <a
              key={i}
              href={info.link}
              className="flex items-center gap-4 p-6 bg-white rounded-[24px] shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="p-3 bg-gray-50 rounded-2xl">{info.icon}</div>
              <div>
                <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                <p className="font-bold">{info.value}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Map Section */}
      <section className="py-16 px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-[32px] h-96 overflow-hidden shadow-sm border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9040425160654!2d90.39225431543302!3d23.750903494652447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactCTA />
    </div>
  );
};

export default ContactPage;
