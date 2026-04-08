import { motion } from "framer-motion";

export const ServiceCard = ({ icon, title, desc }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="p-8 bg-white border border-gray-100 rounded-[32px] shadow-sm hover:shadow-xl transition-all cursor-default"
  >
    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);
