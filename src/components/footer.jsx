"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            {/* Logo */}
            <div className="mb-6">
              <Image
                src="/logo/4ca5a7f8-2549-424c-b958-b799f516603d.png"
                alt="Royal Oak Spa Logo"
                width={240}
                height={100}
                priority
                className="h-20 md:h-24 w-auto object-contain"
              />
            </div>

            {/* Contact Info */}
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-pink-500 mt-1 flex-shrink-0" />
                <p>
                  1st Floor, Susheela Building, D Wing,
                  18th June Rd, opposite Reborn Hair Beauty,
                  Altinho, Panaji, Goa 403001
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FaClock className="text-pink-500" />
                <span>10:00 AM - 11:00 PM</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-pink-500" />
                <a
                  href="tel:+918149279334"
                  className="hover:text-pink-500 transition"
                >
                  +91 81492 79334
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-pink-500" />
                <a
                  href="mailto:royaloakspa.panaji@gmail.com"
                  className="hover:text-pink-500 transition break-all"
                >
                  royaloakspa.panaji@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/royaloak.panaji/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-600 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/royaloakspa.panaji"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-600 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.linkedin.com/in/royal-oak-spa-panaji/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-600 transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://twitter.com/royaloakpanaji"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-600 transition"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://www.youtube.com/@royaloakspapanaji"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Useful Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-pink-500 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-pink-500 transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-pink-500 transition">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/offer" className="hover:text-pink-500 transition">
                  Offers
                </Link>
              </li>

              <li>
                <Link href="/gallery" className="hover:text-pink-500 transition">
                  Gallery
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-pink-500 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Services
            </h3>

            <ul className="space-y-3">
              <li>Full Body Massage</li>
              <li>Thai Massage</li>
              <li>Female to Male Massage</li>
              <li>Hot Oil Massage</li>
              <li>Deep Tissue Massage</li>
              <li>Swedish Massage</li>
            </ul>
          </div>

          {/* Booking Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Book Appointment
            </h3>

            <p className="text-sm text-gray-400 leading-7 mb-6">
              Experience luxury spa treatments and wellness therapies at
              Royal Oak Spa Panaji.
            </p>

            <a
              href="tel:+918149279334"
              className="block text-center bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-medium mb-4 transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/918149279334"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white py-3 rounded-lg font-medium transition"
            >
              WhatsApp Booking
            </a>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Royal Oak Spa. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}