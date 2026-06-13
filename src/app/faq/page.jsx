"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What spa services do you offer?",
      answer:
        "We offer Swedish Massage, Deep Tissue Massage, Aromatherapy, Hot Oil Massage, Turkish Hammam, Hot Stone Therapy, Body Scrubs, and other luxury wellness treatments.",
    },
    {
      question: "Do I need to book an appointment in advance?",
      answer:
        "While walk-ins are welcome, we recommend booking your appointment in advance to ensure your preferred time slot is available.",
    },
    {
      question: "What are your opening hours?",
      answer:
        "We are open seven days a week from 10:00 AM to 10:00 PM, including weekends and holidays.",
    },
    {
      question: "Do you offer couple spa packages?",
      answer:
        "Yes, we offer premium couple spa packages designed to provide a relaxing and memorable experience for partners.",
    },
    {
      question: "How long does a massage session last?",
      answer:
        "Our sessions typically range from 60 to 120 minutes depending on the treatment you select.",
    },
    {
      question: "What should I wear during my spa treatment?",
      answer:
        "We provide disposable garments and all necessary amenities for your comfort and privacy during treatments.",
    },
    {
      question: "Do you have certified therapists?",
      answer:
        "Yes, all our therapists are professionally trained and experienced in delivering premium spa and wellness services.",
    },
    {
      question: "Can I cancel or reschedule my appointment?",
      answer:
        "Yes, appointments can be cancelled or rescheduled. We recommend informing us at least a few hours in advance.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-pink-50 via-white to-purple-50 py-20">
      <div className="mx-auto max-w-5xl px-4">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h1 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Everything You Need To Know
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600">
            Find answers to common questions about our spa services,
            appointments, facilities, and wellness treatments.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <h3 className="pr-4 text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>

                {activeIndex === index ? (
                  <ChevronUp
                    size={22}
                    className="min-w-[22px] text-pink-600"
                  />
                ) : (
                  <ChevronDown
                    size={22}
                    className="min-w-[22px] text-pink-600"
                  />
                )}
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "max-h-96 px-6 pb-6 opacity-100"
                    : "max-h-0 overflow-hidden opacity-0"
                }`}
              >
                <p className="leading-relaxed text-gray-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}