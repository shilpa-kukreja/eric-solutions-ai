"use client";

import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";

export default function SliderAdmin() {

  const [sliders, setSliders] = useState([]);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editId, setEditId] = useState(null);

  const fileInputRef = useRef(null);
  const editFileInputRef = useRef(null);

  const API = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/sliders`;

  useEffect(() => {
    fetchSliders();
  }, []);

  const fetchSliders = async () => {
    try {
      const res = await axios.get(`${API}/all`);
      setSliders(res.data);
    } catch {
      toast.error("Failed to load sliders");
    } finally {
      setLoading(false);
    }
  };

  const activeCount = sliders.filter(s => s.isActive).length;

  // Upload
  const uploadSlider = async (e) => {
    e.preventDefault();

    if (!image) return;

    const formData = new FormData();
    formData.append("image", image);

    try {

      await axios.post(`${API}/upload`, formData);

      toast.success("Slider uploaded");

      setImage(null);
      setPreview(null);

      if (fileInputRef.current) fileInputRef.current.value = "";

      fetchSliders();

    } catch {
      toast.error("Upload failed");
    }
  };

  // Toggle
  const toggleSlider = async (id) => {
    try {

      await axios.put(`${API}/toggle/${id}`);

      toast.success("Status updated");

      fetchSliders();

    } catch {
      toast.error("Failed to update status");
    }
  };

  // Delete
  const deleteSlider = async (id) => {

    if (!confirm("Delete this slider?")) return;

    try {

      await axios.delete(`${API}/delete/${id}`);

      toast.success("Slider deleted");

      fetchSliders();

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

      toast.success("Image updated");

      fetchSliders();

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
      Slider Management
    </motion.h1>

    {/* Upload Section */}

    <div className="bg-white p-4 md:p-6 rounded-xl shadow mb-10">

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-4">

        <h2 className="text-lg md:text-xl font-semibold">
          Upload Slider Image
        </h2>

        <span className="text-sm bg-gray-100 px-3 py-1 rounded w-fit">
          Active: {activeCount} / 3
        </span>

      </div>

      <form
        onSubmit={uploadSlider}
        className="flex flex-col sm:flex-row sm:items-center gap-4 flex-wrap"
      >

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
            className="bg-gray-900 text-white px-5 py-2 rounded-lg w-fit"
          >
            Choose Image
          </button>
        )}

        {image && (
          <div className="flex flex-wrap items-center gap-3">

            <span className="font-medium text-sm">{image.name}</span>

            <button
              type="button"
              onClick={() => {

                setImage(null);
                setPreview(null);

                if (fileInputRef.current)
                  fileInputRef.current.value = "";

              }}
              className="text-red-500 text-sm"
            >
              Remove
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
              Upload
            </button>

          </div>
        )}

      </form>

      {preview && (
        <img
          src={preview}
          className="mt-4 w-full sm:w-72 rounded-lg shadow"
        />
      )}

    </div>

    {/* Hidden Edit Input */}

    <input
      ref={editFileInputRef}
      type="file"
      className="hidden"
      onChange={handleEditFile}
    />

    {/* ================= DESKTOP TABLE ================= */}

    <div className="hidden md:block bg-white p-6 rounded-xl shadow">

      <h2 className="text-xl font-semibold mb-6">
        All Sliders
      </h2>

      {loading ? (

        <div className="space-y-3">
          {[1,2,3].map(i => (
            <div key={i} className="h-16 bg-gray-200 animate-pulse rounded"/>
          ))}
        </div>

      ) : (

        <table className="w-full">

          <thead className="border-b text-gray-600">
            <tr>
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>

            {sliders.map((slider) => (

              <tr
                key={slider._id}
                className="border-b hover:bg-gray-50 transition"
              >

                <td className="p-3">

                  <img
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${slider.image.url}`}
                    className="w-40 h-24 object-cover rounded"
                  />

                </td>

                <td className="p-3">

                  <div className="flex items-center gap-3">

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        slider.isActive
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {slider.isActive ? "Active" : "Inactive"}
                    </span>

                    <button
                      onClick={() => toggleSlider(slider._id)}
                      className={`w-10 h-5 flex items-center rounded-full p-1 transition ${
                        slider.isActive
                        ? "bg-green-500"
                        : "bg-gray-400"
                      }`}
                    >
                      <div
                        className={`bg-white w-4 h-4 rounded-full shadow transform transition ${
                          slider.isActive
                          ? "translate-x-5"
                          : ""
                        }`}
                      />
                    </button>

                  </div>

                </td>

                <td className="p-3 flex gap-3">

                  <button
                    onClick={() => handleEditClick(slider._id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteSlider(slider._id)}
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

    {/* ================= MOBILE CARDS ================= */}

    <div className="grid md:hidden gap-4">

      {loading ? (

        [1,2,3].map(i => (
          <div key={i} className="h-32 bg-gray-200 animate-pulse rounded-lg"/>
        ))

      ) : (

        sliders.map((slider) => (

          <div
            key={slider._id}
            className="bg-white rounded-xl shadow p-4 space-y-3"
          >

            <img
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${slider.image.url}`}
              className="w-full h-40 object-cover rounded"
            />

            <div className="flex justify-between items-center">

              <span
                className={`px-3 py-1 rounded-full text-xs ${
                  slider.isActive
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-200 text-gray-700"
                }`}
              >
                {slider.isActive ? "Active" : "Inactive"}
              </span>

              <button
                onClick={() => toggleSlider(slider._id)}
                className={`w-10 h-5 flex items-center rounded-full p-1 transition ${
                  slider.isActive
                  ? "bg-green-500"
                  : "bg-gray-400"
                }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow transform transition ${
                    slider.isActive
                    ? "translate-x-5"
                    : ""
                  }`}
                />
              </button>

            </div>

            <div className="flex gap-3">

              <button
                onClick={() => handleEditClick(slider._id)}
                className="flex-1 bg-blue-500 text-white py-2 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => deleteSlider(slider._id)}
                className="flex-1 bg-red-600 text-white py-2 rounded"
              >
                Delete
              </button>

            </div>

          </div>

        ))

      )}

    </div>

  </div>
);
}