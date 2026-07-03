"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import axios from "axios";
import Link from "next/link";

export default function Footer() {
  const [openSections, setOpenSections] = useState({
    company: false,
    legal: false,
  });
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    fetchContact();
  }, []);

  const fetchContact = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/footer/`,
      );
      setData(res.data.data);
    } catch {
      console.error("Failed to fetch contact");
    }
  };
  if (!data) return null;

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/newsletter/subscribe`,
        formData,
      );

      if (res.data.success) {
        toast.success(res.data.message);
        setStatusMessage("Subscribed ✔");
        setFormData({ email: "" });
      } else {
        setStatusMessage("Already Subscribed ✔");
        toast.info(res.data.message);
      }

      setLoading(false);
    } catch (error) {
      toast.error(error.response?.data?.message || "Subscription failed");
      setLoading(false);
    }
  };

  return (
    <footer className="relative border border-gray-200 py-12">
      <div className="absolute inset-0 flex opacity-1000  items-center justify-center pointer-events-none z-0">
        <img
          src="/worldmap/blob.svg"
          alt="footer background"
          className="w-[400px] md:w-[600px] "
        />
      </div>

      {/* MAIN GRID - adjusted gap for mobile */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 grid md:grid-cols-4 gap-y-6 gap-x-10 md:gap-10 items-start">
        {/* LOGO + CONTACT INFO */}
        <div>
          <div className="sm:pl-10">
            <img src="/footer/logo.gif" alt="Logo" width={120} />
          </div>

          {/* CONTACT DETAILS */}
          <div className="space-y-2 text-gray-400 text-[15px]">
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-black" />
              <p>{data.address}</p>
            </div>

            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-black" />
              <p>{data.phone}</p>
            </div>

            <div className="flex items-center gap-2">
              <FaEnvelope className="text-black" />
              <p>{data.email}</p>
            </div>
          </div>
        </div>

        {/* QUICK LINKS - COMPANY */}
        <div className="sm:ml-25">
          <button
            onClick={() => toggleSection("company")}
            className="flex items-center justify-between w-full md:flex md:flex-col md:items-start"
          >
            <h3 className="text-[20px] font-bold mb-4">Company</h3>
            <span className="md:hidden">
              {openSections.company ? <FiMinus /> : <FiPlus />}
            </span>
          </button>

          <ul
            className={`space-y-1 text-gray-400 text-sm text-left
            ${openSections.company ? "block" : "hidden"} md:block`}
          >
            <li>
              <Link
                href="/company/about"
                className="inline-block hover:text-blue-500 transition-all duration-200 text-[18px]"
              >
                About Us
              </Link>
            </li>


             <li>
              <Link
                href="/company/team"
                className="inline-block hover:text-blue-500 transition-all duration-200 text-[18px]"
              >
                Team
              </Link>
            </li>

            
            <li>
              <Link
                href="/insights/blogs"
                className="inline-block hover:text-blue-500 transition-all duration-200 text-[18px]"
              >
                Blogs
              </Link>
            </li>


             <li>
              <Link
                href="/insights/articles"
                className="inline-block hover:text-blue-500 transition-all duration-200 text-[18px]"
              >
                Articles
              </Link>
            </li>

           
            <li>
              <Link
                href="/contact"
                className="inline-block hover:text-blue-500 transition-all duration-200 text-[18px]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* LEGAL */}
        <div className="sm:ml-8">
          <button
            onClick={() => toggleSection("legal")}
            className="flex items-center justify-between w-full md:flex md:flex-col md:items-start"
          >
            <h3 className="text-[20px] font-bold mb-4">Legal</h3>
            <span className="md:hidden">
              {openSections.legal ? <FiMinus /> : <FiPlus />}
            </span>
          </button>

          <ul
            className={`space-y-1 text-gray-400 text-sm text-left
            ${openSections.legal ? "block" : "hidden"} md:block`}
          >
            <li>
              <Link
                href="/privacy-policy"
                className="inline-block hover:text-blue-500 transition-all duration-200 text-[18px]"
              >
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link
                href="/terms-conditions"
                className="inline-block hover:text-blue-500 transition-all duration-200 text-[18px]"
              >
                Terms & Conditions
              </Link>
            </li>

            <li>
              <Link
                href="/cookie-policy"
                className="inline-block hover:text-blue-500 transition-all duration-200 text-[18px]"
              >
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-[20px] font-bold mb-4">Subscribe Newsletter</h3>

          <form
            onSubmit={handleSubmit}
            className="
              flex flex-col gap-2
              md:flex-col
              lg:flex-row
              bg-gray-200 rounded-md p-2 shadow-md
            "
          >
            <input
              type="email"
              name="email"
              value={statusMessage || formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="flex-1 min-w-0 bg-transparent outline-none px-3 py-2 text-gray-700"
              disabled={statusMessage !== ""}
            />

            <button
              type="submit"
              disabled={loading}
              className="
                w-full md:w-full lg:w-auto
                whitespace-nowrap
                bg-blue-900 hover:bg-[#0f2777]
                text-white px-4 py-2 rounded-md transition
              "
            >
              {loading ? "Submitting..." : "Subscribe"}
            </button>
          </form>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 mt-4 text-2xl">
            <span className="cursor-pointer text-[#1877F2] hover:scale-110 transition">
              <FaFacebook />
            </span>

            <span className="cursor-pointer text-[#E4405F] hover:scale-110 transition">
              <FaInstagram />
            </span>

            <span className="cursor-pointer text-blue-600 hover:scale-110 transition">
              <FaLinkedin />
            </span>

            <span className="cursor-pointer text-black hover:scale-110 transition">
              <FaSquareXTwitter />
            </span>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="relative z-10 border-t border-gray-200 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} eRIC AI. All Rights Reserved.
      </div>
    </footer>
  );
}
