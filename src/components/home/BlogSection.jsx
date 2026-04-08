import SectionHeader from "../shared/SectionHeader";
import BlogCard from "../blog/BlogCard";
import { blogPosts } from "../../constants/data";

const BlogSection = () => {
  return (
    <div id="blog" className="text-[#1D1D1F] bg-gray-50/50">
      <section className="pt-20 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Insights & Resources"
            titleHighlight="Resources"
            description="Expert tips, industry insights, and practical guides to help you succeed in the digital world."
          />
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <BlogCard key={i} post={post} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogSection;
