import { motion } from "framer-motion";
import CTA from "../components/home/CTA";
import BlogCard from "../components/blog/BlogCard";
import { allBlogPosts } from "../constants/data";

const BlogPage = () => {
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
            <span>📚</span> Blog & Resources
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Insights & <span className="text-pink-500">Resources</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Expert tips, industry insights, and practical guides to help you
            succeed in the digital world.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allBlogPosts.map((post, i) => (
            <BlogCard key={i} post={post} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
};

export default BlogPage;
