"use client";

import { motion } from "framer-motion";
import {
  Target,
  AlertTriangle,
  TrendingUp,
  Shield,
  Brain,
  Users,
  CheckCircle2,
  Clock,
  BarChart3,
  Rocket,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";

export default function EricAIProjectManager() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-100">

        {/* ================= HERO IMAGE ================= */}
        <section className="w-full mt-39">
          <div className="relative w-full">
            <img
              src="/aiagentspages/projectmanager.png"
              alt="Eric AI Project Manager"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
          </div>
        </section>

        {/* ================= HERO CONTENT ================= */}
        <section className="py-12 text-center">
          <div className="max-w-6xl mx-auto px-6">

            <motion.h2
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl font-bold text-black"
            >
              Eric AI <span className="">Project Manager</span>
            </motion.h2>

            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Predict Delays Before They Happen

            </p>

            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Eric AI Project Manager provides proactive execution insight.

            </p>

          </div>
        </section>

        {/* ================= FEATURES ================= */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6">

            <motion.h2
              className="text-center text-3xl sm:text-4xl font-bold py-8"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              What This <span className="text-[#0B5EA8]">AI Does</span>
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: Target,
                  title: "Milestone Tracking",
                  desc: "Tracks timelines across all systems",
                },
                {
                  icon: AlertTriangle,
                  title: "Risk Detection",
                  desc: "Identifies delays before they happen",
                },
                {
                  icon: TrendingUp,
                  title: "Predictive Insights",
                  desc: "Forecasts outcomes with AI models",
                },
                // {
                //   icon: BarChart3,
                //   title: "Unified Data",
                //   desc: "Combines CTMS, EDC and operations",
                // },
                // {
                //   icon: Shield,
                //   title: "Execution Control",
                //   desc: "Ensures predictable delivery timelines",
                // },
                // {
                //   icon: Brain,
                //   title: "Smart Decisions",
                //   desc: "Guides teams with AI recommendations",
                // },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="p-8 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-xl transition"
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
        <section className="py-12 bg-gray-100 text-center ">
          <div className="max-w-5xl mx-auto px-6">

            <motion.h2
              className="text-3xl sm:text-4xl font-bold"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Real Impact. <span className="text-[#0B5EA8]">Not Just Claims.</span>
            </motion.h2>

            <div className="mt-8 p-10 border border-gray-200 rounded-3xl shadow-sm">
              <p className="text-lg text-gray-800">
                Global Phase III Study Execution
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div>
                 
                  <p className="text-xl text-[#0B5EA8] border border-gray-100 p-4 rouned-md shadow-xl">Faster Response</p>
                </div>
                <div>
                  
                  <p className="text-xl text-[#0B5EA8] border border-gray-100 p-4 rouned-md shadow-xl">Accuracy</p>
                </div>
                <div>
                 
                  <p className="text-xl text-[#0B5EA8] border border-gray-100 p-4 rouned-md shadow-xl">Visibility</p>
                </div>
              </div>

              <p className="mt-6 text-gray-600 text-lg">
                AI-driven forecasting enabled proactive risk mitigation and on-time delivery.
              </p>
            </div>
          </div>
        </section>

        {/* ================= WORKFLOW ================= */}
        {/* <section className="py-12 bg-gray-100">
          <div className="max-w-6xl mx-auto px-6 text-center">

            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-8"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              How It Works
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: BarChart3,
                  title: "Aggregate",
                  desc: "Collects data across systems",
                },
                {
                  icon: Brain,
                  title: "Analyze",
                  desc: "Detects risks and predicts delays",
                },
                {
                  icon: Rocket,
                  title: "Act",
                  desc: "Enables proactive decisions",
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
        </section> */}

        {/* ================= PRINCIPLE ================= */}
        {/* <section className="py-12 text-center">
          <div className="max-w-4xl mx-auto px-6">

            <Target className="mx-auto w-16 h-16 text-[#0B5EA8] mb-6" />

            <h2 className="text-4xl font-bold mb-4">
              Predict Delays Before They Happen
            </h2>

            <p className="text-lg text-gray-600">
              Move beyond reactive tracking. Use AI to anticipate risks,
              optimize execution, and deliver studies with confidence.
            </p>

          </div>
        </section> */}

      </main>

      <Newsletter />
      <Footer />
    </>
  );
}
