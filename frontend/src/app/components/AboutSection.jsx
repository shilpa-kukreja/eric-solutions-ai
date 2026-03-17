"use client"

import Image from "next/image"
import {motion} from "framer-motion"

export default function AboutSection() {
  return (
    <section className="relative py-12">

      {/* Background GIF
      <div className="absolute inset-0 -z-10">
        <Image
          src="/aboutsection/about.jpg"
          loading="lazy"
          alt="Background animation"
          fill
          className="object-cover opacity-30"
        />
      </div> */}

      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* animated text */}
          <motion.div
            className="mb-12"
            initial={{opacity:0, y:80}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.8, ease:"easeOut"}}
            viewport={{once:false}}>
      
                
                   <h1 className="text-5xl font-light">
                        About Eric <span className="font-medium text-[#0B4A8B]">Solutions</span>
                   </h1>
                   
                
            </motion.div>

          <h2 className="text-4xl font-bold mt-4 leading-snug">
            Crafting Enduring <span className="text-[#0B4A8B]">Excellence</span> Since 2006
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
           At Eric Solutions, we deliver user-focused solutions that ensure rapid results. Experience the ease and intuitiveness of our systems, designed to eliminate heavy customizations and steep learning curves. With just 90 minutes of guided onboarding, your team will be proficient and productive within hours, not weeks or months.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            More than just software—our lab-trained experts provide training and guidance to maximize the value of your investment every step of the way.
          </p>

          {/* Button */}
         <button className="mt-6 relative overflow-hidden bg-[#e07409] text-white px-6 py-3 rounded-lg">
            <span className="relative z-10">Learn More</span>
            {/* Permanent Shine */}
            <span className="absolute inset-0 animate-[shine_3s_linear_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent"></span>
          </button>

          {/* Stats */}
          <div className="flex gap-10 mt-12">

            <div>
              <h3 className="text-2xl font-bold text-[#e07409]">99%</h3>
              <p className="text-sm text-gray-600">Timely Possession</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#e07409]">99%</h3>
              <p className="text-sm text-gray-600">Client Satisfaction</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#e07409]">20+</h3>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>

          </div>

        </div>


        {/* RIGHT IMAGE */}
        <div className="relative">

          <Image
            src="/herosection/herosection.jpeg"
            alt="Company Building"
            width={500}
            height={900}
            className="rounded-2xl shadow-xl"
          />

          {/* Floating Card
          <div className="absolute -bottom-6 left-10 bg-white rounded-xl shadow-lg px-6 py-4 flex items-center gap-3">

            <div className="bg-yellow-500 text-white p-2 rounded-md">
              🔥
            </div>

            <div>
              <p className="font-semibold">Innovation First</p>
              <p className="text-sm text-gray-500">
                Pushing boundaries since 2010
              </p>
            </div>

          </div> */}

        </div>

      </div>

    </section>
  )
}