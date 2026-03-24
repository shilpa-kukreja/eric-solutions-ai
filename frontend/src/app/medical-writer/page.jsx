"use client";

import { motion } from "framer-motion";
import {
  FileText,
  PenTool,
  CheckCircle2,
  Brain,
  Users,
  Clock,
  FileCheck,
  Shield,
  Zap,
  TrendingUp,
  Database,
  Layers,
  Rocket,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

export default function EricAIMedicalWriter() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* ================= HERO IMAGE ================= */}
        <section className="w-full mt-32">
          <div className="relative w-full">
            <img
              src="/aiagentspages/medicalwriter.png"
              alt="Eric AI Medical Writer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
          </div>
        </section>

        {/* ================= HERO CONTENT ================= */}
        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-6 text-center">

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-5xl font-bold text-black">
                Eric AI <span className="text-orange-700">Medical Writer</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Accelerate Drafting Without Compromising Science

            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-4 text-gray-500 max-w-2xl mx-auto"
            >
              Eric AI Medical Writer assists medical writers by reducing manual assembly.

            </motion.p>
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
              <h2 className="text-5xl font-bold">
                What This <span className="text-orange-700">AI Does</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: FileText,
                  title: "Auto Drafting",
                  desc: "Generates structured clinical documents instantly",
                },
                {
                  icon: Database,
                  title: "Data Integration",
                  desc: "Pulls directly from trial data",
                },
                {
                  icon: Layers,
                  title: "Consistency Engine",
                  desc: "Maintains terminology across documents",
                },
                {
                  icon: CheckCircle2,
                  title: "Regulatory Ready",
                  desc: "Aligned with submission standards",
                },
                {
                  icon: Zap,
                  title: "Faster Turnaround",
                  desc: "Reduces weeks of manual effort",
                },
                {
                  icon: Shield,
                  title: "Quality Control",
                  desc: "Ensures accuracy and compliance",
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
        <section className="py-12 bg-white text-black">
          <div className="max-w-5xl mx-auto text-center px-6">

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-5xl font-bold">
                Real Impact. <span className="text-orange-700">Not Just Claims.</span>
              </h2>
            </motion.div>

            <div className="bg-white rounded-3xl p-10 border border-gray-200 mt-8 shadow-sm">
              <p className="text-lg text-gray-800">
                Oncology Study Documentation
              </p>

              <div className="grid grid-cols-3 gap-6 mt-8">
                <div>
              
                  <p className="text-xl text-[#0B5EA8] border border-gray-100 p-4 rouned-md shadow-xl">Faster document timelines</p>
                </div>
                <div>
                
                  <p className="text-xl text-[#0B5EA8] border border-gray-100 p-4 rouned-md shadow-xl">Reduced rework</p>
                </div>
                <div>
                
                  <p className="text-xl text-[#0B5EA8] border border-gray-100 p-4 rouned-md shadow-xl">Improved quality</p>
                </div>
              </div>

              <p className="mt-6 text-gray-600">
                Delivered submission-ready documents in hours with full
                regulatory alignment.
              </p>
            </div>
          </div>
        </section>

        {/* ================= WORKFLOW ================= */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-6xl mx-auto px-6">

            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-5xl font-bold">
                How It <span className="text-orange-700">Works</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10 text-center">
              {[
                {
                  icon: Brain,
                  title: "AI Drafts",
                  desc: "Creates structured documents instantly",
                },
                {
                  icon: Users,
                  title: "Experts Review",
                  desc: "Medical writers validate & refine",
                },
                {
                  icon: Rocket,
                  title: "Deliver Fast",
                  desc: "Submission-ready output",
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
          <div className="max-w-4xl mx-auto px-6">

            <Shield className="mx-auto w-16 h-16 text-[#0B5EA8] mb-6" />

            <h2 className="text-4xl font-bold mb-4">
              Speed with Accountability
            </h2>

            <p className="text-lg text-gray-600">
              AI accelerates document creation. Experts ensure quality,
              compliance, and trust.
            </p>

          </div>
        </section> */}

      </main>

      <Newsletter />
      <Footer />
    </>
  );
}