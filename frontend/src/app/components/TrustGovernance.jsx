"use client";

import { motion } from "framer-motion";
import { FaShieldAlt, FaCheckCircle, FaLock, FaFileAlt, FaEye } from "react-icons/fa";

const principles = [
  {
    icon: <FaCheckCircle />,
    title: "AI-assisted, human-verified workflows",
  },
  {
    icon: <FaFileAlt />,
    title: "Full traceability and audit trails",
  },
  {
    icon: <FaShieldAlt />,
    title: "Standards-driven outputs (CDISC / SDTM)",
  },
  {
    icon: <FaLock />,
    title: "PHI de-identification and data security",
  },
  {
    icon: <FaEye />,
    title: "Transparent AI behavior",
  },
   {
    icon: <FaCheckCircle />,
    title: "AI-assisted, human-verified workflows",
  },
];

export default function TrustGovernance() {
  return (
    <div className="bg-[#0B5EA8] text-white py-12">


      {/* PRINCIPLES */}
      <section className="">
          <motion.div
          className="max-w-4xl mx-auto px-6 text-center mb-5"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
             Trust  &  Governance
          </h1>
          <p className="text-xl text-white/80">
            Responsible AI for Regulated Clinical Environments
          </p>
        </motion.div>
        <div className="max-w-6xl mx-auto px-6 pt-5 ">

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {principles.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="group cursor-pointer bg-white backdrop-blur-lg border border-white/20 rounded-md p-6 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >


                 <motion.div
                key={index}
                onClick={() => router.push(agent.link)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex flex-col"
              >



              </motion.div>
                <div className="text-3xl mb-4 text-blue-900  transition">
                  {item.icon}
                </div>

                <h3 className="text-lg font-medium text-black">
                  {item.title}
                </h3>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* PATENT / TRUST BLOCK */}
      {/* <section className="py-20 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="inline-block bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-sm mb-6">
              Innovation & Protection
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Built with Proprietary Intelligence
            </h3>

            <p className="text-gray-600 leading-relaxed">
              A provisional patent has been filed for Eric AI's novel approach to
              clinical data automation — reinforcing our commitment to innovation,
              compliance, and long-term reliability in regulated environments.
            </p>
          </motion.div>

        </div>
      </section> */}

    </div>
  );
}
