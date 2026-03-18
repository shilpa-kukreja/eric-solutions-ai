import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-[#FEF0E1] min-h-screen py-10 px-4 mt-20">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3 text-center">
          Privacy Policy
        </h1>

        <p className="text-sm text-gray-500 text-center mb-8">
          Last Updated on: 12 May 2025 at 12:54
        </p>

        {/* Content */}
        <div className="space-y-5 text-gray-700 leading-relaxed text-[15px]">

          <p>
            This Privacy Policy describes how <strong>Eric Solutions</strong> ("we," "us," or "our")
            collects, uses, and discloses your personal information when you use our services.
          </p>

          <p>
            By accessing or using our services, you agree to this Privacy Policy. If you do not agree,
            please do not use our services.
          </p>

          {/* Section */}
          <h2 className="text-xl font-semibold text-blue-900 mt-6">
            Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page.
          </p>

          <h2 className="text-xl font-semibold text-blue-900 mt-6">
            Information We Collect
          </h2>
          <p>
            We collect personal information such as your name, email, phone number, and address
            when you interact with our services.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Contact details (name, email, phone)</li>
            <li>Order & transaction details</li>
            <li>Account information</li>
            <li>Customer support messages</li>
          </ul>

          <h2 className="text-xl font-semibold text-blue-900 mt-6">
            Cookies & Tracking
          </h2>
          <p>
            We use cookies to improve your experience, analyze traffic, and personalize content.
          </p>

          <h2 className="text-xl font-semibold text-blue-900 mt-6">
            How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and manage services</li>
            <li>To process payments and orders</li>
            <li>For marketing and communication</li>
            <li>To enhance security and prevent fraud</li>
          </ul>

          <h2 className="text-xl font-semibold text-blue-900 mt-6">
            Sharing of Information
          </h2>
          <p>
            We may share your data with trusted third-party services like payment processors and analytics providers.
          </p>

          <h2 className="text-xl font-semibold text-blue-900 mt-6">
            Your Rights
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your data</li>
            <li>Request deletion</li>
            <li>Correct inaccurate data</li>
            <li>Opt-out of marketing</li>
          </ul>

          <h2 className="text-xl font-semibold text-blue-900 mt-6">
            Security
          </h2>
          <p>
            We take reasonable measures to protect your data, but no method is 100% secure.
          </p>

          <h2 className="text-xl font-semibold text-blue-900 mt-6">
            Contact Us
          </h2>
          <p>
            If you have any questions, contact us at:
            <br />
            📧 Info@ericsolutions.com
            <br />
            📞 (+1) 786-636-5556
          </p>

        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default PrivacyPolicy;