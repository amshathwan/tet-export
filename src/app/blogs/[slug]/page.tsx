/* eslint-disable */
import { BlogDetails } from "@/component/blogDetails";
import { notFound } from "next/navigation";

type BlogProps = {
  params: { slug?: string }; // Ensure params.slug is optional to avoid undefined issues
};

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

export default function BlogPost({ params }: any) {
  if (!params?.slug) return notFound(); // Ensure slug is defined

  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) return notFound();

  return <BlogDetails title={blog?.title} content={blog?.content} />;
}

// Generate static pages at build time
export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug })); // Ensure correct slug structure
}
