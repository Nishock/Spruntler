import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to create URL-friendly slugs from titles
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

// Function to find a blog by its slug
export function findBlogBySlug(blogs: Blog[], slug: string) {
  return blogs.find((blog) => slugify(blog.title) === slug);
}

// Blog interface definition
export interface Blog {
  title: string;
  description: string;
  author: string;
  image: string;
  date: string;
  month: string;
  year: string;
  content?: string;
}