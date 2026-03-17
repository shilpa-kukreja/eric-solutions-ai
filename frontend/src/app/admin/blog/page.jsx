"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaCloudUploadAlt, FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function AddBlog() {

  const router = useRouter();

  const [formData, setFormData] = useState({
    blogName: "",
    blogDetail: "",
    slug: "",
    blogDate: new Date().toISOString().split("T")[0],
    blogImg: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    const { name, value, files } = e.target;

    if (name === "blogImg") {

      const file = files[0];

      setFormData((prev) => ({ ...prev, blogImg: file }));
      setImagePreview(URL.createObjectURL(file));

    } 
    else if (name === "blogName") {

      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");

      setFormData((prev) => ({
        ...prev,
        blogName: value,
        slug
      }));

    } 
    else {

      setFormData((prev) => ({ ...prev, [name]: value }));

    }
  };

  const removeImage = () => {
    setImagePreview(null);
    setFormData(prev => ({ ...prev, blogImg: null }));
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const payload = new FormData();

    payload.append("blogName", formData.blogName);
    payload.append("blogDetail", formData.blogDetail);
    payload.append("slug", formData.slug);
    payload.append("blogDate", formData.blogDate);

    if (formData.blogImg) payload.append("blogImg", formData.blogImg);

    try {

      setLoading(true);

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/add`,
        payload
      );

      router.push("/admin/bloglist");

      toast.success(res.data.message);


    } catch (err) {

      toast.error("Failed to add blog");

    } finally {

      setLoading(false);

    }

  };

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">

      <div className=" mx-auto bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-2xl md:text-3xl font-bold mb-8">
          Add Blog
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* IMAGE UPLOAD SECTION */}

         <div>
  <label className="font-medium text-gray-700 mb-2 block">
    Blog Image
  </label>

  {!imagePreview ? (
    <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-10 cursor-pointer hover:border-blue-500 transition">
      <FaCloudUploadAlt className="text-4xl text-gray-400 mb-3" />
      <p className="text-gray-500">Click to upload image</p>

      <input
        type="file"
        name="blogImg"
        onChange={handleChange}
        className="hidden"
      />
    </label>
  ) : (
    <div className="flex items-start gap-3">
      <img
        src={imagePreview}
        className="w-70 max-h-72 object-cover rounded-lg border ml-150"
      />

      <button
        type="button"
        onClick={removeImage}
        className="bg-red-500 text-white p-2 rounded-full shadow hover:bg-red-600 h-fit"
      >
        <FaTrash size={14} />
      </button>
    </div>
  )}
</div>

          {/* BLOG TITLE */}

          <div>
            <label className="font-medium text-gray-700 mb-2 block">
              Blog Title
            </label>

            <input
              type="text"
              name="blogName"
              value={formData.blogName}
              onChange={handleChange}
              placeholder="Enter blog title"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* SLUG */}

          <div>
            <label className="font-medium text-gray-700 mb-2 block">
              Slug
            </label>

            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              placeholder="Blog slug"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* BLOG CONTENT */}

          <div>
            <label className="font-medium text-gray-700 mb-2 block">
              Blog Content
            </label>

            <div className="border rounded-lg overflow-hidden">
              <CKEditor
                editor={ClassicEditor}
                data={formData.blogDetail}
                onChange={(event, editor) => {
                  setFormData(prev => ({
                    ...prev,
                    blogDetail: editor.getData()
                  }))
                }}
              />
            </div>
          </div>

          {/* BLOG DATE */}

          <div>
            <label className="font-medium text-gray-700 mb-2 block">
              Blog Date
            </label>

            <input
              type="date"
              name="blogDate"
              value={formData.blogDate}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-3 rounded-lg"
            />
          </div>

          {/* SUBMIT BUTTON */}

          <button
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {loading ? "Saving..." : "Add Blog"}
          </button>

        </form>

      </div>

    </div>
  );
}