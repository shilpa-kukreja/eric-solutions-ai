"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Newsletter from "../components/Newsletter";

const fade = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function EtmfTechnology() {

   const [openIndex, setOpenIndex] = useState(0);
    const [activeTab, setActiveTab] = useState("iwrs");
 const features = [
    {
      title: "Free up Your Internal TMF Resources",
      points: [
        "Leverage seasoned Trial Master File (TMF) Study Owners anytime anywhere. Obtain pragmatic training on TMF best practices & technology. Conduct efficient, accurate TMF migrations & imports at any scale.",
      ]
    },
    {
      title: "Optimize Processes & Quality",
      points: [
        "Get a holistic view of completeness, timeliness & quality. Pinpoint & correct TMF completeness gaps. Embed TMF best practices around quality control & compliance. Obtain expert guidance for SOPs & eTMF technologies.",
      ]
    },
    {
      title: "Make Your eTMF System Work For You",
      points: [
        "Align TMF technology with your people & processes. Leverage your eTMF to develop & automate better TMF workflows. Obtain hands-on, system-specific eTMF training.",
      
      ]
    },
    {
      title: "TMF Completeness Heatmaps",
      points: [
        "Easily identify potential TMF problem areas in any eTMF system and enable a risk-based remediation approach.",
      ]
    },
    {
      title: "TMF Quality Review",
      points: [
        "A thorough quality assessment of your TMF, giving you detailed insight into its quality and completeness.",
      ]
    },
    {
      title: "TMF Document Processing",
      points: [
        "Ensure completeness, accuracy, and consistency from source to archive - regardless of your eTMF provider.",
      ]
    },
    {
      title: "TMF Study Owners",
      points: [
        "Our TMF Practitioners have successfully mastered the challenges you and your teams face every day.",
      ]
    },
    {
      title: "TMF Consulting Services",
      points: [
        "Our expert TMF consultants help your company reach and stay in the TMF Health Zone.",
      ]
    },
      {
      title: "Migrations & Imports",
      points: [
        "Help ensure you are meeting GCP standards and regulatory requirements for essential documents.",
      ]
    },
      {
      title: "TMF Expert Training",
      points: [
        "Generate lasting benefits to your team and improve the overall health of your TMF.",
      ]
    },
      {
      title: "eTMF Health Dashboard",
      points: [
        "For inspection-readiness, the critical attributes of TMF health are completeness, timeliness, and quality. To achieve and maintain ongoing TMF health and inspection readiness – the “TMF Health Dashboard” – requires experienced people trained on effective processes using the right technology.",
      ]
    },
     {
      title: "Full-Service Trial Master File Management",
      points: [
        "The Industry’s Only Turnkey, End-to-End TMF Outsourcing Solution from a Single Expert Provider.",
      ]
    }
  ];

  const toggleFeature = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

      const tabs = [
    { id: "iwrs", label: "IWRS" },
    { id: "stock", label: "Stock Management" },
    { id: "regulatory", label: "Regulatory Compliance" }
  ];

  const content = {
    iwrs: {
      title: "IWRS - INTERACTIVE WEB RESPONSE SYSTEM",
      text: "IWRS helps manage patient randomization, drug supply, and clinical trial workflows through secure web-based systems."
    },
    stock: {
      title: "STOCK MANAGEMENT",
      text: "The stock management is an optional module that allows you to register and track the trial stock by registering movement (Shipments and returns) and see movement history in the locations involved in the clinical trial( Global and regional depots and investigational sites.",
      heading:"Optional features within this module include the registration of orders to manufactures, shipments/return PDF forms and location re-supply triggers.",
      subheading1:"Locate Medications and devices",
      subheading2:"View their location history",

    },
    regulatory: {
      title: "REGULATORY COMPLIANCE",
      text: "By complying with regulatory requirements of electronic systems, it replaces paper based records which greatly assists you to access the product information and records a long time after the trial is closed while avoiding manual searches.",
      heading:"A flexible authentication and authorization system allows restricting access to the system and to the functionalities each user can perform.",
      subheading1:"21 CFR para compliant",
      subheading2:"Exportable audit trial",
      subheading3:"Several user access levels",
    }
  };


  
  return (
    <>
    <Navbar/>
    <section className="w-full bg-gray-100 py-20 mt-20">
          <div className="max-w-7xl mx-auto px-6">

             {/* Animated Heading */}
        <motion.div
            className="text-center"
            initial={{opacity:0, y:80}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.8, ease:"easeOut"}}
            viewport={{once:false}}>
      
                
                   <h1 className="text-3xl md:text-4xl font-semibold">
                         Electronic Trial Master File (eTMF) System
                   </h1>
                   
                
            </motion.div>
    
            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
    
              {/* Left Content */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                 The Most Advance 
                  <span className="text-blue-600"> eTMF</span>
                </h2>
    
                <p className="text-gray-600 mb-4 leading-relaxed">
                 The Trial Master File (TMF) is a structured collection of documents for a clinical trial to show evidence of regulatory compliance, allowing the conduct and quality of data collection to be evaluated. TMF contains study level, country level and site level documents, and those documents are collected at multiple points during the study (e.g. startup to study close). A related feature set, the electronic Investigator Site File (eISF) portal, can work in conjunction with your eTMF to facilitate document exchange between sponsor/CRO and sites.
                </p>
    
                
    
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
                  Book Free Demo
                </button>
              </div>
    
              {/* Right Image */}
              <div className="flex justify-center">
                <Image
                  src="/laptop.gif"   // place image inside public folder
                  alt="CTMS Software"
                  width={500}
                  height={350}
                  className="object-contain"
                />
              </div>
    
            </div>
          </div>
    </section>


    {/* features */}
    <section className="bg-[#0059B2] text-white py-20">

      <div className="max-w-4xl mx-auto px-6">


     {/* Features Heading */}
        <motion.div
            className="text-center"
            initial={{opacity:0, y:80}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.8, ease:"easeOut"}}
            viewport={{once:false}}>
      
                
                   <h1 className="text-2xl font-semibold mb-12 tracking-wide">
                         FEATURES
                   </h1>
                   
                
            </motion.div>

        <div className="space-y-6">

          {features.map((feature, index) => (

            <div key={index}>

              {/* Title Row */}
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => toggleFeature(index)}
              >
                <span className="text-2xl font-light">
                  {openIndex === index ? "×" : "+"}
                </span>

                <h3 className="text-lg font-medium">
                  {feature.title}
                </h3>
              </div>

              {/* Description */}
              {openIndex === index && (
                <ul className="mt-4 ml-7 space-y-2 text-sm text-blue-100 list-disc">
                  {feature.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}

            </div>

          ))}

        </div>
      </div>

    </section>
     

    
    {/* ================= PROCESS ================= */}
<section className="sm:py-32 py-20 px-6 bg-white relative">

  <div className="max-w-6xl mx-auto">

    {/* Tabs */}
    <div className="flex justify-center gap-6 border-b mb-10 flex-wrap">

      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`pb-3 font-semibold transition px-5 py-2
          ${activeTab === tab.id
            ? "text-white bg-[#1e2d5b] rounded-t"
            : "text-gray-700 hover:text-black"
          }`}
        >
          {tab.label}
        </button>
      ))}

    </div>

    {/* Dynamic Content */}
    <div className="bg-gray-600 text-white rounded-lg p-10 max-w-4xl mx-auto text-center">

      <h2 className="text-2xl font-semibold mb-4">
        {content[activeTab].title}
      </h2>

      <p className="text-gray-200 text-left">
        {content[activeTab].text}
      </p>

      <p className="text-gray-200 text-left py-4">
        {content[activeTab].heading}
      </p>
      
      <p className="text-gray-200 text-left">
        {content[activeTab].subheading1}
      </p><p className="text-gray-200 text-left">
        {content[activeTab].subheading2}
      </p><p className="text-gray-200 text-left">
        {content[activeTab].subheading3}
      </p>

    </div>

  </div>

</section>

<Newsletter/>

    <Footer/>
    </>
  );
}