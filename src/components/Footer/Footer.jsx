import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-yellow-400">TravelPro</h2>
          <p className="text-sm text-gray-300">
            Discover the world with us. We offer the best travel packages and unforgettable experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400">Packages</a></li>
            <li><a href="#" className="hover:text-yellow-400">About</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-300">Email: support@travelpro.com</p>
          <p className="text-sm text-gray-300">Phone: +880 1234 567890</p>
          <p className="text-sm text-gray-300 mb-4">Address: Dhaka, Bangladesh</p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="text-yellow-400 hover:text-white transition">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="text-yellow-400 hover:text-white transition">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="text-yellow-400 hover:text-white transition">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="text-yellow-400 hover:text-white transition">
              <FaYoutube size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} TravelPro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
