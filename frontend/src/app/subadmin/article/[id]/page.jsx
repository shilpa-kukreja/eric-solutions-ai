"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FaCloudUploadAlt, FaTrash } from "react-icons/fa";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function EditArticle() {
  const router = useRouter();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    articleName: "",
    articleDetail: "",
    slug: "",
    articleDate: "",
    articleImg: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchArticle();
  }, []);

  const fetchArticle = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/article/get/${id}`,
      );

      const article = data.article;

      setFormData({
        articleName: article.articleName,
        articleDetail: article.articleDetail,
        slug: article.slug,
        articleDate: article.articleDate.split("T")[0],
        articleImg: null,
      });

      setImagePreview(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}${article.articleImg.url}`,
      );
    } catch (err) {
      toast.error("Failed to fetch article");
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "articleImg") {
      const file = files[0];

      setFormData((prev) => ({ ...prev, articleImg: file }));
      setImagePreview(URL.createObjectURL(file));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    setFormData((prev) => ({ ...prev, articleImg: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = new FormData();

    payload.append("articleName", formData.articleName);
    payload.append("articleDetail", formData.articleDetail);
    payload.append("slug", formData.slug);
    payload.append("articleDate", formData.articleDate);

    if (formData.articleImg) payload.append("articleImg", formData.articleImg);

    try {
      setLoading(true);

      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/article/update/${id}`,
        payload,
      );

      toast.success(res.data.message);

      router.push("/subadmin/articlelist");
    } catch (err) {
      toast.error("Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <div className=" mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">Edit Article</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* IMAGE SECTION */}

          <div>
            <label className="font-medium text-gray-700 mb-2 block">
              Article Image
            </label>

            {!imagePreview ? (
              <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-10 cursor-pointer hover:border-blue-500 transition">
                <FaCloudUploadAlt className="text-4xl text-gray-400 mb-3" />
                <p className="text-gray-500">Click to upload image</p>

                <input
                  type="file"
                  name="articleImg"
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

          {/* Article TITLE */}

          <div>
            <label className="font-medium text-gray-700 mb-2 block">
              Article Title
            </label>

            <input
              type="text"
              name="articleName"
              value={formData.articleName}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* SLUG */}

          <div>
            <label className="font-medium text-gray-700 mb-2 block">Slug</label>

            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Article CONTENT */}

          <div>
            <label className="font-medium text-gray-700 mb-2 block">
              Article Content
            </label>

            <div className="border rounded-lg overflow-hidden">
              <CKEditor
                editor={ClassicEditor}
                data={formData.articleDetail}
                onChange={(event, editor) =>
                  setFormData((prev) => ({
                    ...prev,
                    articleDetail: editor.getData(),
                  }))
                }
              />
            </div>
          </div>

          {/* Article DATE */}

          {/* <div>
            <label className="font-medium text-gray-700 mb-2 block">
              Article Date
            </label>

            <input
              type="date"
              name="articleDate"
              value={formData.articleDate}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-3 rounded-lg"
            />
          </div> */}

          <div>
            <label className="font-medium text-gray-700 mb-2 block">
              Article Date
            </label>

            <input
              type="date"
              name="articleDate"
              value={formData.articleDate}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-3 rounded-lg"
            />

            {formData.articleDate && (
             <p className="mt-2 text-sm text-gray-600">
    Selected Date:{" "}
    {new Date(formData.articleDate)
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .replace(/ /g, "-")}
  </p>
            )}
          </div>

          {/* SUBMIT BUTTON */}

          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            {loading ? "Updating..." : "Update Article"}
          </button>
        </form>
      </div>
    </div>
  );
}
