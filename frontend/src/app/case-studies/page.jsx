"use client";

import { FaFlask, FaChartLine, FaClock, FaUsers } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {useRouter} from "next/navigation";

export default function CaseStudiesSection() {

    const router = useRouter();
  const caseStudies = [
    {
      icon: <FaFlask />,
      title: "Accelerating Clinical Trials",
      desc: "Helped a biotech startup reduce trial timelines by 30% through digital workflow optimization and real-time data tracking.",
    },
    {
      icon: <FaChartLine />,
      title: "Improving Data Accuracy",
      desc: "Implemented automated validation systems that improved data accuracy by 45% for a mid-sized pharmaceutical company.",
    },
    {
      icon: <FaClock />,
      title: "Faster Regulatory Approval",
      desc: "Streamlined documentation and compliance processes, reducing approval delays and improving submission success rates.",
    },
    {
      icon: <FaUsers />,
      title: "Scaling Operations Efficiently",
      desc: "Enabled a growing CRO to scale operations across multiple regions with centralized dashboards and AI-powered insights.",
    },
  ];

  return (
    <>
    <Navbar/>

     <section className="bg-gray-100 py-16 px-4 mt-20">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Case Studies
        </h2>

        <p className="mt-4 text-blue-900 font-semibold tracking-wide">
          Real Results · Real Impact · Proven Success
        </p>

        <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
          Explore how <span className="font-semibold">Eric Solutions LLC</span> has helped organizations overcome challenges, optimize clinical trials, and achieve measurable success through innovation and expertise.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {caseStudies.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-900 text-white p-3 rounded-md text-lg">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>

              <button className="mt-4 text-blue-900 font-medium hover:underline">
                Read More →
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <h3 className="text-xl md:text-2xl font-bold text-blue-900">
            Want to See More Success Stories?
          </h3>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Discover how we can bring the same level of innovation and efficiency to your organization. Let’s build your next success story together.
          </p>

          <button onClick={()=>{router.push('/contact')}} className="mt-6 px-6 py-3 bg-blue-900 text-white shadow-md rounded-md hover:shadow-lg transition">
            Contact Us
          </button>
        </div>

      </div>
    </section>

    <Footer/>
    </>
   
  );
}