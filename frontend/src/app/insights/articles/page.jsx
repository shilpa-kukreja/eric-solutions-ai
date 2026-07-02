"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ArticlePage() {
  const [articles, setArticles] = useState([]);
  const [banners, setBanners] = useState([]);

  const API = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/article/list`;

  useEffect(() => {
    fetchArticles();
  }, []);

  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchArticles = async () => {
    try {
      const res = await axios.get(API);
      setArticles(res.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBanners = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogbanner/active`
    );
    setBanners(res.data);
  };

  return (
    <>
    <Navbar/>
      <div className="relative w-full pt-20 mt-19">
        <img
          src={"/insights/articlebanner.jpg"}
          alt="image"
          className="w-full h-full object-cover"
        />
      
      </div>
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-black">
              Latest <span className="">Articles</span>
            </h1>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              Explore insights, trends, and expert knowledge from our latest articles.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {articles.map((article, index) => (
              <Link
                key={article._id}
                href={`/article/${article.slug}`}
                passHref
                legacyBehavior
              >
                <motion.a
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="block bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer"
                  style={{ textDecoration: "none" }}
                >
                  {/* Article Image */}
                  <div className="w-full bg-gray-100 flex items-center justify-center overflow-hidden rounded-lg border border-gray-200">
                    <img
                      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${article.articleImg.url}`}
                      alt={article.articleName}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  {/* Article Content */}
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">
                      {new Date(article.articleDate)
                        .toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })
                        .replace(/ /g, "-")}
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-1">
                      {article.articleName}
                    </h3>

                    <p
                      className="text-gray-600 text-sm line-clamp-3 mb-5"
                      dangerouslySetInnerHTML={{
                        __html: article.articleDetail,
                      }}
                    ></p>

                    {/* "Read More" as a styled span (no longer a link) */}
                    <span className="text-white font-medium hover:underline bg-blue-900 hover:bg-[#0f2777] rounded-md p-3 inline-block">
                      Read More →
                    </span>
                  </div>
                </motion.a>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}