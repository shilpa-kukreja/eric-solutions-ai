"use client";

import { motion } from "framer-motion";
import {
    Upload,
    Fingerprint,
    Database,
    MapPin,
    AlertTriangle,
    Users,
    Brain,
    CheckCircle2,
    Rocket,
    Shield
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

export default function EricAIDataEntry() {
    return (
        <>
            <Navbar />

            <main className="bg-white">

                {/* ================= HERO IMAGE ================= */}
                <section className="w-full mt-32">
                    <div className="relative w-full">
                        <img
                            src="/aiagentspages/dataentry.png"
                            alt="Eric AI Data Entry"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
                    </div>
                </section>

                {/* ================= HERO CONTENT ================= */}
                <section className="bg-white py-12">
                    <div className="max-w-6xl mx-auto px-6 text-center">

                        <motion.h2
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl font-bold text-black"
                        >
                            Eric AI <span className="text-orange-700">Data Entry</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
                        >
                            Stop re-typing data that already exists.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="mt-4 text-gray-500 max-w-2xl mx-auto"
                        >
                            Eric AI Data Entry replaces manual transcription with AI-assisted data ingestion.

                        </motion.p>

                    </div>
                </section>

                {/* ================= FEATURES ================= */}
                <section className="py-12 bg-gray-100">
                    <div className="max-w-7xl mx-auto px-6">

                        <motion.h2
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-center text-4xl md:text-5xl font-bold mb-10"
                        >
                            What This <span className="text-orange-700">AI Does</span>
                        </motion.h2>

                        <div className="grid md:grid-cols-3 gap-10">
                            {[
                                {
                                    icon: Upload,
                                    title: "Accepts scanned source documents (any format)",
                                    desc: "Supports PDFs, images, handwritten forms and more",
                                },
                                {
                                    icon: Fingerprint,
                                    title: "De-identifies PHI in compliance with HIPAA",
                                    desc: "Ensures HIPAA-compliant patient data protection",
                                },
                                {
                                    icon: Database,
                                    title: "Extracts structured data",
                                    desc: "Converts unstructured data into structured formats",
                                },
                                {
                                    icon: MapPin,
                                    title: "Maps values into EDC",
                                    desc: "Automatically maps values into study systems",
                                },
                                {
                                    icon: AlertTriangle,
                                    title: "Flags discrepancies for review",
                                    desc: "Detects discrepancies for human validation",
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
                            className="text-4xl md:text-5xl font-bold"
                        >
                            Real Impact. <span className="text-orange-700">Not Just Claims</span>
                        </motion.h2>

                        <div className="mt-10 bg-white rounded-2xl p-10 border border-gray-200 shadow-sm">
                            <div className="grid grid-cols-3 gap-6">
                                <div>
                            
                                    <p className="text-lg text-[#0B5EA8] border border-gray-100 p-4 rouned-md shadow-xl">Reduced site burden</p>
                                </div>
                                <div>
                                
                                    <p className="text-lg text-[#0B5EA8] border border-gray-100 p-4 rouned-md shadow-xl">Improved data quality</p>
                                </div>
                                <div>
                                    
                                    <p className="text-lg text-[#0B5EA8] border border-gray-100 p-4 rouned-md shadow-xl">Faster data availability</p>
                                </div>
                            </div>

                            <p className="mt-6 text-gray-600">
                                Clinical teams reduce workload while gaining faster, more reliable data.
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
                            className="text-center text-4xl md:text-5xl font-bold mb-10"
                        >
                            How It <span className="text-orange-700">Works</span>
                        </motion.h2>

                        <div className="grid md:grid-cols-3 gap-10 text-center">
                            {[
                                {
                                    icon: Brain,
                                    title: "AI Extracts",
                                    desc: "Processes and structures data instantly",
                                },
                                {
                                    icon: Users,
                                    title: "Experts Review",
                                    desc: "Validate flagged exceptions",
                                },
                                {
                                    icon: CheckCircle2,
                                    title: "Finalize Data",
                                    desc: "Clean data pushed to EDC systems",
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

          

            </main>

            <Newsletter />
            <Footer />
        </>
    );
}