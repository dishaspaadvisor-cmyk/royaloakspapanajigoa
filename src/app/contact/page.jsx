"use client";

import { useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const spaInfo = {
    name: "Royal Oak Spa",
    phone: "+918149279334",
    whatsapp: "+918149279334",
    location: " 1st Floor, Susheela Building, D Wing, 18th June Rd, opposite Reborn Hair Beauty, Altinho, Panaji, Goa 403001",
    email:"royaloakspa.panaji@gmail.com",
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    const message = `
🌸 New Spa Appointment Request 🌸

Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}

Message:
${form.message}

Please contact me regarding my appointment.
`;

    window.open(
      `https://wa.me/${spaInfo.whatsapp}?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );

    setForm({
      name: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section className="bg-gradient-to-br from-pink-50 via-white to-purple-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold text-pink-600">
            Contact {spaInfo.name}
          </span>

          <h1 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Experience Pure Relaxation & Wellness
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-gray-600">
            Discover a sanctuary of peace and wellness with our luxury spa
            treatments designed to relax your body, calm your mind, and refresh
            your spirit.
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Left Side */}
          <div className="space-y-6 lg:col-span-2">
            {/* Location */}
            <div className="rounded-3xl bg-white p-6 shadow-xl transition duration-300 hover:-translate-y-1">
              <MapPin className="mb-4 text-pink-600" size={34} />

              <h3 className="text-xl font-bold text-gray-900">
                Our Location
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600">
                {spaInfo.name}
                <br />
                Luxury Wellness & Relaxation Center
                <br />
                {spaInfo.location}
              </p>
            </div>

            {/* Call */}
            <div className="rounded-3xl bg-white p-6 shadow-xl transition duration-300 hover:-translate-y-1">
              <Phone className="mb-4 text-pink-600" size={34} />

              <h3 className="text-xl font-bold text-gray-900">Call Us</h3>

              <a
                href={`tel:${spaInfo.phone}`}
                className="mt-3 block text-gray-600 transition hover:text-pink-600"
              >
                {spaInfo.phone}
              </a>
            </div>

            {/* Hours */}
            <div className="rounded-3xl bg-white p-6 shadow-xl transition duration-300 hover:-translate-y-1">
              <Clock className="mb-4 text-pink-600" size={34} />

              <h3 className="text-xl font-bold text-gray-900">
                Opening Hours
              </h3>

              <p className="mt-3 text-gray-600">
                Monday - Sunday
                <br />
                10:00 AM - 10:00 PM
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href={`https://wa.me/${spaInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-green-500 py-4 font-semibold text-white transition duration-300 hover:bg-green-600"
              >
                <FaWhatsapp size={20} />
                WhatsApp
              </a>

              <a
                href={`tel:${spaInfo.phone}`}
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-pink-600 py-4 font-semibold text-white transition duration-300 hover:bg-pink-700"
              >
                <Phone size={18} />
                Call
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-[32px] border border-white/30 bg-white/80 p-8 shadow-2xl backdrop-blur-lg md:p-10">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900">
                  Appointment Request
                </h2>

                <p className="mt-2 text-gray-600">
                  Fill in your details and we'll connect with you instantly.
                </p>
              </div>

              <form onSubmit={submitForm} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-pink-500"
                />
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-pink-500"
                />

                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-pink-500"
                >
                  <option value="">Select Service</option>
                  <option>Full Body Massage</option>
                  <option>Hot Tub Massage Tharapy</option>
                  <option>Turkish & Moraccan Hammam</option>
                  <option>Hot Oil Massage</option>
                  <option>Deep Tissue</option>
                  <option>Aroma Tharapy</option>
                </select>

                <textarea
                  rows={5}
                  name="message"
                  placeholder="Write your requirements..."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-pink-500"
                />

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 py-4 font-semibold text-white transition duration-300 hover:scale-[1.02]"
                >
                  <Send size={18} />
                  Send Booking Request
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-16 overflow-hidden rounded-[32px] shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.784816432701!2d73.82045387588519!3d15.496002554527006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc1bd454c68a5%3A0x86f1928cc498e0e1!2sRoyal%20Oak%20Spa%20-%20Spa%20In%20Goa!5e0!3m2!1sen!2sin!4v1781182094778!5m2!1sen!2sin"
            className="h-[350px] w-full md:h-[500px]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
}