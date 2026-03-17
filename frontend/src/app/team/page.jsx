"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaFacebook, FaInstagram} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Newsletter from "../components/Newsletter";

export default function AboutPage() {
  return (
    <div className="bg-gray-100 text-gray-800">

      <Navbar />

 

       <section className="py-12 md:py-16 text-center px-6 mt-30">

         <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold ">
              Our Team Leader
            </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-4">
        Meet The <span className="text-blue-500"> Brains</span>
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
       Behind The <span className="text-blue-500"> Eric Solutions</span>
        </h2>
      </section>

      {/* TEAM LEADERS */}


{/* TEAM LEADERS */}
<section className="max-w-7xl mx-auto px-6 pb-20">
  <div className="grid md:grid-cols-2 gap-8">

    {/* CARD 1 */}
    <div className="bg-white rounded-xl shadow-md p-8 flex gap-5 hover:shadow-xl transition duration-300">

      <img
        src="/team/sachin.jpg"
        className="w-16 h-16 rounded-full object-cover"
        alt="Sachin Bidani"
      />

      <div>
        <h3 className="font-semibold text-lg">Sachin Bidani</h3>
        <p className="text-sm text-gray-500 mb-3">Founder & CEO</p>
        <p className="text-gray-600 text-sm mb-4">
          “Eric Solutions pioneers seamless, science-driven clinical development solutions.”
        </p>

        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <span className="cursor-pointer text-[#1877F2] hover:scale-110 transition">
              <FaFacebook />
            </span>
          </a>

          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <span className="cursor-pointer text-[#E4405F] hover:scale-110 transition">
              <FaInstagram />
            </span>
          </a>

          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <span className="cursor-pointer text-black hover:scale-110 transition">
              <FaSquareXTwitter />
            </span>
          </a>
        </div>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="bg-white rounded-xl shadow-md p-8 flex gap-5 hover:shadow-xl transition duration-300">
      <img
        src="/team/kenneth.png"
        className="w-16 h-16 rounded-full object-cover"
        alt="Kenneth Duchin"
      />

      <div>
        <h3 className="font-semibold text-lg">Dr. Kenneth Duchin</h3>
        <p className="text-sm text-gray-500 mb-3">Chief Scientific Officer</p>
        <p className="text-gray-600 text-sm mb-4">
          “Eric Solution empowers progress through science and technology innovation.”
        </p>

        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <span className="cursor-pointer text-[#1877F2] hover:scale-110 transition">
              <FaFacebook />
            </span>
          </a>

          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <span className="cursor-pointer text-[#E4405F] hover:scale-110 transition">
              <FaInstagram />
            </span>
          </a>

          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <span className="cursor-pointer text-black hover:scale-110 transition">
              <FaSquareXTwitter />
            </span>
          </a>
        </div>
      </div>
    </div>


    {/* CARD 3 */}
    <div className="bg-white rounded-xl shadow-md p-8 flex gap-5 hover:shadow-xl transition duration-300">

      <img
        src="/team/deepak.png"
        className="w-16 h-16 rounded-full object-cover"
        alt="Sachin Bidani"
      />

      <div>
        <h3 className="font-semibold text-lg">Deepak Prabhu</h3>
        <p className="text-sm text-gray-500 mb-3">Sr. Director Project Management and Clinical Operations</p>
        <p className="text-gray-600 text-sm mb-4">
          "We’re excited to collaborate with bright minds driving transformative innovation."

        </p>

        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <span className="cursor-pointer text-[#1877F2] hover:scale-110 transition">
              <FaFacebook />
            </span>
          </a>

          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <span className="cursor-pointer text-[#E4405F] hover:scale-110 transition">
              <FaInstagram />
            </span>
          </a>

          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <span className="cursor-pointer text-black hover:scale-110 transition">
              <FaSquareXTwitter />
            </span>
          </a>
        </div>
      </div>
    </div>

    {/* CARD 1 */}
    <div className="bg-white rounded-xl shadow-md p-8 flex gap-5 hover:shadow-xl transition duration-300">

      <img
        src="/team/yes.png"
        className="w-16 h-16 rounded-full object-cover"
        alt="Sachin Bidani"
      />

      <div>
        <h3 className="font-semibold text-lg">Yessenia Rincon</h3>
        <p className="text-sm text-gray-500 mb-3">Clinical Operations</p>
        <p className="text-gray-600 text-sm mb-4">
          “Partnering with Eric Solutions delivers exceptional, results-driven clinical development experiences.”
        </p>

        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <span className="cursor-pointer text-[#1877F2] hover:scale-110 transition">
              <FaFacebook />
            </span>
          </a>

          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <span className="cursor-pointer text-[#E4405F] hover:scale-110 transition">
              <FaInstagram />
            </span>
          </a>

          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <span className="cursor-pointer text-black hover:scale-110 transition">
              <FaSquareXTwitter />
            </span>
          </a>
        </div>
      </div>
    </div>

    {/* Repeat the same pattern for CARD 3 & CARD 4 */}
  </div>
</section>

     

      <Newsletter/>

      <Footer />

    </div>
  );
}