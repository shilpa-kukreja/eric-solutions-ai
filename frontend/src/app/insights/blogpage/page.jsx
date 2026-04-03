"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function BlogsPage() {

  const [blogs, setBlogs] = useState([]);

  const API = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/list`; // change if needed

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(API);
      setBlogs(res.data.blogs);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="relative w-full pt-20 mt-19">
        <img
          src={"/blog/banner.png"}
          alt="image"
          className="w-full h-full object-cover"
        />
      </div>
      <section className="py-12 px-6  bg-white ">

        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">

            <h1 className="text-3xl md:text-4xl font-bold text-black">
              Latest <span className="">Blogs</span>
            </h1>

            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              Explore insights, trends, and expert knowledge from our latest articles.
            </p>

          </div>

          {/* Blog Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {blogs.map((blog, index) => (

              <motion.div
                key={blog._id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300"
              >

                {/* Blog Image */}
                <div className="w-full h-60 bg-gray-100 flex items-center justify-center overflow-hidden rounded-lg border border-gray-200">

                  <img
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${blog.blogImg.url}`}
                    alt={blog.blogName}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-500"
                  />

                </div>

                {/* Blog Content */}
                <div className="p-6">

                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(blog.blogDate).toLocaleDateString()}
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {blog.blogName}
                  </h3>

                  <p className="text-gray-600 text-sm line-clamp-3 mb-5" dangerouslySetInnerHTML={{
                    __html: blog.blogDetail,
                  }}>
                  </p>

                  <Link
                    href={`/blog/${blog.slug}`}
                    className="text-white font-medium hover:underline bg-blue-900 hover:bg-[#0f2777] rounded-md p-3 "
                  >
                    Read More →
                  </Link>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>
      <Footer />
    </>

  );
}