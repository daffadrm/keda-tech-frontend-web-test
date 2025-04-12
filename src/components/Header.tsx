"use client";

import { useState, useEffect } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  if (!isClient) return null;

  return (
    <header className="fixed top-0 left-0 w-full bg-white py-4 px-6 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-[var(--primary)] font-bold text-2xl">KeDA Tech</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 ml-auto mr-5 font-semibold text-lg">
          <button
            className="text-gray-700 hover:text-[var(--primary)] transition-colors"
            onClick={() => scrollToSection("home")}
          >
            BERANDA
          </button>
          <button
            className="text-gray-700 hover:text-[var(--primary)] transition-colors"
            onClick={() => scrollToSection("about")}
          >
            ABOUT
          </button>
          <button
            className="text-gray-700 hover:text-[var(--primary)] transition-colors"
            onClick={() => scrollToSection("pricing")}
          >
            PRICING
          </button>
          <button
            className="text-gray-700 hover:text-[var(--primary)] transition-colors"
            onClick={() => scrollToSection("contact")}
          >
            CONTACT
          </button>
        </nav>

        {/* Desktop Login Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="hidden md:inline-block py-2 px-4 rounded-lg text-sm transition border-2 border-[var(--primary)] hover:bg-gradient-to-r text-[var(--primary)] hover:text-white hover:from-[#375dff] hover:to-[#5067ff] min-w-[150px] text-center shadow-md"
        >
          Login
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen ? "true" : "false"}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 mt-2 p-4 space-y-3 text-center">
          <button
            className="text-gray-700 hover:text-[var(--primary)] transition-colors text-left w-full"
            onClick={() => scrollToSection("home")}
          >
            Beranda
          </button>
          <button
            className="text-gray-700 hover:text-[var(--primary)] transition-colors text-left w-full"
            onClick={() => scrollToSection("product")}
          >
            Product
          </button>
          <button
            className="text-gray-700 hover:text-[var(--primary)] transition-colors text-left w-full"
            onClick={() => scrollToSection("about")}
          >
            Tentang Kami
          </button>
          <button
            className="text-gray-700 hover:text-[var(--primary)] transition-colors text-left w-full"
            onClick={() => scrollToSection("contact")}
          >
            Hubungi Kami
          </button>

          <button
            onClick={() => setIsModalOpen(true)}
            className="block bg-gradient-to-r from-[#4f81e7] to-[#6a98ff] text-white py-2 px-4 rounded-lg text-sm transition hover:bg-gradient-to-r hover:from-[#375dff] hover:to-[#5067ff] shadow-md"
          >
            Login
          </button>
        </nav>
      )}

      {/* Login Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-96 shadow-xl transform transition-transform duration-300 scale-95 hover:scale-100">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              Login
            </h2>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="********"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-[#4f81e7] to-[#6a98ff] text-white font-semibold rounded-lg hover:bg-gradient-to-r hover:from-[#375dff] hover:to-[#5067ff] transition duration-300 shadow-md"
              >
                Login
              </button>
            </form>

            <button
              onClick={() => setIsModalOpen(false)} // Close modal
              className="absolute top-2 right-2 text-gray-600 text-2xl"
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
