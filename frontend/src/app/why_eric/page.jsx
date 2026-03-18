"use client";

import { FaUserFriends, FaComments, FaCheckCircle, FaChartBar, FaBolt, FaExpand } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";

export default function WhyEricSection() {

  const router = useRouter();
  const features = [
    {
      icon: <FaUserFriends />,
      title: "Client-Centered Approach",
      desc: "We prioritize your goals, challenges, and milestones. Every solution we offer is tailored to your unique needs, ensuring the outcomes align with what matters most to you.",
    },
    {
      icon: <FaComments />,
      title: "Transparent Communication",
      desc: "Clear, honest communication forms the foundation of our partnerships. We keep you informed every step of the way with regular updates and open dialogue.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Proven Expertise",
      desc: "Our team combines deep industry knowledge with practical experience. Whether you're a startup or an established enterprise, we bring insights that drive smart, sustainable growth.",
    },
    {
      icon: <FaChartBar />,
      title: "Results That Matter",
      desc: "We don't just promise results—we deliver them. Our track record of success is built on measurable improvements in performance, productivity, and milestone achievement for our clients.",
    },
    {
      icon: <FaBolt />,
      title: "Technology-Driven Solutions",
      desc: "We harness the power of proprietary AI-driven technology to streamline processes, increase efficiency, and optimize cost. Innovation isn't an add-on—it's built into everything we do.",
    },
    {
      icon: <FaExpand />,
      title: "Scalable Partnerships",
      desc: "As your business evolves, so do we. We're here for the long term, offering long-term support that grows with you and adapts to your changing needs.",
    },
  ];

  return (
    <>
    <Navbar/>
    <section className="bg-gray-100 py-16 px-4 mt-20">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Why Eric Solutions?
        </h2>

        <p className="mt-4 text-blue-900 font-semibold tracking-wider text-2xl">
          Innovation · Integrity · Impact
        </p>

        <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
          At <span className="font-semibold">Eric Solutions LLC</span>, we do more than deliver services—we solve problems, create opportunities, and build lasting value for our clients. Here's why individuals and biopharmaceutical organizations choose us as their trusted partner.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex gap-4 text-left hover:shadow-lg transition"
            >
              <div className="bg-blue-900 text-white p-3 rounded-md text-lg h-10">
                {item.icon}
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16">
          <h3 className="text-xl md:text-2xl font-bold text-blue-900">
            Ready to Experience the Difference?
          </h3>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Join the growing number of organizations that trust Eric Solutions to drive their success. Let’s discuss how we can solve your challenges and unlock new opportunities together.
          </p>

          <button onClick={()=>{router.push('/contact')}} className="mt-6 px-6 py-3 bg-white font-semibold text-blue-900 shadow-md rounded-md hover:shadow-lg transition">
            Get Started Today 
          </button>
        </div>

      </div>
    </section>
    <Footer/>
    </>
    
  );
}