"use client";

import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about-section py-16 px-8 bg-gray-50">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We are a team passionate about simplifying business operations for
          entrepreneurs. Our ERP system is designed to help business owners
          seamlessly track inventory, monitor daily profits, and gain real-time
          insights into their operations.
        </p>
        <p className="text-lg text-gray-700 mt-6 leading-relaxed">
          Whether you&apos;re managing a small shop or a growing enterprise, our
          system provides the tools you need to automate inventory flow, reduce
          human error, and make informed decisions every day. With a
          user-friendly interface and powerful analytics, we empower businesses
          to grow smarter and faster.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
