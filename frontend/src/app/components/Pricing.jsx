"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

/* 🔢 Counter (Reused + Smooth for pricing) */
function Counter({ end }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer;

    if (isInView) {
      let start = 0;
      const duration = 1200;
      const increment = end / (duration / 16);

      timer = setInterval(() => {
        start += increment;

        if (start >= end) {
          start = end;
          clearInterval(timer);
        }

        setCount(Math.floor(start));
      }, 16);
    }

    return () => clearInterval(timer);
  }, [isInView, end]);

  return <span ref={ref}>{count}</span>;
}

const features = [
  "Core EDC",
  "Security & audit trails",
  "Standards framework",
  "User management",
  "Access to AI agents",
];

export default function Pricing() {
  return (
    <section className="py-12 bg-white text-black" id="pricing">

      {/* HEADING */}
      <motion.div
        className="text-center mb-5"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0B5EA8]">
           Simple, Transparent Pricing
        </h2>
        <p className="text-white/80">
          Choose the plan that fits your workflow
        </p>
      </motion.div>

      {/* PRICING GRID */}
      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-2">

        {/* MONTHLY */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay:0.2 }}
          className="bg-white text-gray-800 rounded-md border border-gray-200 shadow-xl p-8 cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition duration-300"
        >

   {/* <motion.div
                key={index}
                onClick={() => router.push(agent.link)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex flex-col"
              >



              </motion.div> */}



          <h3 className="text-2xl font-semibold mb-2">
            Monthly Plan
          </h3>

          <div className="mt-4 mb-6">
            <p className="text-3xl font-bold text-[#0B5EA8]">
              $<Counter end={399} />
              <span className="text-lg text-gray-500"> / month</span>
            </p>
          </div>

          <div className="border-t my-6"></div>

          <div className="space-y-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <FaCheckCircle className="text-[#0B5EA8]" />
                <span className="text-md">{f}</span>
              </div>
            ))}
          </div>

          <button className="mt-8 w-full bg-blue-800 text-white py-3 rounded-xl hover:bg-[#1D4ED8]  transition">
            Get Started
          </button>
        </motion.div>

         <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay:0.2 }}
          className="bg-white text-gray-800 rounded-md border border-gray-200 shadow-xl p-8 cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition duration-300"
        >
          <h3 className="text-2xl font-semibold mb-2">
            Annual Plan
          </h3>

          <div className="mt-4 mb-6">
            <p className="text-3xl font-bold text-[#0B5EA8]">
              $<Counter end={349} />
              <span className="text-lg text-gray-500"> / month</span>
            </p>
          </div>

          <div className="border-t my-6"></div>

          <div className="space-y-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <FaCheckCircle className="text-[#0B5EA8]" />
                <span className="text-md">{f}</span>
              </div>
            ))}
          </div>

          <button className="mt-8 w-full bg-blue-800 text-white py-3 rounded-xl hover:bg-[#1D4ED8] transition">
            Get Started
          </button>
        </motion.div>

        {/* ANNUAL */}
   

      </div>
    </section>
  );
}
