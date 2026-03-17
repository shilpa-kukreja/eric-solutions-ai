"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

export default function InteractiveResponseTechnology() {


    const [activeTab, setActiveTab] = useState("iwrs");
      const tabs = [
    { id: "iwrs", label: "IWRS" },
    { id: "stock", label: "Stock Management" },
    { id: "regulatory", label: "Regulatory Compliance" }
  ];

  const content = {
    iwrs: {
      title: "IWRS - Interactive Web Response System",
      text: "IWRS helps manage patient randomization, drug supply, and clinical trial workflows through secure web-based systems."
    },
    stock: {
      title: "Stock Management System",
      text: "Efficiently manage drug inventory, track supply levels, and ensure accurate distribution across clinical trial sites."
    },
    regulatory: {
      title: "Regulatory Compliance",
      text: "Maintain compliance with global regulatory standards ensuring accurate reporting, documentation, and audit readiness."
    }
  };


  const services = [
    {
      title: "Advanced Data Solutions",
      desc: "We provide modern data infrastructure and analytics solutions designed to transform raw information into strategic insights."
    },
    {
      title: "Cloud Integration",
      desc: "Secure and scalable cloud technologies helping organizations improve performance, flexibility, and reliability."
    },
    {
      title: "AI & Automation",
      desc: "Implementing intelligent automation and machine learning systems to optimize business workflows."
    },
    {
      title: "Cyber Security",
      desc: "Comprehensive security strategies designed to protect digital infrastructure and sensitive business data."
    },
    {
      title: "Enterprise Systems",
      desc: "Robust enterprise solutions that streamline operations and support long-term business growth."
    },
    {
      title: "Digital Transformation",
      desc: "Helping organizations modernize systems and adopt innovative technologies for the future."
    }
  ];

  return (
    <>
    <Navbar/>
      {/* ================= HERO ================= */}
      <section className="relative w-full pt-20 overflow-hidden">

        <img
          src="/commercial.jpeg"
          alt="Technology"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6 }}
          className="w-full h-[70vh] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="max-w-5xl text-white"
          >

            <motion.h1
              variants={fade}
              className="text-5xl md:text-7xl font-semibold leading-tight mb-6 tracking-tight"
            >
              <span className="bg-gradient-to-r from-[#e6c87f] to-[#c79a28] bg-clip-text text-transparent">
                Electronic Trial Master File (eTMF) System
              </span>
            </motion.h1>

            <motion.h2
              variants={fade}
              className="text-xl md:text-2xl font-medium text-white/90 mb-6"
            >
              The Most Advance eTMF
            </motion.h2>

            <motion.div
              variants={fade}
              className="w-24 h-[2px] bg-gradient-to-r from-[#e6c87f] to-[#c79a28] mx-auto mb-6"
            />

            <motion.p
              variants={fade}
              className="text-base md:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto"
            >
              The Trial Master File (TMF) is a structured collection of documents for a clinical trial to show evidence of regulatory compliance, allowing the conduct and quality of data collection to be evaluated. TMF contains study level, country level and site level documents, and those documents are collected at multiple points during the study (e.g. startup to study close). A related feature set, the electronic Investigator Site File (eISF) portal, can work in conjunction with your eTMF to facilitate document exchange between sponsor/CRO and sites.
            </motion.p>

          </motion.div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="sm:py-32 py-20 px-6 bg-[#f8f7f4]">

        <motion.h1
          variants={fade}
          className="text-5xl md:text-7xl font-semibold leading-tight mb-12 tracking-tight text-center"
        >
          <span className="bg-gradient-to-r from-[#e6c87f] to-[#c79a28] bg-clip-text text-transparent">
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

          {services.map((service, index) => (

            <motion.div
              key={index}
              variants={fade}
              whileHover={{ y: -10 }}
              className="group relative bg-white/80 backdrop-blur-xl
              border border-white/30
              rounded-2xl p-12 shadow-md
              hover:shadow-2xl
              transition-all duration-300 overflow-hidden"
            >

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#e6c87f]/10 to-transparent" />

              <div className="relative z-10">

                <div className="w-10 h-[2px] bg-[#c79a28] mb-6 group-hover:w-20 transition-all" />

                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>

              </div>

            </motion.div>

          ))}

        </motion.div>
      </section>



    {/* ================= PROCESS ================= */}
<section className="sm:py-32 py-20 px-6 bg-white relative">

  <div className="max-w-6xl mx-auto">

    {/* Tabs */}
    <div className="flex justify-center gap-6 border-b mb-10 flex-wrap">

      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`pb-3 font-semibold transition px-5 py-2
          ${activeTab === tab.id
            ? "text-white bg-[#1e2d5b] rounded-t"
            : "text-gray-700 hover:text-black"
          }`}
        >
          {tab.label}
        </button>
      ))}

    </div>

    {/* Dynamic Content */}
    <div className="bg-gray-600 text-white rounded-lg p-10 max-w-4xl mx-auto text-center">

      <h2 className="text-2xl font-semibold mb-4">
        {content[activeTab].title}
      </h2>

      <p className="text-gray-200">
        {content[activeTab].text}
      </p>

    </div>

  </div>

</section>

      {/* ================= CTA ================= */}
      <section className="relative sm:py-36 py-24 text-center bg-[#0e0e0e] text-white px-6 overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(199,154,40,0.25),transparent_60%)]" />

        <div className="max-w-3xl mx-auto relative z-10">

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-light mb-10"
          >
            A Private Conversation About Your Goals
          </motion.h2>

          <p className="text-white/70 max-w-2xl mx-auto mb-14 text-lg">
            Engage with experienced advisors trusted by investors and
            institutions across premium markets.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="inline-flex items-center justify-center px-14 py-5 rounded-full
            bg-[#e07409] text-white uppercase tracking-widest text-sm
            hover:shadow-[0_0_30px_rgba(199,154,40,0.5)]
            transition-all duration-300"
          >
            Request Consultation
          </motion.a>

        </div>
      </section>

    <Footer/>
    </>
  );
}