"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export function AnimatedContent({ category, current, banner }) {

  const [expanded, setExpanded] = useState({});

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
    {/* ================= HERO IMAGE ================= */}
<div className="w-full pt-16 sm:pt-20">

  <img
    src={banner}
    alt={current.title}
    className="w-full h-[40vh] sm:h-[50vh] md:h-[65vh] object-cover"
  />

</div>

{/* ================= HERO TEXT ================= */}
<div className="bg-white py-10 sm:py-14 md:py-20 px-4 sm:px-6 text-center">

  <motion.div
    initial="hidden"
    animate="visible"
    variants={container}
    className="max-w-4xl mx-auto text-white"
  >

    <motion.h1
      variants={fade}
      className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-4 sm:mb-6 tracking-tight"
    >
      <span className="bg-gradient-to-r from-[#e07409] to-[#c79a28] bg-clip-text text-transparent">
        {current.title}
      </span>
    </motion.h1>

    <motion.h2
      variants={fade}
      className="text-sm sm:text-lg md:text-xl font-medium text-black/90 mb-4 sm:mb-6"
    >
      {current.subtitle}
    </motion.h2>

    <motion.div
      variants={fade}
      className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-[#e6c87f] to-[#e07409] mx-auto mb-4 sm:mb-6"
    />

    <motion.p
      variants={fade}
      className="text-sm sm:text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto"
    >
      {current.description}
    </motion.p>

  </motion.div>
</div>

      {/* ================= SERVICES ================= */}
      <section className="py-12 sm:py-20 md:py-28 px-4 sm:px-6 bg-[#f8f7f4]">

        <motion.h1
          variants={fade}
          className="text-2xl sm:text-4xl md:text-6xl font-semibold leading-tight mb-5 sm:mb-16 tracking-tight text-center"
        >
          <span className="bg-gradient-to-r from-[#e07409] to-[#ac5906] bg-clip-text text-transparent">
            Features
          </span>
        </motion.h1>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">

          {current.services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              whileHover={{ y: -8 }}
              className="bg-white border border-black/5 rounded-xl sm:rounded-2xl p-6 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >

              <div className="w-10 h-[2px] bg-[#e07409] mb-5 group-hover:w-16 transition-all"></div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-light mb-4 text-gray-900">
                {service.title}
              </h3>

              <p
                className={`text-gray-600 leading-relaxed text-sm sm:text-base transition-all duration-300 ${
                  expanded[index] ? "" : "line-clamp-5"
                }`}
              >
                {service.desc}
              </p>

              {service.desc.length > 120 && (
                <button
                  onClick={() => toggleReadMore(index)}
                  className="mt-4 flex items-center gap-2 text-[#e07409] text-sm font-medium hover:gap-3 transition-all"
                >
                  {expanded[index] ? "Show Less" : "Read More"}

                  <span
                    className={`transition-transform duration-300 ${
                      expanded[index] ? "rotate-180" : ""
                    }`}
                  >
                    ↓
                  </span>
                </button>
              )}

            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-16 sm:py-24 md:py-32 text-center bg-[#0e0e0e] text-white px-4 sm:px-6 overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(199,154,40,0.25),transparent_60%)]" />

        <div className="max-w-3xl mx-auto relative z-10">

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl font-light mb-6 sm:mb-10"
          >
            A Private Conversation About Your Goals
          </motion.h2>

          <p className="text-white/70 max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base md:text-lg">
            Engage with experienced advisors trusted by investors and
            institutions across premium markets.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="inline-flex items-center justify-center px-8 sm:px-14 py-3 sm:py-5 rounded-full
            bg-[#e07409]
            text-white uppercase tracking-widest text-xs sm:text-sm
            hover:shadow-[0_0_30px_rgba(199,154,40,0.5)]
            transition-all duration-300"
          >
            Request Consultation
          </motion.a>

        </div>
      </section>
    </>
  );
}