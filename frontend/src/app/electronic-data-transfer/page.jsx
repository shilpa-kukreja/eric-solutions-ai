"use client";


import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

export default function HeroSection() {

     const [openIndex, setOpenIndex] = useState(0);



      const features = [
    {
      title: "Build Advance eCRF quickly",
      points: [
        "Begin with one of our pre-built eCRF templates.",
        "Customize your form with 21 different field types.",
        "Clone and reuse forms as you develop additional studies",
      ]
    },
    {
      title: "Countries Planning and Management",
      points: [
        "Track country level study approvals.",
        "Manage regional compliance requirements.",
        "Centralized overview of country participation."
      ]
    },
    {
      title: "Site and Investigator Management",
      points: [
        "Maintain investigator database.",
        "Track investigator credentials and experience.",
        "Manage site contracts and documentation."
      ]
    },
    {
      title: "Subject Management",
      points: [
        "Track patient enrollment.",
        "Monitor subject visits and study schedules.",
        "Maintain subject data securely."
      ]
    },
    {
      title: "Study Team Management",
      points: [
        "Manage study team roles.",
        "Assign tasks and responsibilities.",
        "Track communication and collaboration."
      ]
    }
  ];

   const services = [
    {
      title: "Deploy Studies Faster",
      points: [
        "Create advanced eCRFs in minutes.",
        "Deploy your study in as little as 3 weeks.",
        "Manage study complexities with best-in-class support.",
      ]
    },
    {
      title: "Decentralized Data Integration",
      points: [
        "Integrate data from EHR, eCRF, ePRO/eCOA, laboratory, wearables, and other devices.",
        "Integrate with any software or database in your clinical trial ecosystem using ERIC’s open API.",
      ]
    },
    {
      title: "Real-Time Visibility",
      points: [
        "Get an overview of study statistics as your studies are ongoing..",
        "Track data entry progress and outstanding queries.",
        "View verification status (SDV) for steps.",
        "ERIC introduces enhanced analytical dashboards."
      ]
    },
    {
      title: "Acheive Global Compliance Easily",
      points: [
        "Comply with global standards such as FDA CFR Part 11, GDPR (EU), ICH GCP, HIPAA (US), ISO 27001, and ISO 9001.",
        "Align with GCP, HL7 FHIR, and other regulatory guidelines.",
        "Adhere to GCP, HL7 FHIR, and other regulatory guidelines."
      ]
    },
  ];

  const toggleFeature = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <Navbar/>
    <section className="w-full py-20 mt-20">

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
  <img
    src="/worldmap/blob.svg"
    alt="footer background"
    className="w-[700px] md:w-[600px]"
  />
</div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Top Heading */}
        <h1 className="text-center text-3xl md:text-4xl font-semibold">
          Eric Electronic Data Capture(EDC)
        </h1>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
             Capture and Re-use Research Data 
              <span className="text-blue-600"> from anywhere and anytime</span>
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
             ERIC’s Electronic Data Capture (EDC) simplifies the process of capturing your trial data and integrating it seamlessly with other data in your clinical trial ecosystem. ERIC EDC offers one of the shortest build times, with more than 90% of our studies deployed within the first three weeks.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Explore ERIC EDC, our most robust module, to see how it can help you capture and manage all your study data in one centralized hub. If your needs extend further, easily incorporate ERIC eConsent and ePRO to build a comprehensive ecosystem of research tools.

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

    {/* Capture and Re-use Research Data from anywhere and anytime */}
    <section className="bg-[#0059B2] text-white py-20 ">

      <div className="max-w-4xl mx-auto px-6">

        {/* Section Heading */}
        <h2 className="text-center text-2xl font-bold mb-12 tracking-wide">
          Capture and Re-use Research Data from anywhere and anytime
        </h2>

        <p className="mb-12 tracking-wide text-sm">
            Explore ERIC EDC, our most robust module, to see how it can help you capture and manage all your study data in one centralized hub. If your needs extend further, easily incorporate ERIC eConsent and ePRO to build a comprehensive ecosystem of research tools.
        </p>

        <div className="space-y-6">

          {services.map((service, index) => (

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
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              {openIndex === index && (
                <ul className="mt-4 ml-7 space-y-2 text-sm text-blue-100 list-disc">
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}

            </div>

          ))}

        </div>
      </div>

    </section>



{/* Features */}
    <section className="bg-[#0059B2] text-white py-20">

      <div className="max-w-4xl mx-auto px-6">

        {/* Section Heading */}
        <h2 className="text-center text-2xl font-semibold mb-12 tracking-wide">
          FEATURES
        </h2>

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

    <Newsletter/>
    <Footer/>
    </>
  );
}