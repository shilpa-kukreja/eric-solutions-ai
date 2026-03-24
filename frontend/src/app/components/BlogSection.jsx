"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BlogSection() {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {

    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/fourblogs`);
        setBlogs(res.data.blogs);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogs();

  }, []);

  return (
    <div className="bg-[#0B5EA8] py-12 md:py-20 px-4 md:px-10 text-white">

       <motion.div
            className="text-center mb-12"
            initial={{opacity:0, y:80}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.8, ease:"easeOut"}}
            viewport={{once:false}}>
      
                
                   <h1 className="text-5xl font-bold">
                        Recent Blog from <span className="text-orange-700">Eric Solutions</span>
                   </h1>
                   
                
            </motion.div>
      

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">

        {blogs.map((blog) => (

          <Link key={blog._id} href={`/blog/${blog.slug}`}>

            <div className="flex items-start gap-4 bg-white rounded-md shadow-md p-4 md:p-6 hover:shadow-xl transition ">

              {/* Image */}
              <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${blog.blogImg.url}`}
                alt={blog.blogName}
                className="w-24 h-24 md:w-32 md:h-32 object-cover  rounded-lg border border-gray-200 "
              />

              {/* Content */}
              <div className="flex flex-col">

                <p className="text-gray-600 text-xs sm:text-sm mb-1">
                  {new Date(blog.blogDate).toDateString()}
                </p>

                <h3 className="text-sm sm:text-base text-black md:text-xl font-semibold mb-1 leading-snug">
                  {blog.blogName}
                </h3>

                <p
                  className="text-gray-500 text-xs sm:text-sm md:text-base line-clamp-2 md:line-clamp-3"
                  dangerouslySetInnerHTML={{
                    __html: blog.blogDetail.slice(0, 120) + "..."
                  }}
                />

              </div>

            </div>

          </Link>

        ))}

      </div>

    </div>
  );
}