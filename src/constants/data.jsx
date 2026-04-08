import {
  Layout,
  Search,
  Megaphone,
  Calendar,
  Target,
  Users,
  Award,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

// Services data
export const services = [
  {
    title: "Web Development",
    desc: "Crafting high-performance React and Next.js applications tailored to your business needs.",
    icon: <Layout className="text-blue-500" size={32} />,
    color: "bg-blue-50",
  },
  {
    title: "SEO Optimization",
    desc: "Data-driven strategies to boost your search rankings and drive sustainable organic traffic.",
    icon: <Search className="text-purple-500" size={32} />,
    color: "bg-purple-50",
  },
  {
    title: "Online Advertising",
    desc: "High-conversion ad campaigns on Google and Social Media to maximize your marketing ROI.",
    icon: <Megaphone className="text-pink-500" size={32} />,
    color: "bg-pink-50",
  },
  {
    title: "Online Management",
    desc: "Comprehensive booking and management systems to streamline your daily operations.",
    icon: <Calendar className="text-orange-500" size={32} />,
    color: "bg-orange-50",
  },
];

// Pricing plans
export const pricingPlans = [
  {
    plan: "Starter",
    price: "49",
    features: [
      "Basic Web Presence",
      "SEO Audit",
      "5 Keywords",
      "Email Support",
    ],
  },
  {
    plan: "Growth",
    price: "99",
    isPopular: true,
    features: [
      "Custom UI Design",
      "Advanced SEO",
      "20 Keywords",
      "Priority Support",
      "Ads Management",
    ],
  },
  {
    plan: "Premium",
    price: "199",
    features: [
      "Full Stack Solutions",
      "Daily Backups",
      "Unlimited Keywords",
      "24/7 Dedicated Support",
    ],
  },
];

// About stats
export const stats = [
  { label: "Projects Completed", value: "500+" },
  { label: "Happy Clients", value: "200+" },
  { label: "Team Members", value: "25+" },
  { label: "Years Experience", value: "10+" },
];

// About values
export const values = [
  {
    icon: <Target className="text-blue-500" size={32} />,
    title: "Our Vision",
    desc: "To empower businesses with cutting-edge digital solutions that drive measurable growth and lasting success.",
  },
  {
    icon: <Users className="text-purple-500" size={32} />,
    title: "Our Team",
    desc: "A diverse group of designers, developers, and strategists passionate about creating exceptional digital experiences.",
  },
  {
    icon: <Award className="text-pink-500" size={32} />,
    title: "Our Expertise",
    desc: "Specialized in React, Next.js, SEO optimization, and performance-driven advertising campaigns.",
  },
  {
    icon: <TrendingUp className="text-orange-500" size={32} />,
    title: "Our Approach",
    desc: "Data-driven strategies combined with creative excellence to deliver results that exceed expectations.",
  },
];

// Blog posts
export const blogPosts = [
  {
    title: "10 Essential SEO Strategies for 2024",
    excerpt:
      "Discover the latest SEO techniques that will help your website rank higher and attract more organic traffic.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "SEO",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&q=80",
  },
  {
    title: "Why React is Perfect for Modern Web Apps",
    excerpt:
      "Learn why React has become the go-to framework for building scalable, performant web applications.",
    date: "March 10, 2024",
    readTime: "7 min read",
    category: "Development",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
  },
  {
    title: "Maximizing ROI with Google Ads",
    excerpt:
      "Expert tips on creating high-converting ad campaigns that deliver measurable results for your business.",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Advertising",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
];

// Contact info
export const contactInfo = [
  {
    icon: <Mail className="text-blue-500" size={24} />,
    label: "Email",
    value: "hello@kodawave.com",
    link: "mailto:hello@kodawave.com",
  },
  {
    icon: <Phone className="text-purple-500" size={24} />,
    label: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: <MapPin className="text-pink-500" size={24} />,
    label: "Office",
    value: "123 Business St, Tech City, TC 12345",
    link: "#",
  },
];

// Extended blog posts for BlogPage
export const allBlogPosts = [
  {
    title: "10 Essential SEO Strategies for 2024",
    excerpt:
      "Discover the latest SEO techniques that will help your website rank higher and attract more organic traffic.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "SEO",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&q=80",
  },
  {
    title: "Why React is Perfect for Modern Web Apps",
    excerpt:
      "Learn why React has become the go-to framework for building scalable, performant web applications.",
    date: "March 10, 2024",
    readTime: "7 min read",
    category: "Development",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
  },
  {
    title: "Maximizing ROI with Google Ads",
    excerpt:
      "Expert tips on creating high-converting ad campaigns that deliver measurable results for your business.",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Advertising",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    title: "The Future of Web Design Trends",
    excerpt:
      "Explore the emerging design trends that are shaping the future of user experience and interface design.",
    date: "February 28, 2024",
    readTime: "4 min read",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  },
  {
    title: "Building Accessible Websites",
    excerpt:
      "A comprehensive guide to creating inclusive web experiences that work for everyone.",
    date: "February 20, 2024",
    readTime: "8 min read",
    category: "Development",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
  },
  {
    title: "Social Media Marketing Best Practices",
    excerpt:
      "Proven strategies to grow your brand presence and engagement across social media platforms.",
    date: "February 15, 2024",
    readTime: "5 min read",
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
  },
];
