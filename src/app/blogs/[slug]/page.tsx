"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { blogs } from "@/lib/data"
import { findBlogBySlug } from "@/lib/utils"

export default function BlogPage() {
  const params = useParams()
  const slug = params.slug
  const blog = findBlogBySlug(blogs, slug)

  if (!blog) {
    return (
      <div className="min-h-screen  text-white flex items-center justify-center flex-col p-4">
        <h1 className="text-3xl font-bold mb-4">Blog not found</h1>
        <p className="mb-6">The blog post you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/blogs"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
        >
          <ArrowLeft size={16} />
          Back to Blogs
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen  text-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link href="/blogs" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8">
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

        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-2xl font-bold mb-4">Share this article</h3>
          <div className="flex gap-4">
            <button className="bg-[#1877f2] hover:bg-[#166fe5] p-3 rounded-full">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="bg-[#1da1f2] hover:bg-[#1a94da] p-3 rounded-full">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="bg-[#0a66c2] hover:bg-[#004182] p-3 rounded-full">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M6 9H2V21H6V9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

