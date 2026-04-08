import CTA from "../components/home/CTA";
import BlogCard from "../components/blog/BlogCard";
import { allBlogPosts } from "../constants/data";

const BlogPage = () => {
  return (
    <div className="min-h-screen text-[#1D1D1F]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Insights & <span className="text-pink-500">Resources</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
            Expert tips, industry insights, and practical guides to help you
            succeed in the digital world.
          </p>
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
