"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X } from "lucide-react";

const galleryImages = [
  {
    image: "/gallery/galleryimage (11).jpg",
  },
  {
    image: "/gallery/galleryimage (9).jpg",
  },
  {
    image: "/gallery/galleryimage (3).jpg",
  },
  {
    image: "/gallery/galleryimage (1).jpeg",
  },
  {
    image: "/gallery/galleryimage (2).jpeg",
  },
  {
    image: "/gallery/galleryimage (3).jpeg",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="relative bg-gradient-to-b from-white via-pink-50 to-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold text-pink-600">
            Luxury Gallery
          </span>

          <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Explore Our Spa Gallery
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-pink-500"></div>

          <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base text-gray-600 leading-relaxed">
            Discover our luxurious spa rooms, premium wellness spaces,
            and relaxing ambience designed to deliver complete comfort
            and rejuvenation.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              onClick={() => setSelectedImage(item)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg"
            >
              {/* Image */}
              <div className="relative h-[180px] sm:h-[220px] md:h-[250px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={`Gallery ${index + 1}`}
                  fill
                  quality={100}
                  sizes="(max-width:768px) 50vw, 33vw"
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-lg">
                  <Eye size={16} />
                  View
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              className="absolute right-4 top-4 z-50 rounded-full bg-white p-3 text-black shadow-lg transition hover:scale-110 sm:right-6 sm:top-6"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>

            {/* Large Image */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative h-[80vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.image}
                alt="Gallery Image"
                fill
                quality={100}
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}