"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaFlask, FaUsers, FaCheck, FaUserFriends, FaGlobe } from "react-icons/fa";

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
  const stats = [
    {
      icon: <FaFlask />,
      value: 30,
      suffix: "+",
      label: "Trials",
    },
    {
      icon: <FaUsers />,
      value: 3500,
      suffix: "+",
      label: "Patients",
    },
    {
      icon: <FaCheck />,
      value: 100,
      suffix: "%",
      label: "Approval",
    },
    {
      icon: <FaUserFriends />,
      value: 95,
      suffix: "%",
      label: "Recruitment",
    },
    {
      icon: <FaGlobe />,
      value: 6,
      suffix: "",
      label: "Countries",
    },
  ];

  return (
    <section className="py-12 bg-[#0059B2] text-white">

      {/* HEADING */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-5">
          Our Excellence In Numbers
        </h1>
      </motion.div>

      {/* STATS ROW */}
      <div className="max-w-7xl mx-auto px-6 py-12 mb-5">
        <div className="flex flex-wrap justify-between items-center gap-8 text-center">

          {stats.map((item, i) => (
            <motion.div
              key={i}
  className="flex items-center gap-4 min-w-[150px] px-4 py-3 rounded-md transition-all duration-300 hover:bg-orange-600 hover:scale-105 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              {/* ICON */}
              <div className="text-4xl opacity-90">
                {item.icon}
              </div>

              {/* TEXT */}
              <div className="text-left">
                <h3 className="text-2xl font-bold">
                  <Counter end={item.value} suffix={item.suffix} />
                </h3>
                <p className="text-md opacity-90">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}