"use client";

import { motion } from "framer-motion";
import {
  FolderTree,
  CheckCircle2,
  Clock,
  Shield,
  Brain,
  Users,
  FileCheck,
  FolderOpen,
  Search,
  Eye,
  Bell,
  AlertTriangle,
  Zap,
  BarChart3,
  Cloud,
  Rocket,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";

export default function EricAIDocumentManager() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* ================= HERO IMAGE ================= */}
        <section className="w-full mt-39">
          <div className="relative w-full">
            <img
              src="/aiagentspages/documentmanager.png"
              alt="Eric AI Document Manager"
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
                  Eric AI <span className="text-[#0B5EA8]">Document Manager</span>
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mt-6 text-lg md:text-xl text-gray-700"
              >
                Inspection Readiness Should Be Continuous



              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mt-4 text-gray-500 text-lg"
              >
                Eric AI Document Manager supports inspection-ready TMFs throughout the study.



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
              className="text-center text-3xl  sm:text-4xl font-bold py-8"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              What This <span className="text-[#0B5EA8]">AI Does</span>
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: FolderOpen,
                  title: "Real-Time Organization",
                  desc: "Automatically classifies and files documents",
                },
                {
                  icon: CheckCircle2,
                  title: "Completeness Tracking",
                  desc: "Continuously monitors document status",
                },
                {
                  icon: Cloud,
                  title: "Workflow Integration",
                  desc: "Connects with EDC, CTMS systems",
                },
                // {
                //   icon: Search,
                //   title: "Gap Detection",
                //   desc: "Flags missing or incomplete items",
                // },
                // {
                //   icon: Shield,
                //   title: "Inspection Ready",
                //   desc: "Always audit-ready documentation",
                // },
                // {
                //   icon: Zap,
                //   title: "Automation First",
                //   desc: "Reduces manual document handling",
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
        <section className="py-12 text-center">
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
                Global Clinical Trial TMF
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div>

                  <p className="text-xl text-[#0B5EA8] border border-gray-100 p-4 rouned-md shadow-xl">Reduced inspection risk</p>
                </div>
                <div>

                  <p className="text-xl text-[#0B5EA8] border border-gray-100 p-4 rouned-md shadow-xl">Lower reconciliation burden</p>
                </div>
                <div>

                  <p className="text-xl text-[#0B5EA8] border border-gray-100 p-4 rouned-md shadow-xl">Audit Ready</p>
                </div>
              </div>

              <p className="mt-6 text-gray-600 text-lg">
                Continuous monitoring ensured complete documentation throughout the trial lifecycle.
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
                  icon: FolderTree,
                  title: "Organize",
                  desc: "Documents auto-classified into TMF zones",
                },
                {
                  icon: Search,
                  title: "Track",
                  desc: "AI monitors completeness in real-time",
                },
                {
                  icon: Rocket,
                  title: "Stay Ready",
                  desc: "Always inspection-ready",
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

            <Shield className="mx-auto w-16 h-16 text-[#0B5EA8] mb-6" />

            <h2 className="text-4xl font-bold mb-4">
              Inspection Readiness Should Be Continuous
            </h2>

            <p className="text-lg text-gray-600">
              Don’t wait until study end. Maintain complete, organized,
              audit-ready TMF throughout the entire lifecycle.
            </p>

          </div>
        </section> */}

      </main>

      <Newsletter />
      <Footer />
    </>
  );
}
