"use client";

import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaFacebook, FaInstagram} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Newsletter from "../../components/Newsletter";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: "⚡",
    title: "Speed",
    desc: "Go from protocol to live EDC in hours, not months.",
  },
  {
    icon: "💰",
    title: "Cost",
    desc: "Reduce data collection and monitoring costs by up to 80–90%.",
  },
  {
    icon: "🛡️",
    title: "Trust",
    desc: "AI-assisted, human-verified outputs with full auditability.",
  },
  {
    icon: "🔗",
    title: "Modularity",
    desc: "Activate only the AI agents you need. Scale as your trial grows.",
  },
];

const steps = [
  {
    title: "AI Interprets Intent",
    desc: "Protocols, source data, and workflows are intelligently analyzed to understand context and objectives.",
  },
  {
    title: "Structured Outputs Generated",
    desc: "CRFs, datasets, analytics, and documents are automatically created in standardized formats.",
  },
  {
    title: "Human Expert Review",
    desc: "Experienced professionals validate and refine outputs to ensure accuracy and compliance.",
  },
  {
    title: "Full Traceability",
    desc: "Every action is logged with complete audit trails for transparency and regulatory confidence.",
  },
];


export default function AboutPage() {
  return (
    <div className="bg-gray-100 text-gray-800">

      <Navbar />

    <section className="w-full bg-white  relative overflow-hidden mt-30 p-12">
      
      {/* Background Map (optional) */}
      <div className="absolute inset-0 opacity-200">
        <Image
          src="/worldmap/blob.svg" // add your map image in public folder
          alt="map"
          fill
          className=""
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-start ">
          <Image
            src="/aboutsection/image.png" // your uploaded image
            alt="About"
            width={450}
            height={450}
            className="w-full max-w-md rounded-2xl"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl  font-bold text-gray-800 mb-4">
            About <span className="text-[#0B5EA8]">Eric AI</span>
          </h2>

          <p className="text-gray-600 text-xl mb-3">
            Custom Solutions for Thought Leadership and Research Development
          </p>

          <p className="text-gray-500 text-xl mb-6">
            www.ericsolutions.com
          </p>
        </div>
      </div>
    </section>



      {/* MISSION SECTION */}
      <section className="py-12 md:py-16 text-center px-6 bg-gray-100">
       <div className="bg-white rounded-lg shadow-md max-w-7xl mx-auto py-5">
         <h2 className="text-3xl md:text-4xl font-bold mb-4">
         Our <spanc className="text-[#0B5EA8]">Mission</spanc>
        </h2>

        <p className="max-w-2xl mx-auto text-gray-600 text-lg md:text-base">
          We are dedicated to delivering comprehensive, end-to-end services and solutions to support our clients' <span className="text-blue-500">clinical development programs,</span> and ensuring the highest quality and efficiency throughout the process.
        </p>
       </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
       <div className="grid md:grid-cols-4 gap-6">

  {/* CARD 1 */}
  <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
    <h4 className="font-semibold mb-2 text-lg">
      🚀 2016 ERIC Started
    </h4>
    <p className="text-gray-600 text-sm">
      Technology Company with flagship product of Electronic Remote Informed Consent (ERIC)
    </p>
  </div>

  {/* CARD 2 */}
  <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
    <h4 className="font-semibold mb-2 text-lg">
      ⚙️ 2021 End-End Services
    </h4>
    <p className="text-gray-600 text-sm">
      Build up the capacity to undertake full scope clinical trials including clinical safety.
    </p>
  </div>

  {/* CARD 3 */}
  <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
    <h4 className="font-semibold mb-2 text-lg">
      🌍 2022 Global Expansion
    </h4>
    <p className="text-gray-600 text-sm">
      Expanded presence in Australia through Partner to execute Phase I clinical trials.
    </p>
  </div>

  {/* CARD 4 */}
  <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
    <h4 className="font-semibold mb-2 text-lg">
      👥 2023 Team Expansion
    </h4>
    <p className="text-gray-600 text-sm">
      Expanded Operations, Clinical Data Management team in USA, India
    </p>
  </div>

</div>
      </section>


 {/* <section className="relative py-12">

      Background GIF
      <div className="absolute inset-0 -z-10">
        <Image
          src="/aboutsection/about.jpg"
          loading="lazy"
          alt="Background animation"
          fill
          className="object-cover opacity-30"
        />
      </div>

      Container
      

    </section> */}
      <section className="py-12 bg-white">
           <div className="max-w-6xl mx-auto px-4 text-center">
             
             <motion.div
             className="text-center mb-5"
             initial={{ opacity: 0, y: 80 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: false }}
           >
             <h2 className="text-3xl md:text-4xl font-bold text-black">
               Value <span className="text-[#0B5EA8]">Pillars</span> 
             </h2>
           </motion.div>
             <p className="text-gray-600 mb-12 text-xl text-gray-100">
               Built for speed, efficiency, and scalability
             </p>
     
             {/* Grid */}
             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
               {pillars.map((item, index) => (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 40 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.4, delay: index * 0.1 }}
                   viewport={{ once: false }}
                   className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300"
                 >
                   <div className="text-4xl mb-4">{item.icon}</div>
                   <h3 className="text-xl font-bold mb-2">
                     {item.title}
                   </h3>
                   <p className="text-gray-600 text-m">
                     {item.desc}
                   </p>
                 </motion.div>
               ))}
             </div>
           </div>
         </section>


           <div className="bg-gray-100 text-gray-800">
         
               {/* HERO SECTION */}
               <section className="py-10 text-center">
                 <div className="max-w-4xl mx-auto px-4">
                 <motion.div
                 className="text-center pb-10"
                 initial={{ opacity: 0, y: 80 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8 }}
                 viewport={{ once: false }}
               >
                 <h2 className="text-3xl md:text-4xl font-bold text-black">
                   How Eric AI <span className="text-[#0B5EA8]">Works</span>
                 </h2>
               </motion.div>
                   <p className="text-gray-600 text-lg">
                     A seamless blend of AI automation and human expertise to deliver
                     speed, accuracy, and compliance.
                   </p>
                 </div>
               </section>
         
               {/* STEPS SECTION */}
               <section className="py-12">
                 <div className="max-w-5xl mx-auto px-4 relative">
         
                   {/* Vertical Line */}
                   <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gray-200 transform -translate-x-1/2"></div>
         
                   <div className="space-y-16">
                     {steps.map((step, index) => (
                       <motion.div
                         key={index}
                         className={`flex flex-col md:flex-row items-center md:items-start gap-8 ${
                           index % 2 === 0 ? "md:flex-row-reverse" : ""
                         }`}
                         initial={{ opacity: 0, y: 50 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.5, delay: index * 0.1 }}
                         viewport={{ once: false }}
                       >
                         
                         {/* Content */}
                         <div className="md:w-1/2">
                           <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                             <h3 className="text-xl font-semibold mb-2">
                               {step.title}
                             </h3>
                             <p className="text-gray-600 text-sm">
                               {step.desc}
                             </p>
                           </div>
                         </div>
         
                         {/* Circle */}
                         <div className="relative flex items-center justify-center">
                           <div className="w-10 h-10 bg-[#0B5EA8] text-white rounded-full flex items-center justify-center font-bold shadow-md">
                             {index + 1}
                           </div>
                         </div>
         
                       </motion.div>
                     ))}
                   </div>
                 </div>
               </section>
         
               {/* FINAL STATEMENT */}
               {/* <section className="py-16 bg-gray-50 text-center">
                 <div className="max-w-3xl mx-auto px-4">
                   <p className="text-lg text-gray-700 font-medium">
                     This balance enables speed without compromising quality or compliance.
                   </p>
                 </div>
               </section> */}
         
             </div>

   
<Newsletter/>
  
      <Footer />

    </div>
  );
}