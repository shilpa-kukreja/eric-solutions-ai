"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function ContactAdmin() {
  const [form, setForm] = useState({
    address: "",
    phone: "",
    email: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: "",
  });

  const [status, setStatus] = useState("idle");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/footer`,
    );
    if (res.data.data) {
      setForm(res.data.data);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setStatus("saving");

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/footer/save`,
        form,
      );

      if (res.data.success) {
        toast.success("Saved successfully");
        setStatus("saved");

        // optional: revert back after 2 sec
        setTimeout(() => setStatus("idle"), 2000);
      }
    } catch {
      toast.error("Error saving");
      setStatus("idle");
    }
  };

  return (
    <div className=" py-10 bg-gray-50 flex justify-center items-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
            rows={3}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
          />

          <input
            type="text"
            name="facebook"
            placeholder="Facebook URL"
            value={form.facebook}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
          />

          <input
            type="text"
            name="instagram"
            placeholder="Instagram URL"
            value={form.instagram}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
          />

          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn URL"
            value={form.linkedin}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
          />

          <input
            type="text"
            name="twitter"
            placeholder="Twitter / X URL"
            value={form.twitter}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
          />

          <button
            type="submit"
            disabled={status === "saving"}
            className={`px-6 py-3 rounded-xl w-full font-medium transition 
    ${
      status === "saved"
        ? "bg-green-600 text-white"
        : "bg-black text-white hover:bg-gray-800"
    }
  `}
          >
            {status === "saving"
              ? "Saving..."
              : status === "saved"
                ? "Saved ✓"
                : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
}
