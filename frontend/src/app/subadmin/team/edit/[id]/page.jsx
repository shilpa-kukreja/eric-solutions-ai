"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FaCloudUploadAlt, FaTrash } from "react-icons/fa";

export default function EditTeam() {
  const { id } = useParams();
  const router = useRouter();

  const [form, setForm] = useState({});
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/team/${id}`,
    );
    setForm(res.data.data);
    const rawUrl = res.data.data.image?.url || "";
    const backend = process.env.NEXT_PUBLIC_BACKEND_URL || "";
    // If DB stores "uploads/..." (relative), serve it from backend "/uploads/..."
    const resolvedUrl =
      rawUrl && !/^https?:\/\//i.test(rawUrl)
        ? `${backend}/${rawUrl.replace(/^\/+/, "")}`
        : rawUrl;
    setPreview(resolvedUrl);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("name", form.name);
    data.append("designation", form.designation);
    data.append("quote", form.quote);
    data.append("order", form.order || 0);

    data.append("email", form.socialLinks?.email || "");
    data.append("facebook", form.socialLinks?.facebook || "");
    data.append("instagram", form.socialLinks?.instagram || "");
    data.append("twitter", form.socialLinks?.twitter || "");
    data.append("linkedin", form.socialLinks?.linkedin || "");

    if (image) data.append("image", image);

    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/team/update/${id}`,
        data,
      );
      toast.success("Updated");
      router.push("/subadmin/team/list");
    } catch {
      toast.error("Error updating");
    }
  };

  return (
    <div className="p-6 md:p-5 bg-gray-50 min-h-screen">
      <div className="mx-auto bg-white shadow-lg rounded-xl p-8 max-w-4xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">
          Edit Team Member
        </h1>

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

                <input
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (!file) return;
                    setImage(file);
                    setPreview(URL.createObjectURL(file));
                  }}
                  className="hidden"
                />
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
            {/* NAME */}
            <div>
              <label className="font-medium text-gray-700 mb-2 block">
                Name
              </label>

              <input
                type="text"
                value={form.name || ""}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
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
                value={form.designation || ""}
                onChange={(e) =>
                  setForm({ ...form, designation: e.target.value })
                }
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
                value={form.order || ""}
                onChange={(e) => setForm({ ...form, order: e.target.value })}
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
              rows={4}
              value={form.quote || ""}
              onChange={(e) => setForm({ ...form, quote: e.target.value })}
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
                value={form.socialLinks?.email || ""}
                onChange={(e) =>
                  setForm({
                    ...form,
                    socialLinks: {
                      ...form.socialLinks,
                      email: e.target.value,
                    },
                  })
                }
                placeholder="Email URL"
                className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
              />

              <input
                type="text"
                value={form.socialLinks?.facebook || ""}
                onChange={(e) =>
                  setForm({
                    ...form,
                    socialLinks: {
                      ...form.socialLinks,
                      facebook: e.target.value,
                    },
                  })
                }
                placeholder="Facebook URL"
                className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
              />

              <input
                type="text"
                value={form.socialLinks?.instagram || ""}
                onChange={(e) =>
                  setForm({
                    ...form,
                    socialLinks: {
                      ...form.socialLinks,
                      instagram: e.target.value,
                    },
                  })
                }
                placeholder="Instagram URL"
                className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
              />

              <input
                type="text"
                value={form.socialLinks?.twitter || ""}
                onChange={(e) =>
                  setForm({
                    ...form,
                    socialLinks: {
                      ...form.socialLinks,
                      twitter: e.target.value,
                    },
                  })
                }
                placeholder="Twitter URL"
                className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
              />

              <input
                type="text"
                value={form.socialLinks?.linkedin || ""}
                onChange={(e) =>
                  setForm({
                    ...form,
                    socialLinks: {
                      ...form.socialLinks,
                      linkedin: e.target.value,
                    },
                  })
                }
                placeholder="Linkedin URL"
                className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Update Member
          </button>
        </form>
      </div>
    </div>
  );
}
