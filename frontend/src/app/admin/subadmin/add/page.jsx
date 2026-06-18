"use client";

import { useState, useRef } from "react";
import axios from "axios";
import { FaCloudUploadAlt, FaTrash } from "react-icons/fa";


export default function CreateSubAdminPage() {
  const fileInputRef = useRef();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    number: "",
    gender: "",
    profileImg: "",
    status: "active",
  });

  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // IMAGE SELECT
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, profileImg: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  // REMOVE IMAGE
  const removeImage = () => {
    setForm({ ...form, profileImg: "" });
    setPreview(null);
    fileInputRef.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData();
      Object.keys(form).forEach((key) => {
        formData.append(key, form[key]);
      });

      const token = localStorage.getItem("adminToken");

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/subadmin/create`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        alert("SubAdmin created successfully");

        setForm({
          fullName: "",
          email: "",
          password: "",
          number: "",
          gender: "",
          profileImg: "",
          status: "active",
        });

        setPreview(null);
      }
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex justify-center items-center">
      
      <div className="w-full max-w-8xl bg-white rounded-2xl shadow-xl p-8">

        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">
            Create Sub Admin
          </h1>
          <p className="text-sm text-gray-500">
            Add a new sub admin to manage your platform
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* FULL NAME */}
            <div>
              <label className="text-sm font-medium mb-1 block">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-black outline-none"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm font-medium mb-1 block">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-black outline-none"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm font-medium mb-1 block">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-black outline-none"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="text-sm font-medium mb-1 block">
                Phone Number
              </label>
              <input
                type="text"
                name="number"
                value={form.number}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-black outline-none"
              />
            </div>

            {/* GENDER */}
            <div>
              <label className="text-sm font-medium mb-1 block">
                Gender
              </label>
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-black outline-none"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* STATUS */}
            <div>
              <label className="text-sm font-medium mb-1 block">
                Status
              </label>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-black outline-none"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>

          {/* 🔥 IMAGE UPLOAD BOX */}
          <div>
            <label className="text-sm font-medium mb-2 block">
              Profile Image
            </label>

            <div
              onClick={() => fileInputRef.current.click()}
              className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:border-black transition relative"
            >
              {!preview ? (
                <>
                  <FaCloudUploadAlt size={40} className="text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">
                    Click to upload image
                  </p>
                </>
              ) : (
                <div className="relative">
                  <img
                    src={preview}
                    className="w-32 h-32 object-cover rounded-lg"
                  />

                  {/* DELETE BUTTON */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeImage();
                    }}
                    className="absolute -top-2 -right-2 bg-red-500 text-white p-2 rounded-full shadow hover:bg-red-600"
                  >
                    <FaTrash size={12} />
                  </button>
                </div>
              )}

              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImage}
                className="hidden"
              />
            </div>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white font-medium transition ${
              loading
                ? "bg-blue-600"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Creating..." : "Create Sub Admin"}
          </button>
        </form>
      </div>
    </div>
  );
}