"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import axios from "axios";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const [formData, setFormData] = useState({
    email: ""
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/newsletter/subscribe`,
        formData
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


      {/* MAIN GRID */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 grid md:grid-cols-4 gap-10 items-start">


        {/* LOGO + CONTACT INFO */}
        <div>
          <div className="pl-12">
            <img src="/footer/ericaiblack.gif" alt="Logo" width={150} height={200} />

          </div>

          {/* CONTACT DETAILS */}
          <div className="space-y-2 text-gray-400 text-[15px]">

            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-black" />
              <p>621 E Tropical Way Plantation, FLorida 33317</p> {/* Change to your actual address */}
            </div>

            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-black" />
              <p>(+1) 786-636-5556</p> {/* Change phone */}
            </div>

            <div className="flex items-center gap-2">
              <FaEnvelope className="text-black" />
              <p> Info@ericsolutions.com</p> {/* Change email */}
            </div>

          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="sm:ml-25">

          <button
            onClick={() => toggleSection("quick")}
            className="flex items-center justify-between w-full md:flex md:flex-col md:items-start"
          >
            <h3 className="text-[20px] font-bold mb-4">
              Company
            </h3>

            <span className="md:hidden">
              {openSection === "quick" ? <FiMinus /> : <FiPlus />}
            </span>
          </button>

          <ul
            className={`space-y-1 text-gray-400 text-sm text-left
            ${openSection === "quick" ? "block" : "hidden"} md:block`}
          >
            {/* <li>
              <Link href="/" className="inline-block hover:text-orange-500 hover:scale-105 transition-all duration-200">
                Home
              </Link>
            </li> */}

            <li>
              <Link href="/company/about" className="inline-block hover:text-blue-500 transition-all duration-200 text-[18px]">
                About Us
              </Link>
            </li>

            <li>
              <Link href="/insights/blogpage" className="inline-block hover:text-blue-500  transition-all duration-200 text-[18px]">
                Blogs
              </Link>
            </li>

            <li>
              <Link href="/insights/case-studies" className="inline-block hover:text-blue-500  transition-all duration-200 text-[18px]">
                Case Studies
              </Link>
            </li>

            <li>
              <Link href="/contact" className="inline-block hover:text-blue-500 transition-all duration-200 text-[18px]">
                Contact
              </Link>
            </li>


          </ul>

        </div>

        <div className=" sm:ml-8">

          <button
            onClick={() => toggleSection("quick")}
            className="flex items-center justify-between w-full md:flex md:flex-col md:items-start"
          >
            <h3 className="text-[20px] font-bold mb-4">
              Legal
            </h3>

            <span className="md:hidden">
              {openSection === "quick" ? <FiMinus /> : <FiPlus />}
            </span>
          </button>

          <ul
            className={`space-y-1 text-gray-400 text-sm text-left
            ${openSection === "quick" ? "block" : "hidden"} md:block`}
          >
            {/* <li>
              <Link href="/" className="inline-block hover:text-orange-500 hover:scale-105 transition-all duration-200">
                Home
              </Link>
            </li> */}

            <li>
              <Link href="/privacy-policy" className="inline-block hover:text-blue-500 transition-all duration-200 text-[18px]">
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link href="/terms-conditions" className="inline-block hover:text-blue-500  transition-all duration-200 text-[18px]">
                Terms & Conditions
              </Link>
            </li>

            <li>
              <Link href="/cookie-policy" className="inline-block hover:text-blue-500 transition-all duration-200 text-[18px]">
                Cookie Policy
              </Link>
            </li>
          </ul>

        </div>



        {/* NEWSLETTER */}
        <div>
          <h3 className="text-[20px] font-bold mb-4">
            Subscribe Newsletter
          </h3>

          <form
            onSubmit={handleSubmit}
            className="flex items-center bg-gray-200 rounded-md p-2 shadow-md"
          >

            <input
              type="email"
              name="email"
              value={statusMessage || formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="flex-1 bg-transparent outline-none px-1 py-2 text-gray-700 "
              disabled={statusMessage !== ""}
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-900 hover:bg-[#0f2777] text-white px-1 py-2 rounded-md transition"
            >
              {loading ? "Submitting..." : "Subscribe"}
            </button>

          </form>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 mt-4 text-2xl">

            <span className="cursor-pointer text-[#1877F2] hover:scale-110 transition">
              <FaFacebook />
            </span>

            <span className="cursor-pointer text-[#FF0000] hover:scale-110 transition">
              <FaYoutube />
            </span>

            <span className="cursor-pointer text-[#E4405F] hover:scale-110 transition">
              <FaInstagram />
            </span>

            <span className="cursor-pointer text-black hover:scale-110 transition">
              <FaSquareXTwitter />
            </span>

          </div>

        </div>

      </div>

      {/* COPYRIGHT */}
      <div className=" relative z-10 border-t border-gray-200 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Eric Solutions. All Rights Reserved.
      </div>

    </footer>
  );
}
