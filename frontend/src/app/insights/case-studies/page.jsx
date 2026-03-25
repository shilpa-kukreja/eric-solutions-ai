"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Target,
  Brain,
  TrendingUp,
  Users,
  Database,
  Shield,
  Zap,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";

export default function CaseStudyPage() {
  return (
    <>
    <Navbar/>
     <div className="relative w-full pt-20">
        <img
          src={"/casestudies/banner.png"}
          alt="image"
          className="w-full h-full object-cover"
        />
      </div>
<main className="bg-white">

      {/* HERO */}
      <section className="relative py-12 bg-white mt-25">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Case <span className="text-orange-700">Study</span> 
          </motion.h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            How Eric AI-powered systems helped a US-based oncology study
            reduce startup timelines, improve data quality, and achieve
            faster site activation.
          </p>
        </div>
      </section>

   
      {/* PROBLEM */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <p className="text-slate-600 mb-6">
            The sponsor faced delays in study startup due to fragmented systems,
            manual CRF design, and slow regulatory coordination. Traditional
            workflows created bottlenecks across data management and site activation.
          </p>

          <ul className="space-y-3">
            {[
              "Manual CRF and database setup taking weeks",
              "Lack of real-time visibility across systems",
              "Delayed site activation timelines",
              "High risk of data inconsistencies",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-slate-700">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            The Eric Solutions Approach
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI-Driven EDC Setup",
                desc: "Automated CRF creation using AI reduced setup time from weeks to hours.",
              },
              {
                icon: Database,
                title: "Unified Data Platform",
                desc: "Integrated CTMS, EDC, and operational systems for real-time insights.",
              },
              {
                icon: Zap,
                title: "Rapid Deployment",
                desc: "Enabled faster onboarding with minimal customization and quick training.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 border rounded-2xl">
                <item.icon className="w-10 h-10 text-blue-900 mb-4" />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Timeline Impact
          </h2>

          <div className="space-y-6">
            {[
              "Database design completed in 19 days",
              "First site initiated within 5 weeks",
              "Rapid onboarding within hours instead of weeks",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <Clock className="text-blue-900" />
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Results & Impact</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                value: "40%",
                label: "Faster Startup Time",
              },
              {
                value: "95%",
                label: "Recruitment Efficiency",
              },
              {
                value: "100%",
                label: "Regulatory Compliance",
              },
            ].map((item, i) => (
              <div key={i} className="p-8 border rounded-2xl">
                <p className="text-4xl font-bold text-blue-900">
                  {item.value}
                </p>
                <p className="text-slate-500 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Why It Matters</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            By combining AI-driven automation with deep clinical expertise,
            Eric Solutions transforms traditional clinical trial execution into
            a faster, more predictable, and data-driven process—helping sponsors
            bring therapies to market faster.
          </p>
        </div>
      </section>

      

    </main>
    <Newsletter/>
    <Footer/>
    </>
    
  );
}