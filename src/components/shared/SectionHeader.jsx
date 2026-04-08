import { motion } from "framer-motion";

const SectionHeader = ({
  badge,
  title,
  description,
  titleHighlight, // Optional: word to highlight in pink
  centered = true,
}) => {
  // Split title if highlight is provided
  const renderTitle = () => {
    if (titleHighlight && title.includes(titleHighlight)) {
      const parts = title.split(titleHighlight);
      return (
        <>
          {parts[0]}
          <span className="text-pink-500">{titleHighlight}</span>
          {parts[1]}
        </>
      );
    }
    return title;
  };

  return (
    <div className={`mb-16 md:mb-20 ${centered ? "text-center" : ""}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="text-pink-500 font-bold text-sm uppercase tracking-widest">
            {badge}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold tracking-tight text-gray-950 mt-3 mb-4"
      >
        {renderTitle()}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`text-gray-500 text-base leading-relaxed ${
            centered ? "max-w-xl mx-auto" : "max-w-2xl"
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
