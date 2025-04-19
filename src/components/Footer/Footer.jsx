import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 text-white bg-gray-900">
      <div className="grid max-w-6xl grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-3">
        {/* About */}
        <div>
          <h2 className="mb-4 text-xl font-semibold text-yellow-400">TravelPro</h2>
          <p className="text-sm text-gray-300">
            Discover the world with us. We offer the best travel packages and unforgettable experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400">Packages</a></li>
            <li><a href="#" className="hover:text-yellow-400">About</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info & Social */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
          <p className="text-sm text-gray-300">Email: shamimahmadahnaf@gmail.com</p>
          <p className="text-sm text-gray-300">Phone: +880 1748186766, 01875822624</p>
          <p className="mb-4 text-sm text-gray-300">Address: Gazipur, Dhaka, Bangladesh</p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="https://www.facebook.com/share/1YAwFEiRgN/" className="text-yellow-400 transition hover:text-white">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="text-yellow-400 transition hover:text-white">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="text-yellow-400 transition hover:text-white">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="text-yellow-400 transition hover:text-white">
              <FaYoutube size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="pt-4 mt-8 text-sm text-center text-gray-400 border-t border-gray-700">
        © {new Date().getFullYear()} TravelPro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
