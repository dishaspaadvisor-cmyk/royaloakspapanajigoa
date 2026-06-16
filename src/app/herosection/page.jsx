"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Star,
  Users,
  MapPin,
  Clock,
  Phone,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const slides = [
  {
    image: "/heroimage/heroimg (1).jpeg",
    title: "Experience Goa's Finest Luxury Spa",
    subtitle:
      "Indulge in world-class massage therapies designed to relax your body, calm your mind, and restore inner balance.",
  },
  {
    image: "/heroimage/heroimg (2).jpeg",
    title: "Expert Therapists, Premium Care",
    subtitle:
      "Enjoy personalized wellness treatments delivered by experienced professionals in a serene environment.",
  },
  {
    image: "/heroimage/heroimg (3).jpeg",
    title: "Best spa in goa ",
    subtitle:
      "Escape daily stress and experience complete relaxation with our luxury spa therapies.",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const phoneNumber = "+918149279334";
  const whatsappNumber = "918149279334";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.08 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.2 },
            scale: { duration: 5, ease: "easeOut" },
          }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Luxury Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="max-w-3xl text-white">
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 backdrop-blur-md"
            >
              <Sparkles size={16} className="text-pink-400" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">
                Goa's Premium Luxury Spa
              </span>
            </motion.div>

            {/* Animated Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.7 }}
              >
                <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                  <span className="bg-gradient-to-r from-white via-pink-100 to-pink-400 bg-clip-text text-transparent">
                    {slides[currentSlide].title}
                  </span>
                </h1>

                <p className="mb-10 max-w-2xl text-lg font-light leading-relaxed text-gray-200 md:text-2xl">
                  {slides[currentSlide].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Stats */}
            <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                <Star className="mb-2 text-yellow-400" size={24} />
                <h3 className="font-bold">4.9 Rating</h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                <Users className="mb-2 text-pink-400" size={24} />
                <h3 className="font-bold">500+ Clients</h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                <MapPin className="mb-2 text-green-400" size={24} />
                <h3 className="font-bold">Panaji Goa</h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                <Clock className="mb-2 text-blue-400" size={24} />
                <h3 className="font-bold">10AM - 11PM</h3>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${phoneNumber}`}
                className="group flex items-center justify-center gap-2 rounded-full bg-pink-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-pink-700 sm:px-8 sm:py-4 sm:text-base"
              >
                <Phone size={18} className="sm:w-5 sm:h-5" />
                Call Now
                <ChevronRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-600 sm:px-8 sm:py-4 sm:text-base"
              >
                <FaWhatsapp size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-20 left-1/2 z-20 h-1 w-56 -translate-x-1/2 overflow-hidden rounded-full bg-white/20">
        <motion.div
          key={currentSlide}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 5,
            ease: "linear",
          }}
          className="h-full bg-pink-500"
        />
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all duration-300 ${currentSlide === index
                ? "h-3 w-10 bg-pink-500"
                : "h-3 w-3 bg-white/50"
              }`}
          />
        ))}
      </div>
    </section>
  );
}