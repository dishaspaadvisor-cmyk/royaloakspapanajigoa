"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Award,
  Users,
  Star,
  ShieldCheck,
} from "lucide-react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function AboutPage() {
  const whatsappNumber = "+918149279334";
  const phoneNumber = " +918149279334";
  const stats = [
    {
      icon: <Award size={30} />,
      number: "5+",
      title: "Years Experience",
    },
    {
      icon: <ShieldCheck size={30} />,
      number: "100%",
      title: "Certified Therapists",
    },
    {
      icon: <Users size={30} />,
      number: "500+",
      title: "Happy Clients",
    },
    {
      icon: <Star size={30} />,
      number: "4.9",
      title: "Customer Rating",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-rose-50 py-14 sm:py-20 lg:py-28">
      {/* Background Blur Effects */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="inline-flex items-center rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold text-pink-600">
            Royal Oak Spa Panaji
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Luxury Spa &
            <span className="block text-pink-600">
              Best Spa Massage Services Available 
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1.5 w-28 rounded-full bg-pink-500" />

          <p className="mx-auto mt-6 max-w-3xl text-gray-600 text-base sm:text-lg leading-relaxed">
            Discover a peaceful escape where luxury, wellness, and rejuvenation
            come together to create unforgettable spa experiences.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[35px] border border-white/50 bg-white/40 backdrop-blur-lg shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
              <Image
                src="/about/aboutimage.png"
                alt="Royal Oak Spa Panaji"
                width={700}
                height={800}
                className="h-[350px] sm:h-[450px] lg:h-[650px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Rating Card */}
            <div className="absolute bottom-4 left-4 sm:-bottom-6 sm:left-6 rounded-3xl border border-pink-100 bg-white/95 p-4 sm:p-5 shadow-2xl backdrop-blur-lg">
              <div className="flex items-center gap-3">
                <Star
                  size={26}
                  className="fill-yellow-400 text-yellow-400"
                />
                <div>
                  <h4 className="font-bold text-gray-900">
                    4.9 Customer Rating
                  </h4>
                  <p className="text-sm text-gray-500">
                    Trusted by 500+ Clients
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
              About Us
            </span>

            <h3 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                 Best Spa in Goa Panaji 
            </h3>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-600">
              At Royal Oak Spa Panaji, we believe wellness is more than
              relaxation. Our luxurious spa environment is designed to help you
              disconnect from stress and reconnect with inner peace.
            </p>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-gray-600">
              Our experienced therapists provide personalized treatments using
              premium techniques and carefully selected products to ensure every
              visit leaves you refreshed, revitalized, and completely relaxed.
            </p>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-gray-600">
              Whether you're seeking deep relaxation, stress relief, or a
              premium spa escape, we offer exceptional wellness experiences
              tailored to your needs.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-green-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-600"
              >
                <FaWhatsapp size={22} />
                WhatsApp
              </a>

              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-pink-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-pink-700"
              >
                <FaPhoneAlt />
                Call
              </a>
            </div>
          </motion.div>
        </div>

        {/* Trust Badge */}
        <div className="mt-20 flex justify-center">
          <div className="rounded-full bg-pink-100 px-6 py-3 text-sm sm:text-base font-semibold text-pink-700 shadow-md">
            ✨ Trusted by Hundreds of Happy Clients
          </div>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group rounded-3xl border border-pink-100 bg-gradient-to-br from-white to-pink-50 p-6 sm:p-8 text-center shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-pink-100 text-pink-600 transition-all duration-300 group-hover:bg-pink-600 group-hover:text-white">
                {item.icon}
              </div>

              <h4 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                {item.number}
              </h4>

              <p className="mt-2 text-sm sm:text-base text-gray-600">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}