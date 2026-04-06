"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Database,
  TrendingUp,
  GitBranch,
  Brain,
  BarChart3,
  Target,
  Gauge,
  Zap,
  Shield,
  CheckCircle2
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";

export default function EricAIStatistics() {
  return (
    <>
      <Navbar />



      <main className="bg-white">

        {/* ================= HERO IMAGE ================= */}
        <section className="w-full mt-39">
          <div className="relative w-full">
            <img
              src="/aiagentspages/statistics.png"
              alt="Eric AI Statistics"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
          </div>
        </section>


        <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mt-10 text-center">
                  Eric AI <span className="text-[#0B5EA8]"> Statistics</span>
                </h2>
              </motion.div>

        {/* ================= HERO CONTENT ================= */}
        <section className="relative py-12 md:py-12 sm:my-5" >

          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/worldmap/blob.svg" // 👉 replace with your image
              alt="background"
              className="w-full h-full"
            />
            {/* Overlay */}
            <div className="absolute inset-0 "></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT SIDE (CONTENT) */}
            <div className="text-black order-1 md:order-1">

             

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className=" text-xl md:text-4xl text-gray-700"
              >
                Insights should guide trials — not trail them.

              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mt-4 text-gray-500 text-lg"
              >
                Eric AI Statistics enables early visibility into trial data.

              </motion.p>

            </div>

            {/* RIGHT SIDE (VIDEO) */}
            <div className="order-2 md:order-2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="w-full max-w-lg rounded-xl overflow-hidden"
              >
                <img
                  src="/aiagentspages/3.gif" // 👉 replace with your video
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

            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center text-3xl md:text-4xl font-bold mb-10"
            >
              What This <span className="text-[#0B5EA8]">AI Does</span>
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: Activity,
                  title: "Real-Time Analytics",
                  desc: "Monitor trial data as it flows into the system",
                },
                {
                  icon: Database,
                  title: "Analysis-Ready Data",
                  desc: "Clean, structured datasets ready instantly",
                },
                {
                  icon: TrendingUp,
                  title: "Early Trend Detection",
                  desc: "Identify patterns and risks early",
                },
                {
                  icon: GitBranch,
                  title: "Faster Analysis",
                  desc: "Accelerate downstream statistical workflows",
                },
                {
                  icon: BarChart3,
                  title: "Clear Insights",
                  desc: "Transform data into actionable decisions",
                },
                {
                  icon: Zap,
                  title: "Reduced Rework",
                  desc: "Get accurate insights from the start",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className="p-8 rounded-md bg-white border border-gray-200 shadow-sm hover:shadow-lg transition"
                >
                  <item.icon className="w-10 h-10 text-[#0B5EA8] mb-4" />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-500 mt-2">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= IMPACT ================= */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto text-center px-6">

            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl font-bold"
            >
              Real Impact. <span className="text-[#0B5EA8]">Not Just Claims.</span>
            </motion.h2>

            <div className="mt-10 bg-white rounded-2xl p-10 border border-gray-200 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div>

                  <p className="text-xl text-[#0B5EA8] border border-gray-100 p-4 rouned-md shadow-xl">Faster Decisions</p>
                </div>
                <div>

                  <p className="text-xl text-[#0B5EA8] border border-gray-100 p-4 rouned-md shadow-xl">Better Oversight</p>
                </div>
                <div>

                  <p className="text-xl text-[#0B5EA8] border border-gray-100 p-4 rouned-md shadow-xl">Reduced Rework</p>
                </div>
              </div>

              <p className="mt-6 text-gray-600 text-md">
                Teams gain earlier visibility into data, enabling faster and more
                confident decision-making.
              </p>
            </div>
          </div>
        </section>

        {/* ================= WORKFLOW ================= */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-6xl mx-auto px-6">

            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center text-3xl md:text-4xl font-bold mb-10"
            >
              How It <span className="text-[#0B5EA8]">Works</span>
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-10 text-center">
              {[
                {
                  icon: Brain,
                  title: "AI Suggests Focus",
                  desc: "Identifies key patterns and insights",
                },
                {
                  icon: BarChart3,
                  title: "Statistical Engines Run",
                  desc: "Produces validated, reproducible results",
                },
                {
                  icon: Target,
                  title: "Insights Delivered",
                  desc: "Actionable outputs guide decisions",
                },
              ].map((step, i) => (
                <div key={i}>
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
        {/* <section className="py-12 bg-white text-center">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Shield className="mx-auto w-16 h-16 mb-6 text-[#0B5EA8]" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI + Deterministic Precision
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto px-6">
            <p className="text-gray-600 text-lg">
              AI identifies patterns and suggests insights, while deterministic
              statistical engines ensure reproducibility, accuracy, and trust.
            </p>
          </div>
        </section> */}

      </main>

      <Newsletter />
      <Footer />
    </>
  );
}
