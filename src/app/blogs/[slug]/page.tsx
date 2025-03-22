"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { blogs } from "@/lib/data";
import { CallToAction } from "@/components/call-to-action";
import SiteFooter from "@/components/site-footer";
import { findBlogBySlug } from "@/lib/utils";

export default function BlogPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug; 
  const blog = findBlogBySlug(blogs, slug as string); 
  if (!blog) {
    return (
      
      <div className="min-h-screen text-white flex items-center justify-center flex-col p-4">

        <h1 className="text-3xl font-bold mb-4">Blog not found</h1>
        <p className="mb-6">
          The blog post you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/blogs"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
        >
          <ArrowLeft size={16} />
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8"
        >
          <ArrowLeft size={16} />
          Back to all blogs
        </Link>

        <div className="relative mb-8">
          <img
            src={blog.image || "/placeholder.svg"}
            alt={blog.title}
            className="w-full h-[400px] object-cover rounded-lg"
          />
          <div className="absolute bottom-4 left-4 text-lg leading-6 px-4 py-2 font-black bg-black opacity-80 rounded-lg">
            {blog.date}
            <br />
            {blog.month}
            <br />
            {blog.year}
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{blog.title}</h1>
          <p className="text-lg opacity-80 mb-4">
            By <span className="text-blue-400">{blog.author}</span>
          </p>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: blog.content || "" }} />
        </div>
         <CallToAction />
          <SiteFooter />
      </div>
    </div>
  );
}
