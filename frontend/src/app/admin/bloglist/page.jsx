"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSearch, FaEdit, FaTrash } from "react-icons/fa";

const ListBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const router = useRouter();

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/list`
      );

      setBlogs(res.data.blogs);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch blogs");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/delete/${id}`,
      );

      toast.success("Blog deleted successfully");

      fetchBlogs();
    } catch (err) {
      console.error("Error deleting blog", err);

      toast.error("Failed to delete blog");
    }
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.blogName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);

  const startIdx = (currentPage - 1) * itemsPerPage;

  const paginatedBlogs = filteredBlogs.slice(
    startIdx,
    startIdx + itemsPerPage
  );

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">

        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          Blogs List
        </h2>

      </div>

      {/* Search */}

      <div className="mb-6 relative w-full md:max-w-md">

        <FaSearch className="absolute left-3 top-3 text-gray-400" />

        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        />

      </div>

      {/* ================= DESKTOP TABLE ================= */}

      <div className="hidden md:block bg-white rounded-xl shadow overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full text-left">

            <thead className="bg-gray-200 border-b text-gray-600 text-sm uppercase tracking-wide">

              <tr>
                <th className="p-4"></th>
                <th className="p-4">Image</th>
                <th className="p-4">Blog Title</th>
                <th className="p-4">Date</th>
                <th className="p-4 text-center">Actions</th>
              </tr>

            </thead>

            <tbody className="divide-y">

              {paginatedBlogs.length > 0 ? (

                paginatedBlogs.map((blog, index) => (

                  <tr key={blog._id} className="hover:bg-gray-50 transition">

                    <td className="p-4 text-gray-600">
                      {startIdx + index + 1}
                    </td>

                    <td className="p-4">

                      <img
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${blog.blogImg.url}`}
                        alt={blog.blogName}
                        className="w-16 h-16 object-cover rounded-lg border"
                      />

                    </td>

                    <td className="p-4 font-medium text-gray-800 max-w-sm truncate">
                      {blog.blogName}
                    </td>

                    <td className="p-4 text-green-600 font-semibold">

                      {new Date(blog.blogDate).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}

                    </td>

                    <td className="p-4 text-center">

                      <div className="flex justify-center gap-3">

                        <button
                          onClick={() =>
                            router.push(`/admin/blog/${blog._id}`)
                          }
                          className="flex items-center gap-2 px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm"
                        >
                          <FaEdit size={12} />
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(blog._id)}
                          className="flex items-center gap-2 px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm"
                        >
                          <FaTrash size={12} />
                          Delete
                        </button>

                      </div>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td colSpan="5" className="text-center py-10 text-gray-500">
                    No blogs found
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

      {/* ================= MOBILE CARDS ================= */}

      <div className="grid md:hidden gap-4">

        {paginatedBlogs.length > 0 ? (

          paginatedBlogs.map((blog) => (

            <div
              key={blog._id}
              className="bg-white rounded-xl shadow p-4 flex gap-4 items-center"
            >

              <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${blog.blogImg.url}`}
                alt={blog.blogName}
                className="w-16 h-16 rounded-lg object-cover"
              />

              <div className="flex-1">

                <h3 className="font-semibold text-gray-800 text-sm line-clamp-2">
                  {blog.blogName}
                </h3>

                <p className="text-green-600 text-xs mt-1 font-medium">
                  {new Date(blog.blogDate).toLocaleDateString("en-GB")}
                </p>

                <div className="flex gap-2 mt-3">

                  <button
                    onClick={() =>
                      router.push(`/addblog/${blog._id}`)
                    }
                    className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white text-xs rounded-md"
                  >
                    <FaEdit size={10} />
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white text-xs rounded-md"
                  >
                    <FaTrash size={10} />
                    Delete
                  </button>

                </div>

              </div>

            </div>

          ))

        ) : (

          <div className="text-center py-10 text-gray-500">
            No blogs found
          </div>

        )}

      </div>

      {/* Pagination */}

      <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4">

        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            currentPage === 1
              ? "bg-gray-200 text-gray-400"
              : "bg-blue-500 text-white"
          }`}
        >
          Previous
        </button>

        <span className="text-gray-600 font-medium text-sm md:text-base">
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-400"
              : "bg-blue-500 text-white"
          }`}
        >
          Next
        </button>

      </div>

    </div>
  );
};

export default ListBlogs;