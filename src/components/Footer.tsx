"use client";

const Footer = () => {
  return (
    <footer className="bg-[var(--background)] border-t border-[var(--border)] text-[var(--foreground)] py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-[var(--primary)]">
            KeDA Tech
          </h2>
          <p className="mt-2 text-[var(--foreground)]">
            Simplifying Business Management with Cutting-Edge Technology.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[var(--primary)]">
            Navigasi
          </h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a
                href="#home"
                className="hover:text-[var(--primary)] text-white"
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:text-[var(--primary)] text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="hover:text-[var(--primary)] text-white"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-[var(--primary)] text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-[var(--primary)]">
            Contact
          </h3>
          <p className="mt-2">
            Email:{" "}
            <a
              href="mailto:daffarayhan18@gmail.com"
              className="hover:text-[var(--primary)]"
            >
              daffarayhan18@gmail.com
            </a>
          </p>
          <p>
            WhatsApp:{" "}
            <a
              href="https://wa.me/6282211359531"
              className="hover:text-[var(--primary)]"
            >
              +62 822-1135-9531
            </a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-6 border-t border-[var(--border)] pt-4">
        © {new Date().getFullYear()} KeDA Tech. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
