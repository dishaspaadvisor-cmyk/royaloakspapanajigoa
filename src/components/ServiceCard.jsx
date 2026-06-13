"use client";

import Image from "next/image";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function ServiceCard({
    service,
    whatsappNumber,
    phoneNumber,
}) {
    return (
        <div className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            {/* Image */}
            <div className="relative h-72 overflow-hidden">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Premium Badge */}
                <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-pink-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                        Premium Spa
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
                <h2 className="text-xl font-bold text-gray-900">
                    {service.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-600 line-clamp-2">
                    {service.description}
                </p>

                <div className="mt-auto pt-4 flex gap-2">
                    <a
                        href={`https://wa.me/${whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1 rounded-full bg-green-500 px-2 py-2 text-xs font-semibold text-white transition hover:bg-green-600"
                    >
                        <FaWhatsapp />
                        WhatsApp
                    </a>

                    <a
                        href={`tel:${phoneNumber}`}
                        className="flex-1 flex items-center justify-center gap-1 rounded-full bg-pink-600 px-2 py-2 text-xs font-semibold text-white transition hover:bg-pink-700"
                    >
                        <FaPhoneAlt />
                        Call
                    </a>
                </div>
            </div>
        </div>
    );
}