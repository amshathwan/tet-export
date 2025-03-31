import { BlogDetails } from "@/component/blogDetails";
import { notFound } from "next/navigation";

// Sample blog data
const blogs = [
  {
    slug: "first-post",
    title: "First Blog Post",
    content: "This is my first post!",
  },
  {
    slug: "second-post",
    title: "Second Blog Post",
    content: "This is my second post!",
  },
];

// Generate static params at build time for each dynamic page
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// Fetch the data for each blog post
export default async function BlogPost({ params }) {
  // Await params
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return notFound(); // Show 404 page if blog is not found
  }

  return <BlogDetails title={blog.title} content={blog.content} />;
}
