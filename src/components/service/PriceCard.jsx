import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const PriceCard = ({ plan, price, features, isPopular }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`p-8 rounded-[32px] border ${isPopular ? 'border-pink-500 shadow-xl relative' : 'border-gray-100 shadow-sm'} bg-white`}
  >
    {isPopular && (
      <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">
        Most Popular
      </span>
    )}
    <h3 className="text-xl font-bold mb-2">{plan}</h3>
    <div className="flex items-baseline gap-1 mb-6">
      <span className="text-4xl font-bold">${price}</span>
      <span className="text-gray-500">/month</span>
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
          <Check size={18} className="text-green-500" /> {feature}
        </li>
      ))}
    </ul>
    <button className={`w-full py-4 rounded-xl font-bold transition-all ${isPopular ? 'bg-pink-500 text-white hover:bg-pink-600' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
      Choose Plan
    </button>
  </motion.div>
);