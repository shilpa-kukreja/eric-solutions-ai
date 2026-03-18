import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Cookie Policy | Eric Solutions",
  description: "Cookie Policy of Eric Solutions",
};

const CookiePolicy = () => {
  return (
    <>
    <Navbar/>
     <div className="bg-[#FEF0E1] min-h-screen py-10 px-4 mt-20">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-3">
          Cookie Policy
        </h1>

        <p className="text-sm text-gray-500 text-center mb-8">
          Last Updated on: 18 March 2026
        </p>

        {/* Content */}
        <div className="space-y-5 text-gray-700 leading-relaxed text-[15px]">

          <p>
            This Cookie Policy explains how <strong>Eric Solutions</strong> ("we", "us", and "our")
            uses cookies and similar technologies when you visit our website.
          </p>

          <p>
            By using our website, you consent to the use of cookies in accordance with this policy.
          </p>

          {/* Section */}
          <h2 className="text-xl font-semibold text-blue-900 mt-6">
            What Are Cookies?
          </h2>
          <p>
            Cookies are small text files that are stored on your device when you visit a website.
            They help improve user experience by remembering preferences and enabling certain
            functionalities.
          </p>

          <h2 className="text-xl font-semibold text-blue-900 mt-6">
            How We Use Cookies
          </h2>
          <p>
            We use cookies to enhance your browsing experience, analyze website traffic, and
            personalize content.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>To remember your preferences</li>
            <li>To improve website performance</li>
            <li>To analyze user behavior</li>
            <li>To deliver relevant advertisements</li>
          </ul>

          <h2 className="text-xl font-semibold text-blue-900 mt-6">
            Types of Cookies We Use
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Essential Cookies:</strong> Required for basic website functionality.
            </li>
            <li>
              <strong>Performance Cookies:</strong> Help us understand how users interact with the site.
            </li>
            <li>
              <strong>Functional Cookies:</strong> Remember your settings and preferences.
            </li>
            <li>
              <strong>Advertising Cookies:</strong> Used to show relevant ads.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-blue-900 mt-6">
            Third-Party Cookies
          </h2>
          <p>
            We may allow third-party services (such as analytics and advertising providers) to place
            cookies on your device to collect information about your online activities.
          </p>

          <h2 className="text-xl font-semibold text-blue-900 mt-6">
            Managing Cookies
          </h2>
          <p>
            Most web browsers allow you to control cookies through their settings. You can choose to
            block or delete cookies, but doing so may affect the functionality of the website.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Enable or disable cookies in browser settings</li>
            <li>Delete stored cookies anytime</li>
            <li>Set preferences for specific websites</li>
          </ul>

          <h2 className="text-xl font-semibold text-blue-900 mt-6">
            Changes to This Policy
          </h2>
          <p>
            We may update this Cookie Policy from time to time. Any changes will be posted on this
            page.
          </p>

          <h2 className="text-xl font-semibold text-blue-900 mt-6">
            Contact Us
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

export default CookiePolicy;