"use client";

import { useRef } from "react";
import Link from "next/link";
import { slugify } from "@/lib/utils";
import { blogs } from "@/lib/data";

// Define TypeScript interface for blog data
interface Blog {
  title: string;
  description: string;
  author: string;
  date: string;
  month: string;
  year: string;
  image?: string; // Optional field
}

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { title, description, author, date, month, year, image } = blog;
  const divRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      divRef.current.style.setProperty("--mouse-x", `${x}px`);
      divRef.current.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  // Generate a slug for the blog post URL
  const slug = slugify(title);

  return (
    <article
      ref={divRef}
      onMouseMove={handleMouseMove}
      className="rounded-lg text-white shadow-lg h-full flex flex-col p-4 relative overflow-hidden border border-[#222] hover:shadow-[0_4px_20px_rgba(0,229,255,0.3)] transition-shadow duration-300"
    >
      <div className="relative">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-48 w-full object-cover rounded-t-lg"
        />
        <div className="absolute bottom-2 left-2 text-lg leading-6 px-4 py-2 font-black bg-black opacity-80 rounded-lg">
          {date}
          <br />
          {month}
          <br />
          {year}
        </div>
      </div>
      <div className="flex-grow p-4">
        <p className="font-light text-sm leading-6 mb-2">
          By{" "}
          <a href="#" className="text-blue-400">
            {author}
          </a>
        </p>
        <h4 className="font-medium text-xl mb-2">{title}</h4>
        <p className="opacity-60 mb-4">{description}</p>
        <Link
          href={`/blogs/${slug}`}
          className="bg-transparent hover:bg-blue-600 border border-blue-600 hover:text-white py-2 px-5 rounded transition inline-block"
        >
          Read More
        </Link>
      </div>
    </article>
  );
};

const Blogs = () => {
  return (
    <section className="py-16 md:py-24 text-white overflow-hidden">
      <div className="container px-8 md:px-24 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Spruntler Scoop: Marketing That Hits Different!
          </h2>
          <p className="text-lg font-medium opacity-80 lg:px-12">
            Stay ahead of the curve with expert tips, insane trends, and creative hacks that redefine digital marketing!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog, i) => (
            <div key={i} className="h-full">
              <BlogItem blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
