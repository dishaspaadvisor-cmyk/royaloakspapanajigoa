"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Offers", path: "/offer" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur-md border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navbar */}
        <nav className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}

          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo/4ca5a7f8-2549-424c-b958-b799f516603d.png"
              alt="Royal Oak Spa Logo"
              width={700}
              height={280}
              priority
              className="h-28 sm:h-32 lg:h-36 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`font-medium text-base transition-all duration-300 relative ${pathname === item.path
                    ? "text-pink-600"
                    : "text-gray-700 hover:text-pink-600"
                    }`}
                >
                  {item.name}

                  {pathname === item.path && (
                    <span className="absolute left-0 -bottom-2 h-[2px] w-full rounded-full bg-pink-600"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="rounded-full bg-pink-600 px-5 py-2.5 text-white font-medium text-sm shadow-md transition-all duration-300 hover:bg-pink-700 hover:scale-105"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-800"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px]" : "max-h-0"
          }`}
      >
        <div className="bg-white border-t shadow-lg px-6 py-5">
          <ul className="flex flex-col gap-5">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-base font-medium transition ${pathname === item.path
                    ? "text-pink-600"
                    : "text-gray-700 hover:text-pink-600"
                    }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-6 block w-full rounded-full bg-pink-600 py-3 text-center text-base font-semibold text-white shadow-md transition hover:bg-pink-700"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}