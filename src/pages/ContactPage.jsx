import ContactForm from "../components/contact/ContactForm";
import ContactCTA from "../components/contact/ContactCTA";
import { contactInfo } from "../constants/data";

const ContactPage = () => {
  return (
    <div className="min-h-screen text-[#1D1D1F]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Let's start a <span className="text-pink-500">conversation</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Get in touch and
            let's build something amazing together.
          </p>
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
          <div className="bg-gray-200 rounded-[32px] h-96 flex items-center justify-center">
            <p className="text-gray-500">Map integration placeholder</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactCTA />
    </div>
  );
};

export default ContactPage;
