import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 py-12 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-3xl font-bold mb-4">TravelMate</h2>
          <p className="text-gray-200 mb-6">
            Explore the world with us and discover amazing deals on travel
            destinations across the globe.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#"
              className="hover:text-blue-800 transition-colors duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-gray-900 transition-colors duration-300"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              className="hover:text-orange-600 transition-colors duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-red-600 transition-colors duration-300"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/about"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-200">Email: info@travelmate.com</p>
          <p className="text-gray-200">Phone: +1 234 567 890</p>
          <p className="text-gray-200 mt-4">
            123 Travel St, Wanderlust City, World
          </p>
        </div>
      </div>

      <div className="mt-12 text-center border-t border-blue-800 pt-6">
        <p className="text-gray-200">© 2024 TravelMate. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
