"use client";

import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";

export default function OfferCards() {
  const phone = "918149279334";
  const whatsappNumber = "918149279334";

  const offers = [
    {
      image: "/offerimage/offer 1.png",
    },
    {
      image: "/offerimage/offer 2.png",
    },
    {
      image: "/offerimage/offer 3.png",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="inline-block px-5 py-2 rounded-full bg-pink-100 text-pink-600 text-xs font-bold uppercase tracking-widest">
            Royal Oak Spa
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
            Exclusive Spa Offers
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover premium spa experiences and special wellness packages.
          </p>
        </div>

        {/* Offer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[30px] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-[450px] sm:h-[500px] overflow-hidden">
                <Image
                  src={offer.image}
                  alt={`Offer ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/50 transition-all duration-500" />

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                  <div className="absolute -left-40 top-0 h-full w-24 rotate-12 bg-white/20 blur-xl group-hover:left-[120%] transition-all duration-1000" />
                </div>

                {/* Hover Buttons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                  <div className="flex flex-col sm:flex-row gap-4">
                    
                    {/* WhatsApp Button */}
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 text-white font-semibold shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-green-600"
                    >
                      <MessageCircle size={20} />
                      WhatsApp
                    </a>

                    {/* Call Button */}
                    <a
                      href={`tel:${phone}`}
                      className="flex items-center justify-center gap-2 rounded-full bg-pink-600 px-6 py-3 text-white font-semibold shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-pink-700"
                    >
                      <Phone size={20} />
                      Call Now
                    </a>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}