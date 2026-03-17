"use client";

export default function PrivacyPolicy() {
  return (
    <main className="bg-gray-50 min-h-screen pt-28 pb-20 px-6">

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and safeguard your information when you visit our
          website.
        </p>
      </section>

      {/* Policy Content */}
      <section className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-10 space-y-10">

        {/* Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Information We Collect
          </h2>

          <p className="text-gray-600 leading-relaxed">
            We may collect personal information such as your name, email
            address, phone number, and other details when you interact with our
            website, submit forms, or contact us directly.
          </p>
        </div>

        {/* Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How We Use Your Information
          </h2>

          <p className="text-gray-600 leading-relaxed">
            The information we collect may be used to improve our services,
            respond to inquiries, personalize user experience, and provide
            updates related to our services and offerings.
          </p>
        </div>

        {/* Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Cookies and Tracking Technologies
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Our website may use cookies and similar technologies to enhance your
            browsing experience and gather analytics about website usage. You
            can disable cookies in your browser settings if you prefer.
          </p>
        </div>

        {/* Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Data Security
          </h2>

          <p className="text-gray-600 leading-relaxed">
            We implement industry-standard security measures to protect your
            personal information from unauthorized access, disclosure, or
            misuse.
          </p>
        </div>

        {/* Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Third-Party Services
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices of those websites and
            encourage you to review their privacy policies.
          </p>
        </div>

        {/* Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Updates to This Policy
          </h2>

          <p className="text-gray-600 leading-relaxed">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date.
          </p>
        </div>

        {/* Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Contact Us
          </h2>

          <p className="text-gray-600 leading-relaxed">
            If you have any questions about this Privacy Policy or how your
            information is handled, please contact us through our website.
          </p>
        </div>

      </section>

    </main>
  );
}