"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

export default function ContactPage() {

  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [accepted, setAccepted] = useState(false);
  const [loading, setLoading] = useState(false); // ✅ FIXED

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Prevent submit if not accepted
    if (!accepted) {
      toast.error("Please accept Privacy Policy & Terms");
      return;
    }

    try {
      setLoading(true); // ✅ start loading

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contact/create`,
        formData
      );

      if (res.status === 200 || res.status === 201) {
        toast.success("Message sent successfully");

        setFormData({
          name: "",
          email: "",
          phone: "",
        });

        setAccepted(false); // reset checkbox
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false); // ✅ stop loading
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-white mt-25">
  <div className="max-w-7xl mx-auto px-4 py-14">

    <div className="text-center mb-14">
      <h1 className="text-4xl font-bold text-blue-900">
        Connect With Us
      </h1>

      <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
        We’re always happy to hear from you.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-10 items-start">
      
      {/* FORM */}
      <div className="bg-white p-10 rounded-xl shadow-lg">
              <p className="text-sm text-gray-400 mb-2">Sign In</p>

              <h2 className="text-3xl font-bold mb-6">
                Book a Demo for Free!
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* NAME */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="w-full border p-3 pr-10 rounded-lg"
                  />
                  <FaUser className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>

                {/* EMAIL */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full border p-3 pr-10 rounded-lg"
                  />
                  <FaEnvelope className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>

                {/* CONTACT */}
                <div className="relative">
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Contact Number"
                    required
                    className="w-full border p-3 pr-10 rounded-lg"
                  />
                  <FaPhone className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>

                {/* CHECKBOX */}
                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={accepted}
                    onChange={() => setAccepted(!accepted)}
                    className="mt-1"
                  />
                  <p>
                    I agree to{" "}
                    <span onClick={() => {router.push("/privacy-policy");
                    }} className="text-blue-600 cursor-pointer">
                      Privacy Policy
                    </span>{" "}
                    and{" "}
                    <span onClick={() => {router.push("/terms-conditions");
                    }} className="text-blue-600 cursor-pointer">
                      Terms of Use
                    </span>
                  </p>
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={!accepted || loading}
                  className={`w-full py-3 rounded-lg text-white transition flex justify-center items-center
                  ${
                    accepted
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  {loading ? "Submitting..." : "Sign In"}
                </button>
              </form>
            </div>

            {/* IMAGE */}
            <div className="flex justify-center">
              <Image
                src="/footer/final_black.gif"
                alt="doctor"
                width={400}
                height={400}
                className="w-full max-w-md"
              />
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}