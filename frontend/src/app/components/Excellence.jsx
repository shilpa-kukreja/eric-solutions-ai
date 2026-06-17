"use client";

import { motion } from "framer-motion";
import {
  FaFlask,
  FaUsers,
  FaCheck,
  FaUserFriends,
  FaGlobe,
} from "react-icons/fa";

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
      value:  70,
      suffix: "%",
      label: "Repeat Business",
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

      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden lg:block">
        <div className="max-w-8xl mx-auto px-35 pb-12 mb-5">
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
                <div className="text-4xl opacity-90">{item.icon}</div>

                {/* TEXT */}
                <div className="text-left">
                  <h3 className="text-2xl font-bold">
                    {item.value}
                    {item.suffix}
                  </h3>

                  <p className="text-md opacity-90">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= TABLET VIEW ================= */}
      <div className="hidden md:block lg:hidden">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-2 gap-6 justify-center">
            {stats.map((item, i) => (
              <motion.div
                key={i}
                className="w-full max-w-[320px] flex items-center gap-4 px-5 py-5 rounded-xl transition-all duration-300 hover:bg-orange-600 hover:scale-105 cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                {/* ICON */}
                <div className="text-4xl opacity-90 shrink-0">
                  {item.icon}
                </div>

                {/* TEXT */}
                <div className="text-left">
                  <h3 className="text-2xl font-bold leading-tight">
                    {item.value}
                    {item.suffix}
                  </h3>

                  <p className="text-base opacity-90 leading-snug">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="block md:hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 px-4 py-4 rounded-md transition-all duration-300 hover:bg-orange-600 hover:scale-105 cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                {/* ICON */}
                <div className="text-3xl opacity-90 shrink-0">
                  {item.icon}
                </div>

                {/* TEXT */}
                <div className="text-left">
                  <h3 className="text-xl font-bold leading-tight">
                    {item.value}
                    {item.suffix}
                  </h3>

                  <p className="text-sm opacity-90 leading-snug">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}