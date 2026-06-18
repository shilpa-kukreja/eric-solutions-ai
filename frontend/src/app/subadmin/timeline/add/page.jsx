"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function AddTimeline() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    description: "",
    icon: "🚀",
    year: "",
    order: 0,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/timeline/create`,
        form,
      );

      if (res.data.success) {
        toast.success("Timeline Added");
        setForm({
          title: "",
          description: "",
          icon: "🚀",
          year: "",
          order: 0,
        });
        router.push('/subadmin/timeline/list')
      }
    } catch (err) {
      toast.error("Error adding timeline");
    }
  };

  return (
    <div className=" bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">Add Timeline</h2>
          <p className="text-gray-500 text-sm mt-1">
            Create a new milestone for your company journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="text-sm font-medium text-gray-600">Title</label>
            <input
              type="text"
              name="title"
              placeholder="e.g. ERIC Founded"
              value={form.title}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:outline-none transition"
              required
            />
          </div>

          {/* Year + Icon Row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-600">Year</label>
              <input
                type="number"
                name="year"
                placeholder="2024"
                value={form.year}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:outline-none transition"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">Icon</label>
              <input
                type="text"
                name="icon"
                placeholder="🚀"
                value={form.icon}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:outline-none transition"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Write a short description..."
              value={form.description}
              onChange={handleChange}
              rows={4}
              className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:outline-none transition resize-none"
              required
            />
          </div>

          {/* Order */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Display Order
            </label>
            <input
              type="number"
              name="order"
              placeholder="0,1,2..."
              value={form.order}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:outline-none transition"
            />
          </div>

          {/* Button */}
          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 rounded-xl font-medium hover:bg-gray-800 transition shadow-md hover:shadow-lg"
            >
              + Add Timeline
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
