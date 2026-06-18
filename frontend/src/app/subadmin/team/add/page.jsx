"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FaCloudUploadAlt, FaTrash } from "react-icons/fa";

export default function AddTeam() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    designation: "",
    quote: "",
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin:"",
    emial:"",
    order: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(form).forEach((key) => data.append(key, form[key]));
    if (image) data.append("image", image);

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/team/create`,
        data,
      );
      toast.success("Team member added");
      router.push("/subadmin/team/list");
    } catch (err) {
      toast.error("Error adding member");
    }
  };

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <div className="mx-auto bg-white shadow-lg rounded-xl p-8 max-w-4xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">Add Team Member</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* IMAGE UPLOAD */}
          <div>
            <label className="font-medium text-gray-700 mb-2 block">
              Profile Image
            </label>

            {!preview ? (
              <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-10 cursor-pointer hover:border-blue-500 transition">
                <FaCloudUploadAlt className="text-4xl text-gray-400 mb-3" />
                <p className="text-gray-500">Click to upload image</p>

                <input type="file" onChange={handleImage} className="hidden" />
              </label>
            ) : (
              <div className="flex items-start gap-3">
                <img
                  src={preview}
                  className="w-40 h-40 object-cover rounded-lg border"
                />

                <button
                  type="button"
                  onClick={() => {
                    setPreview("");
                    setImage(null);
                  }}
                  className="bg-red-500 text-white p-2 rounded-full shadow hover:bg-red-600 h-fit"
                >
                  <FaTrash size={14} />
                </button>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {" "}
            {/* NAME */}
            <div>
              <label className="font-medium text-gray-700 mb-2 block">
                Name
              </label>

              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Enter full name"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            {/* DESIGNATION */}
            <div>
              <label className="font-medium text-gray-700 mb-2 block">
                Designation
              </label>

              <input
                type="text"
                name="designation"
                onChange={handleChange}
                placeholder="Enter designation"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            {/* ORDER */}
            <div>
              <label className="font-medium text-gray-700 mb-2 block">
                Display Order
              </label>

              <input
                type="number"
                name="order"
                value={form.order}
                onChange={handleChange}
                placeholder="1 = top, 2, 3..."
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* QUOTE */}
          <div>
            <label className="font-medium text-gray-700 mb-2 block">
              Quote / Description
            </label>

            <textarea
              name="quote"
              rows={4}
              onChange={handleChange}
              placeholder="Write something..."
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* SOCIAL LINKS */}
          <div>
            <label className="font-medium text-gray-700 mb-2 block">
              Social Links
            </label>

            <div className="grid md:grid-cols-5 gap-4">
              <input
                type="text"
                name="email"
                onChange={handleChange}
                placeholder="Email URL"
                className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
              />
              
              <input
                type="text"
                name="facebook"
                onChange={handleChange}
                placeholder="Facebook URL"
                className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
              />

              <input
                type="text"
                name="instagram"
                onChange={handleChange}
                placeholder="Instagram URL"
                className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
              />

              <input
                type="text"
                name="twitter"
                onChange={handleChange}
                placeholder="Twitter URL"
                className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
              />

               <input
                type="text"
                name="linkedin"
                onChange={handleChange}
                placeholder="Linkedin URL"
                className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
              />
              
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Save Member
          </button>
        </form>
      </div>
    </div>
  );
}
