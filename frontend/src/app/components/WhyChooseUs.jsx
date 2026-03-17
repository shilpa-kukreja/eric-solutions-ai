"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaFlask, FaUsers, FaCheckSquare, FaUserFriends, FaGlobe } from "react-icons/fa";

function Counter({ end, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer;

    if (isInView) {
      let start = 0;
      const duration = 1500;
      const increment = end / (duration / 16);

      timer = setInterval(() => {
        start += increment;

        if (start >= end) {
          start = end;
          clearInterval(timer);
        }

        setCount(Math.floor(start));
      }, 16);
    } else {
      setCount(0);
    }

    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="py-25 bg-[#0B5EA8] text-white">

      {/* HEADING (same animation) */}
      <motion.div
        className="text-center mb-16 pb-10"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <h2 className="text-4xl md:text-5xl font-semibold">
          Our Excellence In Numbers
        </h2>
      </motion.div>

      {/* STATS ROW */}
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-10">
        {/* ITEM */}
    <div className="flex items-center gap-4 min-w-[160px]">
          <FaFlask className="text-3xl" />
          <div>
            <h3 className="text-2xl font-bold">
              <Counter end={30} suffix="+" />
            </h3>
            <p className="text-sm opacity-80">Trials</p>
          </div>
        </div>

        <div className="flex items-center gap-4 min-w-[160px]">
          <FaUsers className="text-3xl" />
          <div>
            <h3 className="text-2xl font-bold">
              <Counter end={3500} suffix="+" />
            </h3>
            <p className="text-sm opacity-80">Patients</p>
          </div>
        </div>

        <div className="flex items-center gap-4 min-w-[160px]">
          <FaCheckSquare className="text-3xl" />
          <div>
            <h3 className="text-2xl font-bold">
              <Counter end={100} suffix="%" />
            </h3>
            <p className="text-sm opacity-80">Approval</p>
          </div>
        </div>

        <div className="flex items-center gap-4 min-w-[160px]">
          <FaUserFriends className="text-3xl" />
          <div>
            <h3 className="text-2xl font-bold">
              <Counter end={95} suffix="%" />
            </h3>
            <p className="text-sm opacity-80">Recruitment</p>
          </div>
        </div>

        <div className="flex items-center gap-4 min-w-[160px]">
          <FaGlobe className="text-3xl" />
          <div>
            <h3 className="text-2xl font-bold">
              <Counter end={6} />
            </h3>
            <p className="text-sm opacity-80">Countries</p>
          </div>
        </div>

      </div>
    </section>
  );
}