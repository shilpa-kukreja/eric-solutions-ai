"use client";

import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";

export default function BlogBannerAdmin() {

  const [banners, setBanners] = useState([]);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editId, setEditId] = useState(null);

  const fileInputRef = useRef(null);
  const editFileInputRef = useRef(null);

  const API = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogbanner`;

  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    try {
      const res = await axios.get(`${API}/all`);
      setBanners(res.data);
    } catch {
      toast.error("Failed to load blog banners");
    } finally {
      setLoading(false);
    }
  };

  const activeCount = banners.filter(b => b.isActive).length;

  // Upload
  const uploadBanner = async (e) => {
    e.preventDefault();

    if (!image) return;

    const formData = new FormData();
    formData.append("blogbanner", image);

    try {
      await axios.post(`${API}/upload`, formData);

      toast.success("Banner uploaded");

      setImage(null);
      setPreview(null);

      if (fileInputRef.current) fileInputRef.current.value = "";

      fetchBanners();
    } catch {
      toast.error("Upload failed");
    }
  };

  // Toggle Active
  const toggleBanner = async (id) => {
    try {
      await axios.put(`${API}/toggle/${id}`);
      toast.success("Status updated");
      fetchBanners();
    } catch {
      toast.error("Toggle failed");
    }
  };

  // Delete
  const deleteBanner = async (id) => {
    if (!confirm("Delete this banner?")) return;

    try {
      await axios.delete(`${API}/delete/${id}`);
      toast.success("Deleted");
      fetchBanners();
    } catch {
      toast.error("Delete failed");
    }
  };

  // Edit click
  const handleEditClick = (id) => {
    setEditId(id);
    editFileInputRef.current.click();
  };

  // Edit upload
  const handleEditFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      await axios.put(`${API}/edit/${editId}`, formData);
      toast.success("Updated");
      fetchBanners();
    } catch {
      toast.error("Edit failed");
    }
  };

  return (
    <div className="p-4 md:p-10 bg-gray-50 min-h-screen">

      <ToastContainer />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl md:text-3xl font-bold mb-8"
      >
        Blog Banner Management
      </motion.h1>

      {/* Upload */}
      <div className="bg-white p-6 rounded-xl shadow mb-10">

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Upload Blog Banner</h2>
          <span className="text-sm bg-gray-100 px-3 py-1 rounded">
            Active: {activeCount} / 3
          </span>
        </div>

        <form onSubmit={uploadBanner} className="flex flex-wrap gap-4">

          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files[0];
              if (!file) return;

              setImage(file);
              setPreview(URL.createObjectURL(file));
            }}
          />

          {!image && (
            <button
              type="button"
              onClick={() => fileInputRef.current.click()}
              className="bg-black text-white px-5 py-2 rounded"
            >
              Choose Image
            </button>
          )}

          {image && (
            <>
              <span>{image.name}</span>

              <button
                type="button"
                onClick={() => {
                  setImage(null);
                  setPreview(null);
                  if (fileInputRef.current)
                    fileInputRef.current.value = "";
                }}
                className="text-red-500"
              >
                Remove
              </button>

              <button
                type="submit"
                className="bg-blue-600 text-white px-5 py-2 rounded"
              >
                Upload
              </button>
            </>
          )}
        </form>

        {preview && (
          <img src={preview} className="mt-4 w-72 rounded" />
        )}
      </div>

      {/* Hidden Edit */}
      <input
        ref={editFileInputRef}
        type="file"
        className="hidden"
        onChange={handleEditFile}
      />

      {/* Table */}
      <div className="bg-white p-6 rounded-xl shadow">

        <h2 className="text-xl font-semibold mb-6">
          All Blog Banners
        </h2>

        {loading ? (
          <div className="space-y-3">
            {[1,2,3].map(i => (
              <div key={i} className="h-16 bg-gray-200 animate-pulse rounded"/>
            ))}
          </div>
        ) : (
          <table className="w-full">

            <thead className="border-b">
              <tr>
                <th className="p-3 text-left">Image</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>

              {banners.map((banner) => (

                <tr key={banner._id} className="border-b">

                  <td className="p-3">
                    <img
                      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${banner.image.url}`}
                      className="w-40 h-24 object-cover rounded"
                    />
                  </td>

                  <td className="p-3">

                    <div className="flex items-center gap-3">

                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          banner.isActive
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-200"
                        }`}
                      >
                        {banner.isActive ? "Active" : "Inactive"}
                      </span>

                      <button
                        onClick={() => toggleBanner(banner._id)}
                        className={`w-10 h-5 flex items-center rounded-full p-1 ${
                          banner.isActive
                          ? "bg-green-500"
                          : "bg-gray-400"
                        }`}
                      >
                        <div
                          className={`bg-white w-4 h-4 rounded-full ${
                            banner.isActive ? "translate-x-5" : ""
                          }`}
                        />
                      </button>

                    </div>

                  </td>

                  <td className="p-3 flex gap-3">

                    <button
                      onClick={() => handleEditClick(banner._id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteBanner(banner._id)}
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>
        )}

      </div>

    </div>
  );
}