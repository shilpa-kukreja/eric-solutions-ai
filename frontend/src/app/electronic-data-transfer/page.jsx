"use client";


import { useState } from "react";
import Image from "next/image";

export default function HeroSection() {

     const [openIndex, setOpenIndex] = useState(0);



      const features = [
    {
      title: "Portfolio Management",
      points: [
        "Provides consolidated views across studies with data import support for investigators, sites, and contacts.",
        "Offers calendar visibility for events scheduled within each study and by team members.",
        "Dashboards display portfolio and summary data points with visualizations by study, region, country, and monitor.",
        "Defines critical information at the study level including subject visit schedules and study milestones.",
        "The outsourcing tab offers a straightforward yet comprehensive overview of study components, identifying external vendors by task, country, and primary point of contact.",
        "Milestone management allows complete customization of key dates for study progress and events."
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
      title: "Portfolio Management",
      points: [
        "Provides consolidated views across studies with data import support for investigators, sites, and contacts.",
        "Offers calendar visibility for events scheduled within each study and by team members.",
        "Dashboards display portfolio and summary data points with visualizations by study, region, country, and monitor.",
        "Defines critical information at the study level including subject visit schedules and study milestones.",
        "The outsourcing tab offers a straightforward yet comprehensive overview of study components, identifying external vendors by task, country, and primary point of contact.",
        "Milestone management allows complete customization of key dates for study progress and events."
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

  const toggleFeature = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <section className="w-full bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Heading */}
        <h1 className="text-center text-3xl md:text-4xl font-semibold mb-16">
          Eric Clinical Trial Management Software (CTMS)
        </h1>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Scalable and Cost Effective
              <span className="text-blue-600"> Clinical Study Solutions</span>
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              ERIC CTMS is designed to provide the benefits of a Clinical Trial
              Management System (CTMS) without the substantial upfront financial
              and resource commitments typical of traditional enterprise systems
              or the inefficiencies inherent in spreadsheet trackers.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              ERIC CTMS offers drug developers a scalable and cost-effective
              solution to enhance management, performance, and reduce study
              startup costs in clinical trials.
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
    <section className="bg-blue-800 text-white py-20">

      <div className="max-w-4xl mx-auto px-6">

        {/* Section Heading */}
        <h2 className="text-center text-2xl font-semibold mb-12 tracking-wide">
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
    <section className="bg-blue-800 text-white py-20">

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
    </>
  );
}