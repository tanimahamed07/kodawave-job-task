import { motion } from "framer-motion";
import SectionHeader from "../shared/SectionHeader";
import ContactForm from "../contact/ContactForm";
import { contactInfo } from "../../constants/data";

const ContactSection = () => {
  return (
    <div id="contact" className="text-[#1D1D1F]">
      <section className="pt-20 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Let's start a conversation"
            titleHighlight="conversation"
            description="Have a project in mind? We'd love to hear from you. Get in touch and let's build something amazing together."
          />
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((info, i) => (
            <motion.a
              key={i}
              href={info.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 p-6 bg-white rounded-[24px] shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="p-3 bg-gray-50 rounded-2xl">{info.icon}</div>
              <div>
                <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                <p className="font-bold">{info.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default ContactSection;
