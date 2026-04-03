"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SolutionsSection() {
  return (
    <section className="bg-[#f5f6f8] py-12">
      <div className="max-w-7xl mx-auto px-6 space-y-24">

        {/* ROW 1 (TEXT LEFT - IMAGE RIGHT) */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold">
              SOLUTIONS
            </span>

            <h2 className="text-2xl md:text-3xl font-bold text-[#0B5EA8] mt-4">
              Clinical trials don't slow down everywhere. </h2>

            <p className="text-gray-500 mt-4 leading-relaxed text-[17px]">
              They slow down at <span className="font-bold">specific operational points</span> — study startup, data entry, monitoring, analytics, and documentation.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="relative"
          >
            <div className="absolute -bottom-4 -right-4 -top-4 w-[230px] h-[315px] sm:w-[350px] sm:h-[450px] bg-orange-400 z-0 "></div>

            <Image
              src="/solution/solutions.jpg" // replace with your image
              alt="solutions"
              width={600}
              height={400}
              className="relative z-10 object-cover"
            />
          </motion.div>
        </div>

        {/* ROW 2 (IMAGE LEFT - TEXT RIGHT) */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="relative"
          >
            <div className="absolute -bottom-4 -left-4 -top-4 w-[230px] h-[300px] sm:w-[350px] sm:h-[430px] bg-[#0a0736] z-0 "></div>

            <Image
              src="/solution/support.jpg" // replace with your image
              alt="support"
              width={600}
              height={400}
              className="relative z-10  object-cover"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold">
              SUPPORT
            </span>

            <h2 className="text-2xl md:text-3xl font-bold text-[#0B5EA8] mt-4">
            Eric AI takes a different approach.
            </h2>

            <p className="text-gray-500 mt-4 leading-relaxed text-[17px]">
              We built <span className="font-bold"> specialized AI agents</span> each designed to solve one problem exceptionally well — all operating within a governed, compliant platform.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}