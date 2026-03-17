"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const fade = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export function TechnologyAnimatedContent({ category, current, banner }) {

  const [expanded, setExpanded] = useState({});

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index]
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

      {/* ================= Features ================= */}
      <section className="py-4 bg-[#f8f7f4]">

        <motion.h1
          variants={fade}
          className="text-3xl sm:text-5xl md:text-7xl font-semibold leading-tight mb-7 tracking-tight text-center "
        >
          <span className="bg-gradient-to-r from-[#e07409] to-[#ac5906] bg-clip-text text-transparent">
            Features
          </span>
        </motion.h1>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 sm:gap-14 gap-10"
        >

          {current.services.map((service, index) => (

            <motion.div
              key={index}
              variants={fade}
              whileHover={{ y: -10 }}
              className="group relative bg-white/80 backdrop-blur-xl
              border border-white/30
              rounded-2xl p-8 sm:p-12 shadow-md
              hover:shadow-2xl
              transition-all duration-300 overflow-hidden"
            >

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#e6c87f]/10 to-transparent" />

              <div className="relative z-10">

                <div className="w-10 h-[2px] bg-[#e07409] mb-6 group-hover:w-20 transition-all" />

                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className={`text-gray-600 leading-relaxed text-sm sm:text-base transition-all duration-300 ${
                    expanded[index] ? "" : "line-clamp-5"
                  }`}
                >
                  {service.desc}
                </p>

                {/* READ MORE */}
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

              </div>

            </motion.div>

          ))}

        </motion.div>
      </section>

     

      {/* ================= CTA ================= */}
      <section className="relative sm:py-36 py-24 text-center bg-[#0e0e0e] text-white px-6 overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(199,154,40,0.25),transparent_60%)]" />

        <div className="max-w-3xl mx-auto relative z-10">

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-6xl font-light mb-10"
          >
            A Private Conversation About Your Goals
          </motion.h2>

          <p className="text-white/70 max-w-2xl mx-auto mb-14 text-base md:text-lg">
            Engage with experienced advisors trusted by investors and
            institutions across premium markets.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="inline-flex items-center justify-center px-10 sm:px-14 py-4 sm:py-5 rounded-full
            bg-[#e07409]
            text-white uppercase tracking-widest text-sm
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