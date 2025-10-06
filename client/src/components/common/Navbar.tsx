"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars, FaTimes } from "react-icons/fa";
import type { NavbarProps } from "@/types/navbarTypes";

const Navbar = ({
  brand = "Politician Curator",
  items,
  sticky = true,
  bgColor = "bg-gradient-to-r from-blue-600 to-purple-600",
  textColor = "text-white",
}: NavbarProps) => {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className={`${bgColor} ${
        sticky ? "sticky top-0" : ""
      } w-full shadow-lg z-50`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Brand */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-white hover:text-gray-200 transition-colors"
        >
          {brand}
        </Link>

        {/* Desktop Menu (md+) */}
        <div className="hidden md:flex gap-6 items-center">
          {items.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                router.pathname === href
                  ? "bg-white text-blue-600 font-semibold shadow-md"
                  : "text-white hover:bg-white hover:text-blue-600"
              }`}
            >
              {Icon && <Icon size={18} />}
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Button (<md) */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-md border border-white hover:bg-white hover:text-blue-600 transition-colors text-white"
          >
            {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (<md) */}
      <div
        className={`md:hidden bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg w-full absolute top-16 left-0 transition-transform duration-300 ${
          mobileOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {items.map(({ label, href, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className={`flex items-center gap-4 px-6 py-5 border-b border-white/20 transition-colors duration-200 text-lg font-medium ${
              router.pathname === href
                ? "bg-white text-blue-600 font-semibold"
                : "text-white hover:bg-white hover:text-blue-600"
            }`}
            onClick={() => setMobileOpen(false)}
          >
            {Icon && <Icon size={20} />}
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
