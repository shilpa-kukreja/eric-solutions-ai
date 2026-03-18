import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Terms & Conditions | Eric Solutions",
  description: "Terms and Conditions of Eric Solutions",
};

const Terms = () => {
  return (
    <>
    <Navbar/>
<div className="bg-[#FEF0E1] min-h-screen py-10 px-4 mt-20">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-3">
          Terms & Conditions
        </h1>

        <p className="text-sm text-gray-500 text-center mb-8">
          Last Updated on: 11 April 2025 at 10:54
        </p>

        {/* Content */}
        <div className="space-y-5 text-gray-700 leading-relaxed text-[15px]">

          <p>
            This website is operated by <strong>Eric Solutions</strong>. By accessing or using our
            website, you agree to be bound by these Terms & Conditions.
          </p>

          <p>
            These terms apply to all users including browsers, customers, vendors, and contributors.
            If you do not agree, please do not use our services.
          </p>

          {/* Section */}
          <h2 className="text-xl font-semibold text-blue-900 mt-6">
            Online Store Terms
          </h2>
          <p>
            You must be at least the age of majority to use this site. You agree not to use our
            services for any illegal or unauthorized purposes.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>No illegal activities</li>
            <li>No spreading viruses or harmful code</li>
            <li>Compliance with applicable laws</li>
          </ul>

          <h2 className="text-xl font-semibold text-blue-900 mt-6">
            General Conditions
          </h2>
          <p>
            We reserve the right to refuse service to anyone at any time. Content transmission over
            networks may not always be encrypted except payment data.
          </p>

          <h2 className="text-xl font-semibold text-blue-900 mt-6">
            Accuracy of Information
          </h2>
          <p>
            We are not responsible if information on this site is not accurate, complete, or current.
            Use it at your own risk.
          </p>

          <h2 className="text-xl font-semibold text-blue-900 mt-6">
            Modifications to Services & Pricing
          </h2>
          <p>
            Prices and services may change at any time without notice.
          </p>

          <h2 className="text-xl font-semibold text-blue-900 mt-6">
            Products & Services
          </h2>
          <p>
            Some products may be available exclusively online and may have limited quantities. We
            try to display product details accurately but cannot guarantee exact representation.
          </p>

          <h2 className="text-xl font-semibold text-blue-900 mt-6">
            Billing & Account Information
          </h2>
          <p>
            You agree to provide accurate billing details. We may cancel or limit orders at our
            discretion.
          </p>

          <h2 className="text-xl font-semibold text-blue-900 mt-6">
            Third-Party Tools & Links
          </h2>
          <p>
            We may provide access to third-party tools and links. We are not responsible for their
            content or accuracy.
          </p>

          <h2 className="text-xl font-semibold text-blue-900 mt-6">
            User Content
          </h2>
          <p>
            Any content submitted by users may be used by us without restriction. You are responsible
            for your submissions.
          </p>

          <h2 className="text-xl font-semibold text-blue-900 mt-6">
            Prohibited Uses
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Illegal activities</li>
            <li>Harassment or abuse</li>
            <li>Spreading malware</li>
            <li>Data scraping or spamming</li>
          </ul>

          <h2 className="text-xl font-semibold text-blue-900 mt-6">
            Disclaimer & Liability
          </h2>
          <p>
            We do not guarantee uninterrupted service. Use of our services is at your own risk.
            Eric Solutions is not liable for any damages arising from usage.
          </p>

          <h2 className="text-xl font-semibold text-blue-900 mt-6">
            Indemnification
          </h2>
          <p>
            You agree to indemnify and hold Eric Solutions harmless from any claims arising from
            your violation of these terms.
          </p>

          <h2 className="text-xl font-semibold text-blue-900 mt-6">
            Governing Law
          </h2>
          <p>
            These terms are governed by the laws of India.
          </p>

          <h2 className="text-xl font-semibold text-blue-900 mt-6">
            Changes to Terms
          </h2>
          <p>
            We may update these terms anytime. Continued use of the website means you accept the
            updated terms.
          </p>

          <h2 className="text-xl font-semibold text-blue-900 mt-6">
            Contact
          </h2>
          <p>
            📧 Info@ericsolutions.com <br />
            📞 (+1) 786-636-5556 <br />
            📍 621 E Tropical Way Plantation, FLorida 33317

          </p>

        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  );
};

export default Terms;