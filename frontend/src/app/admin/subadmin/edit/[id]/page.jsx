"use client";

import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { FaCloudUploadAlt, FaTrash } from "react-icons/fa";

export default function EditSubAdminPage() {
  const { id } = useParams();
  const router = useRouter();
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
  const [fetching, setFetching] = useState(true);

  // 🔥 FETCH EXISTING DATA
  const fetchSubAdmin = async () => {
    try {
      const token = localStorage.getItem("adminToken");

      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/subadmin/single/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        const data = res.data.subadmin;

        setForm({
          fullName: data.fullName,
          email: data.email,
          password: "", // keep empty
          number: data.number,
          gender: data.gender,
          profileImg: data.profileImg,
          status: data.status,
        });

        // 🔥 existing image preview
        setPreview(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/${data.profileImg}`
        );
      }
    } catch (err) {
      console.log(err);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    if (id) fetchSubAdmin();
  }, [id]);

  // INPUT CHANGE
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

  // SUBMIT UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData();

      Object.keys(form).forEach((key) => {
        if (form[key]) {
          formData.append(key, form[key]);
        }
      });

      const token = localStorage.getItem("adminToken");

      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/subadmin/update/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        alert("Updated successfully");
        router.push("/admin/subadmin/list");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Error updating");
    } finally {
      setLoading(false);
    }
  };

  if (fetching) return <div className="p-6">Loading...</div>;

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex justify-center items-center">
      
      <div className="w-full max-w-8xl bg-white rounded-2xl shadow-xl p-8">

        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">
            Edit Sub Admin
          </h1>
          <p className="text-sm text-gray-500">
            Update sub admin details
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

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
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-black"
              />
            </div>

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
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">
                Password (leave blank to keep same)
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-black"
              />
            </div>

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
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">
                Gender
              </label>
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">
                Status
              </label>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

          </div>

          {/* IMAGE */}
          <div>
            <label className="text-sm font-medium mb-2 block">
              Profile Image
            </label>

            <div
              onClick={() => fileInputRef.current.click()}
              className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex justify-center items-center cursor-pointer relative"
            >
              {!preview ? (
                <FaCloudUploadAlt size={40} className="text-gray-400" />
              ) : (
                <div className="relative">
                  <img
                    src={preview}
                    className="w-32 h-32 object-cover rounded-lg"
                  />

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeImage();
                    }}
                    className="absolute -top-2 -right-2 bg-red-500 text-white p-2 rounded-full"
                  >
                    <FaTrash size={12} />
                  </button>
                </div>
              )}

              <input
                type="file"
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
            className={`w-full py-3 rounded-lg text-white ${
              loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Updating..." : "Update Sub Admin"}
          </button>
        </form>
      </div>
    </div>
  );
}