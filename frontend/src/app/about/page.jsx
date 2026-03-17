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

    <section className="w-full bg-gray-100  relative overflow-hidden mt-30">
      
      {/* Background Map (optional) */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/worldmap/blob.svg" // add your map image in public folder
          alt="map"
          fill
          className=""
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/aboutuspage/about.png" // your uploaded image
            alt="About"
            width={450}
            height={450}
            className="w-full max-w-md"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Eric Solutions
          </h2>

          <p className="text-gray-600 text-lg mb-3">
            Custom Solutions for Thought Leadership and Research Development
          </p>

          <p className="text-gray-500 text-sm mb-6">
            www.ericsolutions.com
          </p>
        </div>
      </div>
    </section>



      {/* MISSION SECTION */}
      <section className="py-12 md:py-16 text-center px-6">
       <div className="bg-white rounded-lg shadow-md max-w-7xl mx-auto py-5">
         <h2 className="text-3xl md:text-4xl font-bold mb-4">
         Our Mission
        </h2>

        <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base">
          We are dedicated to delivering comprehensive, end-to-end services and solutions to support our clients' <span className="text-blue-500">clinical development programs,</span> and ensuring the highest quality and efficiency throughout the process.
        </p>
       </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
       <div className="grid md:grid-cols-4 gap-6">

  {/* CARD 1 */}
  <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
    <h4 className="font-semibold mb-2 text-lg">
      🚀 2016 ERIC Started
    </h4>
    <p className="text-gray-600 text-sm">
      Technology Company with flagship product of Electronic Remote Informed Consent (ERIC)
    </p>
  </div>

  {/* CARD 2 */}
  <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
    <h4 className="font-semibold mb-2 text-lg">
      ⚙️ 2021 End-End Services
    </h4>
    <p className="text-gray-600 text-sm">
      Build up the capacity to undertake full scope clinical trials including clinical safety.
    </p>
  </div>

  {/* CARD 3 */}
  <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
    <h4 className="font-semibold mb-2 text-lg">
      🌍 2022 Global Expansion
    </h4>
    <p className="text-gray-600 text-sm">
      Expanded presence in Australia through Partner to execute Phase I clinical trials.
    </p>
  </div>

  {/* CARD 4 */}
  <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
    <h4 className="font-semibold mb-2 text-lg">
      👥 2023 Team Expansion
    </h4>
    <p className="text-gray-600 text-sm">
      Expanded Operations, Clinical Data Management team in USA, India
    </p>
  </div>

</div>
      </section>




   
<Newsletter/>
  
      <Footer />

    </div>
  );
}