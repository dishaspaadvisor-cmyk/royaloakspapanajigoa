"use client";

import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  const phone = "918149279334";

  return (
    <div className="fixed right-4 bottom-6 z-50 flex flex-col gap-3">
      
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${phone}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-xl hover:scale-110 hover:bg-green-600 transition-all duration-300 animate-bounce"
      >
        <FaWhatsapp size={30} />
      </a>

      {/* Call */}
      <a
        href={`tel:${phone}`}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-pink-600 text-white shadow-xl hover:scale-110 hover:bg-pink-700 transition-all duration-300"
      >
        <Phone size={26} />
      </a>

    </div>
  );
}