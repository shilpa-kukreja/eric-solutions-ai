"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SolutionsSection() {
  return (
    // <section className="bg-[#f5f6f8] py-12">
    //   <div className="max-w-7xl mx-auto px-6 space-y-15">

    //     {/* ROW 1 (TEXT LEFT - IMAGE RIGHT) */}
    //     <div className="grid lg:grid-cols-2 gap-12 items-center">

    //       {/* TEXT */}
    //       <motion.div
    //         initial={{ opacity: 0, y: 80 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8 }}
    //         viewport={{ once: false }}
    //       >
    //         <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
    //           SOLUTIONS
    //         </span>

    //         <h2 className="text-2xl md:text-3xl font-bold text-[#0B5EA8] mt-4">
    //         Effortless Solutions for Rapid Productivity </h2>

    //         <p className="text-gray-500 mt-4 leading-relaxed text-[17px]">
    //         At Eric Solutions, we deliver user-focused solutions that ensure rapid results. Experience the ease and intuitiveness of our systems, designed to eliminate heavy customizations and steep learning curves. With just 90 minutes of guided onboarding, your team will be proficient and productive within hours, not weeks or months.            </p>
    //       </motion.div>

    //       {/* IMAGE */}
    //       <motion.div
    //         initial={{ opacity: 0, x: 80 }}
    //         whileInView={{ opacity: 1, x: 0 }}
    //         transition={{ duration: 0.8 }}
    //         viewport={{ once: false }}
    //         // className="relative overflow-hidden"
    //         className="relative"

    //       >
    //         <div className="absolute -bottom-4 -right-4 -top-4 w-[230px] h-[263px] sm:w-[350px] sm:h-[450px] bg-orange-400 z-0 "></div>

    //         <Image
    //           src="/solution/solutions.jpg" // replace with your image
    //           alt="solutions"
    //           width={600}
    //           height={400}
    //           className="relative z-10 object-cover"
    //         />
    //       </motion.div>
    //     </div>

    //     {/* ROW 2 (IMAGE LEFT - TEXT RIGHT) */}
    //     <div className="grid lg:grid-cols-2 gap-12 items-center">

    //       {/* IMAGE */}
    //       <motion.div
    //         initial={{ opacity: 0, x: -80 }}
    //         whileInView={{ opacity: 1, x: 0 }}
    //         transition={{ duration: 0.8 }}
    //         viewport={{ once: false }}
    //         // className="relative overflow-hidden"
    //         className="relative"

    //       >
    //         <div className="absolute -bottom-4 -left-4 -top-4 w-[230px] h-[257px] sm:w-[350px] sm:h-[430px] bg-[#0a0736] z-0 "></div>

    //         <Image
    //           src="/solution/support.jpg" // replace with your image
    //           alt="support"
    //           width={600}
    //           height={400}
    //           className="relative z-10  object-cover"
    //         />
    //       </motion.div>

    //       {/* TEXT */}
    //       <motion.div
    //         initial={{ opacity: 0, y: 80 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8 }}
    //         viewport={{ once: false }}
    //       >
    //         <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
    //           SUPPORT
    //         </span>

    //         <h2 className="text-2xl md:text-3xl font-bold text-[#0B5EA8] mt-4">
    //         Exceptional Support for Your Success
    //         </h2>

    //         <p className="text-gray-500 mt-4 leading-relaxed text-[17px]">
    //         More than just software—our lab-trained experts provide training and guidance to maximize the value of your investment every step of the way.            </p>
    //       </motion.div>
    //     </div>

    //   </div>
    // </section>

    <section className="bg-[#f5f6f8]">
      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden lg:block py-12">
        <div className="max-w-7xl mx-auto px-6 space-y-15">
          {/* ROW 1 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            >
              <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
                SOLUTIONS
              </span>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0B5EA8] mt-4">
                Productive in hours, not months
              </h2>

              <p className="text-gray-500 mt-4 leading-relaxed text-[17px]">
                Our platform is built so your team does not need a six-week
                implementation project to use it. A single 90-minute guided
                onboarding session is enough for most teams to start managing
                live study data the same day — no heavy customisation, no steep
                learning curve.
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
              {/* <div className="absolute -bottom-4 -right-4 -top-4 w-[350px] h-[450px] bg-orange-400 z-0"></div> */}

              <Image
                src="/solution/solutions.png"
                alt="solutions"
                width={600}
                height={400}
                className="relative z-10 object-cover"
              />
            </motion.div>
          </div>

          {/* ROW 2 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="relative"
            >
              {/* <div className="absolute -bottom-4 -left-4 -top-4 w-[350px] h-[430px] bg-[#0a0736] z-0"></div> */}

              <Image
                src="/solution/support.png"
                alt="support"
                width={600}
                height={400}
                className="relative z-10 object-cover"
              />
            </motion.div>

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            >
              <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
                SUPPORT
              </span>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0B5EA8] mt-4">
                Clinical experts beside you, not just software behind you
              </h2>

              <p className="text-gray-500 mt-4 leading-relaxed text-[17px]">
                Every engagement includes hands-on support from GCP-trained
                clinical research professionals — not a ticket queue. They train
                your team, sit in on study set-up, and stay reachable through
                database lock.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================= TABLET VIEW ================= */}
      <div className="hidden sm:block lg:hidden py-12">
        <div className="max-w-5xl mx-auto px-8 space-y-20">
          {/* CARD 1 */}
          <div className="flex flex-col items-center text-center">
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative mb-10"
            >
              {/* <div className="absolute -bottom-4 -right-4 -top-4 w-[300px] h-[385px] bg-orange-400 z-0"></div> */}

              <Image
                src="/solution/solutions.png"
                alt="solutions"
                width={500}
                height={350}
                className="relative z-10 object-cover"
              />
            </motion.div>

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
                SOLUTIONS
              </span>

              <h2 className="text-4xl font-bold text-[#0B5EA8] mt-6 leading-tight">
                Productive in hours, not months
              </h2>

              <p className="text-gray-500 mt-5 leading-relaxed text-[18px]">
                Our platform is built so your team does not need a six-week
                implementation project to use it. A single 90-minute guided
                onboarding session is enough for most teams to start managing
                live study data the same day — no heavy customisation, no steep
                learning curve.
              </p>
            </motion.div>
          </div>

          {/* CARD 2 */}
          <div className="flex flex-col items-center text-center">
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative mb-10"
            >
              {/* <div className="absolute -bottom-4 -left-4 -top-4 w-[280px] h-[370px] bg-[#0a0736] z-0"></div> */}

              <Image
                src="/solution/support.png"
                alt="support"
                width={500}
                height={350}
                className="relative z-10 object-cover"
              />
            </motion.div>

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
                SUPPORT
              </span>

              <h2 className="text-4xl font-bold text-[#0B5EA8] mt-6 leading-tight">
                Clinical experts beside you, not just software behind you
              </h2>

              <p className="text-gray-500 mt-5 leading-relaxed text-[18px]">
                Every engagement includes hands-on support from GCP-trained
                clinical research professionals — not a ticket queue. They train
                your team, sit in on study set-up, and stay reachable through
                database lock.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="block sm:hidden py-10">
        <div className="max-w-xl mx-auto px-5 space-y-16">
          {/* MOBILE CARD 1 */}
          <div>
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative mb-8"
            >
              {/* <div className="absolute -bottom-3 -right-3 -top-3 w-[190px] h-[263px] bg-orange-400 z-0"></div> */}

              <Image
                src="/solution/solutions.png"
                alt="solutions"
                width={400}
                height={280}
                className="relative z-10 object-cover"
              />
            </motion.div>

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
                SOLUTIONS
              </span>

              <h2 className="text-2xl font-bold text-[#0B5EA8] mt-4 leading-tight">
                Productive in hours, not months
              </h2>

              <p className="text-gray-500 mt-4 leading-relaxed text-[15px]">
                Our platform is built so your team does not need a six-week
                implementation project to use it. A single 90-minute guided
                onboarding session is enough for most teams to start managing
                live study data the same day — no heavy customisation, no steep
                learning curve.
              </p>
            </motion.div>
          </div>

          {/* MOBILE CARD 2 */}
          <div>
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative mb-8"
            >
              {/* <div className="absolute -bottom-3 -left-3 -top-3 w-[190px] h-[250px] bg-[#0a0736] z-0"></div> */}

              <Image
                src="/solution/support.png"
                alt="support"
                width={400}
                height={280}
                className="relative z-10 object-cover"
              />
            </motion.div>


            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
                SUPPORT
              </span>

              <h2 className="text-2xl font-bold text-[#0B5EA8] mt-4 leading-tight">
                Clinical experts beside you, not just software behind you
              </h2>

              <p className="text-gray-500 mt-4 leading-relaxed text-[15px]">
                Every engagement includes hands-on support from GCP-trained
                clinical research professionals — not a ticket queue. They train
                your team, sit in on study set-up, and stay reachable through
                database lock.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
