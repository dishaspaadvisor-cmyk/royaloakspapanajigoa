"use client";

import ServiceCard from "@/components/ServiceCard";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function ServicesPage() {
  const whatsappNumber = "918149279334";
  const phoneNumber = "+918149279334";

  const services = [
    {
      title: "Full Body Massage",
      image: "/servicesimage/servicesimg (1).jpg",
      description:
        "Relax your entire body with soothing techniques that ease stress, improve circulation, and restore balance.",
    },
    {
      title: "Thai Massage",
      image: "/servicesimage/servicesimg (2).jpeg",
      description:
        "Traditional stretching and pressure therapy that improves flexibility, energy flow, and overall wellness.",
    },
    {
      title: "Female to Male Massage",
      image: "/servicesimage/servicesimg (1).jpeg",
      description:
        "Professional wellness therapy designed to relieve muscle tension and promote complete relaxation.",
    },
    {
      title: "Hot Oil Massage",
      image: "/servicesimage/servicesimg (2).jpg",
      description:
        "Warm aromatic oils nourish the skin while delivering deep relaxation and muscle comfort.",
    },
    {
      title: "Swedish Massage",
      image: "/servicesimage/servicesimg (3).jpg",
      description:
        "Gentle flowing strokes that improve circulation and leave you refreshed and rejuvenated.",
    },
    {
      title: "Jacuzzi Massage",
      image: "/servicesimage/servicesimg (4).jpg",
      description:
        "Luxurious Jacuzzi therapy that helps relax muscles, reduce stress, and restore vitality.",
    },
    {
      title: "Foot Reflexology",
      image: "/servicesimage/servicesimg (5).jpg",
      description:
        "A therapeutic foot treatment stimulating pressure points for total body wellness.",
    },
    {
      title: "Deep Tissue Massage",
      image: "/servicesimage/servicesimg (6).jpg",
      description:
        "Targets deeper muscle layers to release tension, stiffness, and chronic aches.",
    },
  ];



  return (
    <section className="bg-gradient-to-b from-pink-50 via-white to-pink-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold text-pink-600">
            Royal Oak Spa
          </span>

          <h1 className="mt-6 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
            Our Premium Services
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-gray-600 lg:text-lg">
            Discover luxury wellness therapies designed to relax your body,
            refresh your mind, and restore inner balance with premium spa
            treatments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              whatsappNumber={whatsappNumber}
              phoneNumber={phoneNumber}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 rounded-[32px] bg-white p-8 text-center shadow-xl lg:p-12">
          <h3 className="text-3xl font-bold text-gray-900">
            No 1 Spa in Goa Panaji 
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Book your spa appointment today and enjoy premium wellness
            treatments tailored to refresh your body and mind.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-8 py-4 font-semibold text-white transition hover:bg-green-600"
            >
              <FaWhatsapp />
              Book on WhatsApp
            </a>

            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-pink-600 px-8 py-4 font-semibold text-white transition hover:bg-pink-700"
            >
              <FaPhoneAlt />
              Call For Booking
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}