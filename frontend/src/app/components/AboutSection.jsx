"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const pillars = [
  {
    icon: "⚡",
    title: "Speed",
    desc: "Go from protocol to live EDC in hours, not months.",
  },
  {
    icon: "💰",
    title: "Cost",
    desc: "Reduce data collection and monitoring costs by up to 80–90%.",
  },
  {
    icon: "🛡️",
    title: "Trust",
    desc: "AI-assisted, human-verified outputs with full auditability.",
  },
  {
    icon: "🔗",
    title: "Modularity",
    desc: "Activate only the AI agents you need. Scale as your trial grows.",
  },
];

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
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}>


            <h1 className="text-5xl font-bold">
              Why <span className="font-medium text-[#0B4A8B]">Eric AI</span>
            </h1>


          </motion.div>



          <p className="mt-6 text-gray-600 leading-relaxed font-bold">
            Clinical trials don't slow down everywhere.
          </p>
          <p className="mt-6 text-gray-600 leading-relaxed">
            They slow down at <span className="font-bold">specific operational points</span> — study startup, data entry, monitoring, analytics, and documentation.

          </p>
          <p className="mt-6 text-gray-600 leading-relaxed font-bold">
            Eric AI takes a different approach.


          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We built <span className="font-bold"> specialized AI agents</span> each designed to solve one problem exceptionally well — all operating within a governed, compliant platform.

          </p>

          {/* Button */}
          <button className="mt-6 relative overflow-hidden bg-[#e07409] text-white px-6 py-3 rounded-lg">
            <span className="relative z-10">Learn More</span>
            {/* Permanent Shine */}
            <span className="absolute inset-0 animate-[shine_3s_linear_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent"></span>
          </button>

         
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