"use client";

import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="contact-section py-16 px-8 bg-white">
      <div className="max-w-screen-md mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Contact Us
        </h2>

        {/* Contact Info */}
        <div className="mb-10 text-center text-gray-600">
          <p>
            Interested in our ERP system or need support? Let’s get in touch!
          </p>
          <p className="mt-2">
            Email:{" "}
            <a
              href="mailto:daffarayhan18@gmail.com"
              className="text-blue-600 hover:underline"
            >
              daffarayhan18@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="https://wa.me/6282211359531"
              className="text-blue-600 hover:underline"
            >
              +62 822 1135 9532
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <form className="bg-gray-50 p-6 rounded-lg shadow-md space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your full name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="you@business.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Support, Demo Request, Pricing, etc."
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Tell us how we can help you..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
