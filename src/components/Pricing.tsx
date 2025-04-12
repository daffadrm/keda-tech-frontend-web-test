"use client";

import React from "react";

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="pricing-section py-16 px-8 bg-gray-50">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Pricing Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* TIER 1 - Basic */}
          <div className="pricing-card bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Tier 1 - Basic
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Perfect for small business owners who need essential features.
            </p>
            <div className="text-4xl font-bold text-blue-600 mb-4">
              $9.99 / month
            </div>
            <ul className="text-left text-gray-700 mb-6 space-y-2">
              <li>✔️ Record Incoming Goods</li>
              <li>✔️ Record Outgoing Goods</li>
              <li>✔️ Track Daily Profit</li>
            </ul>
            <a className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
              Start Free Trial
            </a>
          </div>

          {/* TIER 2 - Business */}
          <div className="pricing-card bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Tier 2 - Business
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Ideal for growing businesses that need deeper insights.
            </p>
            <div className="text-4xl font-bold text-blue-600 mb-4">
              $24.99 / month
            </div>
            <ul className="text-left text-gray-700 mb-6 space-y-2">
              <li>✔️ Record Incoming & Outgoing Goods</li>
              <li>✔️ Track Daily Profit</li>
              <li>✔️ Sales Analysis with Charts</li>
              <li>✔️ 24/7 Support</li>
            </ul>
            <a className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
              Start Free Trial
            </a>
          </div>

          {/* TIER 3 - Entrepreneur */}
          <div className="pricing-card bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Tier 3 - Entrepreneur
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Designed for entrepreneurs who want advanced control and
              predictions.
            </p>
            <div className="text-4xl font-bold text-blue-600 mb-4">
              $49.99 / month
            </div>
            <ul className="text-left text-gray-700 mb-6 space-y-2">
              <li>✔️ Record Incoming & Outgoing Goods</li>
              <li>✔️ Track Daily Profit</li>
              <li>✔️ Sales Analysis with Charts</li>
              <li>✔️ 24/7 Support</li>
              <li>✔️ Export Data to Excel</li>
              <li>✔️ AI-Based Income Prediction</li>
            </ul>
            <a className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
