"use client";

import { motion } from "framer-motion";
import {
  Radar,
  TrendingUp,
  AlertTriangle,
  DollarSign,
  Users,
  Brain,
  CheckCircle2,
  Target,
  Gauge,
  Shield,
  Plane
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";

export default function EricAICRA() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* ================= HERO IMAGE ================= */}
        <section className="w-full mt-39">
          <div className="relative w-full">
            <img
              src="/aiagentspages/cra.png"
              alt="Eric AI CRA"
              className="w-full h-full object-cover"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div> */}
          </div>
        </section>

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

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold">
                  Eric AI <span className="text-[#0B5EA8]"> CRA</span>
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mt-6 text-lg md:text-xl text-gray-700"
              >
                Monitoring should be risk-based, not travel-based.

              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mt-4 text-gray-500 text-lg"
              >
                Eric AI CRA enables smarter oversight through data-driven monitoring.


              </motion.p>

            </div>

            {/* RIGHT SIDE (VIDEO) */}
            <div className="order-2 md:order-2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="w-full max-w-lg rounded-xl overflow-hidden shadow-lg"
              >
                <video
                  src="/aiagentspages/oil-making.mp4" // 👉 replace with your video
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
                  icon: Radar,
                  title: "Remote Monitoring",
                  desc: "Monitor sites with real-time data visibility",
                },
                {
                  icon: Target,
                  title: "Risk-Based Review",
                  desc: "Focus on high-risk data and critical signals",
                },
                {
                  icon: TrendingUp,
                  title: "Trend Detection",
                  desc: "Identifies anomalies and patterns early",
                },
                {
                  icon: AlertTriangle,
                  title: "Early Warnings",
                  desc: "Flags issues before they escalate",
                },
                {
                  icon: Gauge,
                  title: "Efficient Oversight",
                  desc: "Monitor more sites with fewer resources",
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
              className="text-3xl md:text-4xl font-bold"
            >
              Real Impact. <span className="text-[#0B5EA8]">Not Just Claims</span>
            </motion.h2>

            <div className="mt-10 bg-white rounded-2xl p-10 border border-gray-200 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div>

                  <p className="text-xl text-[#0B5EA8] border border-gray-100 p-4 rouned-md shadow-xl">Focus on high-risk data</p>
                </div>
                <div>
                  <p className="text-xl text-[#0B5EA8] border border-gray-100 p-4 rouned-md shadow-xl">Earlier issue detection</p>
                </div>
                <div>
                  <p className="text-xl text-[#0B5EA8] border border-gray-100 p-4 rouned-md shadow-xl">More efficient oversight</p>
                </div>
              </div>

              <p className="mt-6 text-gray-600 text-md">
                Clinical teams gain faster insights while reducing monitoring effort.
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
              className="text-center text-3xl sm:text-4xl font-bold mb-10"
            >
              How It <span className="text-[#0B5EA8]">Works</span>
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-10 text-center">
              {[
                {
                  icon: Brain,
                  title: "AI Identifies Patterns",
                  desc: "Analyzes data across sites continuously",
                },
                {
                  icon: Users,
                  title: "CRAs Review",
                  desc: "Experts validate insights and decide actions",
                },
                {
                  icon: Target,
                  title: "Targeted Monitoring",
                  desc: "Focus only on high-risk areas",
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

        {/* ================= COMPARISON ================= */}
        {/* <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">

            <div className="p-6 border border-gray-200 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <Plane className="text-red-500" />
                <h3 className="font-semibold text-red-600">Traditional Monitoring</h3>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Travel-heavy site visits</li>
                <li>• Reactive issue detection</li>
                <li>• High operational cost</li>
                <li>• Limited scalability</li>
              </ul>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="text-[#0B5EA8]" />
                <h3 className="font-semibold text-[#0B5EA8]">Eric AI CRA</h3>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Risk-based monitoring</li>
                <li>• Proactive insights</li>
                <li>• Lower cost</li>
                <li>• Scalable oversight</li>
              </ul>
            </div>

          </div>
        </section> */}

        {/* ================= PRINCIPLE ================= */}
        {/* <section className="py-12 bg-white text-center">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Shield className="mx-auto w-16 h-16 mb-6 text-[#0B5EA8]" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI + Human Oversight
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto px-6">
            <p className="text-gray-600 text-lg">
              AI identifies patterns and risks, while CRAs retain full control
              over monitoring decisions — ensuring both speed and accountability.
            </p>
          </div>
        </section> */}

      </main>

      <Newsletter />
      <Footer />
    </>
  );
}
