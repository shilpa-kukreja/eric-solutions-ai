"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

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
        "Manage key milestones and target site/enrollment metrics for each study country compared with overall study milestones",
        "Enrollment planning by country for target screening and enrollment as well as counts for actuals compared with subject screening and enrollment data.",
        "Planning of screening and enrollment targets by month and establish targets for subjects to complete treatment",
        "Data views allow quick comparison of target versus actuals and visualizations of differences with study planning metrics.",
        "Insight into country level planning and actuals vs study level expectations"
      ]
    },
    {
      title: "Site and Investigator Management",
      points: [
        "Site contact management including primary, alternate and site-specific details.",
        "Oversight of site selection and participation status across sites.",
        "Detailed enrollment planning and sub-study participation.",
        "Tracking of key milestones for study startup from CDA through enrollment.",
        "Study document tracking and file uploading for site essential documents.",
        "Detailed startup tracking for EC submissions, communications and site documents.",
        "Contract and budget management including invoice generation, partial payments and histories."
      ]
    },
    {
      title: "Subject Management",
      points: [
        "Manage key milestones and target site/enrollment metrics for each study country compared with overall study milestones.",
        "Enrollment planning by country for target screening and enrollment as well as counts for actuals compared with subject screening and enrollment data.",
        "Planning of screening and enrollment targets by month and establish targets for subjects to complete treatment",
        "Data views allow quick comparison of target versus actuals and visualizations of differences with study planning metrics.",
        "Insight into country level planning and actuals vs study level expectations"
      ]
    },
    {
      title: "Study Team Management",
      points: [
        "Team roster with CRA-site assignments, start/stop dates on project, roles and titles",
        "Ability for authorized users to trigger team member account invitations.",
        "Supports global team member collaboration with built in study view settings and country and site assignments appropriate to given person/team.",
        "Action item tracking by functional area with assignment to team members and ability to export.",
        "Study document development tracking area for monitoring plans, AE plans, etc.",
        "Training status by team member for defined study and team procedures."
      ]
    },
    {
      title: "CRA Workspace",
      points: [
        "Fully integrated site visit calendar for CRA visit planning and insight into visit report authoring progress.",
        "eVisit Report (EVR) authoring and approval features directly in the system.",
        "Supports site visit report tracking for EVRs and external reports with related visit letter and document upload features.",
        "Cumulative action item views and tracking supports content from EVRs as well as items directly added via the tab.",
        "Integrated alerts for action items and electronic visit reports.",
        "Integrated TMF repository for approved EVRs and attachments.",
        "Tools for CRA visits including interactive site map and shared repositories."
      ]
    },
    {
      title: "Study Team Management",
      points: [
        "Team roster with CRA-site assignments, start/stop dates on project, roles and titles",
        "Ability for authorized users to trigger team member account invitations.",
        "Supports global team member collaboration with built in study view settings and country and site assignments appropriate to given person/team.",
        "Action item tracking by functional area with assignment to team members and ability to export.",
        "Study document development tracking area for monitoring plans, AE plans, etc.",
        "Training status by team member for defined study and team procedures."
      ]
    },
    {
      title: "Study Team Management",
      points: [
        "Team roster with CRA-site assignments, start/stop dates on project, roles and titles",
        "Ability for authorized users to trigger team member account invitations.",
        "Supports global team member collaboration with built in study view settings and country and site assignments appropriate to given person/team.",
        "Action item tracking by functional area with assignment to team members and ability to export.",
        "Study document development tracking area for monitoring plans, AE plans, etc.",
        "Training status by team member for defined study and team procedures."
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
      title: "IWRS - Interactive Web Response System",
      text: "IWRS helps manage patient randomization, drug supply, and clinical trial workflows through secure web-based systems."
    },
    stock: {
      title: "Stock Management System",
      text: "Efficiently manage drug inventory, track supply levels, and ensure accurate distribution across clinical trial sites."
    },
    regulatory: {
      title: "Regulatory Compliance",
      text: "Maintain compliance with global regulatory standards ensuring accurate reporting, documentation, and audit readiness."
    }
  };


  
  return (
    <>
    <Navbar/>
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


    {/* features */}
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

      <p className="text-gray-200">
        {content[activeTab].text}
      </p>

    </div>

  </div>

</section>

    <Footer/>
    </>
  );
}