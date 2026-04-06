"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Database,
  Rocket,
  Shield,
  CheckCircle2,
  Zap,
  Users,
  Target,
  ArrowRight,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";

export default function EricAIDBDesigner() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* ================= HERO IMAGE ================= */}
        <section className="w-full mt-39">
          <div className="relative w-full">
            <img
              src="/aiagentspages/dbdesigner.png"
              alt="Eric AI DB Designer"
              className="w-full h-full object-cover"
            />

            {/* Optional premium overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div> */}
          </div>
        </section>

        <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                
              >
                <h2 className="text-3xl md:text-4xl font-bold text-center pt-12">
                  Eric AI <span className="text-[#0B5EA8]">DB Designer</span>
                </h2>
              </motion.div>
        {/* ================= HERO CONTENT ================= */}

        <section className="relative py-1 md:py-12 my-0 sm:my-5">

          {/* DESKTOP BACKGROUND */}
          <div className="hidden md:block absolute inset-0 z-0 opacity-1000">
            <img
              src="/worldmap/blob.svg"
              alt="background"
              className="w-full h-full "
            />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT SIDE */}
            <div className="relative text-black order-1 md:order-1">

              {/* MOBILE BACKGROUND (only for left section) */}
              <div className="absolute inset-0 -z-10 md:hidden">
                <img
                  src="/worldmap/blob.svg"
                  alt="background"
                  className="w-full h-full object-cover opacity-30"
                />
              </div>


              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mt-1 text-lg md:text-4xl text-gray-700"
              >
                EDC Design Shouldn't Delay Patient Enrollment
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mt-4 text-gray-500 text-lg"
              >
                Eric AI DB Designer accelerates study startup by transforming protocols into structured, standards-aligned EDC designs.
              </motion.p>

            </div>

            {/* RIGHT SIDE */}
            <div className="order-2 md:order-2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="w-full max-w-lg overflow-hidden"
              >
                <img
                  src="/aiagentspages/1.gif"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

          </div>
        </section>


        {/* ================= FEATURES ================= */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center py-8"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black ">
                What This <span className="text-[#0B5EA8]">AI Does</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: Brain,
                  title: "Analyzes the study protocol",
                  desc: "Understands complex study designs instantly",
                },
                {
                  icon: Database,
                  title: "Designs CRFs in hours",
                  desc: "Builds structured CRFs within hours",
                },
                {
                  icon: CheckCircle2,
                  title: "Generates edit checks",
                  desc: "Auto-generates validation logic",
                },
                {
                  icon: Zap,
                  title: "Prepares SDTM-ready structures",
                  desc: "Reduces developer dependency",
                },
                {
                  icon: Shield,
                  title: "Eliminates heavy programming dependency",
                  desc: "SDTM aligned from day one",
                },

              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-md bg-white border border-gray-200 shadow-sm hover:shadow-xl transition"
                >
                  <item.icon className="w-10 h-10 text-[#0B5EA8] mb-4" />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-500 mt-2">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CASE STUDY ================= */}
        <section className="py-12  text-black">
          <div className="max-w-5xl mx-auto text-center px-6">

            <motion.div
              className="text-center "
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className=" text-3xl sm:text-4xl font-bold text-black mb-5">
                Real Impact. <span className="text-[#0B5EA8]">Not Just Claims.</span>
              </h2>
              <p className="text-xl text-gray-800">
                Breast Cancer Study (USA)
              </p>
            </motion.div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-5 border border-white/10">


              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div>

                  <p className="text-lg text-[#0B5EA8] border border-gray-100 p-4 rouned-md shadow-xl">Faster site initiation</p>
                </div>
                <div>

                  <p className="text-lg text-[#0B5EA8] border border-gray-100 p-4 rouned-md shadow-xl">Fewer design iterations</p>
                </div>
                <div>

                  <p className="text-lg text-[#0B5EA8] border border-gray-100 p-4 rouned-md shadow-xl">Earlier data visibility
                  </p>
                </div>
              </div>


            </div>
          </div>
        </section>

        {/* ================= WORKFLOW ================= */}
        <section className="py-12  bg-gray-100">
          <div className="max-w-6xl mx-auto px-6">

            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black ">
                How It <span className="text-[#0B5EA8]">Works</span>
              </h2>
            </motion.div>



            <div className="grid md:grid-cols-3 gap-10 text-center">
              {[
                {
                  icon: Brain,
                  title: "AI Generates",
                  desc: "Initial CRF & structure instantly",
                },
                {
                  icon: Users,
                  title: "Experts Validate",
                  desc: "Clinical experts refine & review",
                },
                {
                  icon: Rocket,
                  title: "Deploy Fast",
                  desc: "Production-ready in record time",
                },
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className="w-20 h-20 mx-auto bg-[#0B5EA8] text-white flex items-center justify-center rounded-2xl mb-4">
                    <step.icon />
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-gray-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PRINCIPLE ================= */}
        <section className="py-12  text-black text-center">

          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black ">
              <Shield className="mx-auto w-16 h-16 mb-6" />
              <h2 className="text-4xl font-bold mb-4">
                Speed with <span className="text-[#0B5EA8]">Accountability</span>
              </h2>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto px-6">

            <p className="text-xl text-gray-800">
              AI drives speed. Experts ensure quality, compliance, and trust.
            </p>
          </div>
        </section>

      </main>

      <Newsletter />
      <Footer />
    </>
  );
}
