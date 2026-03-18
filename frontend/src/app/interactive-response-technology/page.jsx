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
      title: "Centralizes patient enrolment",
      points: [
      ]
    },
    {
      title: "Improves medication/medical device traceability.",
      points: [
       
      ]
    },
    {
      title: "Instant email notifications when a subject is enrolled",
      points: [
       
      ]
    },
    {
      title: "Multiple Randomisation Algorithms: Central, site, stratified, Minimisation (Pocock-Simon)",
      points: []
    },
    {
      title: "21 CFR Part 11 Compliance",
      points: [
      ]
    },
    {
      title: "Include your study's custom randomization algorithm",
      points: [
      ]
    },
    {
      title: "Communication with external tools",
      points: [
      ]
    },
    {
      title: "With 24/7 availability of the service, randomization can occur any time, anywhere!",
      points: [
      ]
    },
     
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
    title: "IWRS-INTERACTIVE RESPONSE TECHNOLOGY",
      text: "Simple and intutive. The IWRS will allow subjects to be enrolled in your clinical trial 24/7 at an affordable price.",
    heading:"The IWRS can also communicate with other systems automatically including our ETC system , allow you to use ITClinical's IWRS tool independently while maintaining a communication with an external vendor's tool.",
    subheading1:"Enroll Patients in the clinical trial",
    subheading2:"Export PDF/Spreadsheet reports",
    subheading3:"Multi-language support",
    subheading4:"Real time trial and site enrolment progress",
    subheading5:"Email notification on randomisation"

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
                         ERIC Interactive Response Technology (IRT)
                   </h1>
                   
                
            </motion.div>
    
            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
    
              {/* Left Content */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                Full Fledged  
                  <span className="text-blue-600"> Randomization </span>
                    <span className="text-blue-black"> and </span>
                      <span className="text-blue-600">  Trial Supply Management</span>
                </h2>
    
                <p className="text-gray-600 mb-4 leading-relaxed">
                 ERIC Interactive Response Technology (IRT), offers Interactive Web Response System.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                 It is a full fledged RTSM (Randomization and Trial Supply Management) solution that tracks your product throughout the entire clinical trial (including dispensing!). The IWRS can be used in any type of clinical trial, including medical devices. As a simple tool that serves the purpose of randomize patients, it is a cost-effective alternative that can be used independently or in integration with EDC.
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
      <p className="text-gray-200 text-left">
        {content[activeTab].subheading4}
      </p>
      <p className="text-gray-200 text-left">
        {content[activeTab].subheading5}
      </p>

    </div>

  </div>

</section>

<Newsletter/>

    <Footer/>
    </>
  );
}