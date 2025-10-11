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

  const leftItems = items.filter((i) => i.position === "left");
  const centerItems = items.filter(
    (i) => !i.position || i.position === "center"
  );
  const rightItems = items.filter((i) => i.position === "right");

  const renderNavItem = (label: string, href: string, Icon?: any) => (
    <Link
      key={label}
      href={href}
      className={`flex items-center gap-2 px-3 py-2 rounded-md font-medium transition-colors ${
        router.pathname === href
          ? "bg-white text-blue-600"
          : `${textColor} hover:bg-white hover:text-blue-600`
      }`}
    >
      {Icon && <Icon size={18} />}
      {label}
    </Link>
  );

  return (
    <header
      className={`${bgColor} ${
        sticky ? "fixed top-0 left-0" : ""
      } w-full z-50 shadow-md`}
      style={{ height: "4rem" }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
        {/* Left items */}
        <div className="flex items-center gap-4">
          {leftItems.length > 0 ? (
            leftItems.map(({ label, href, icon: Icon }) =>
              renderNavItem(label, href, Icon)
            )
          ) : (
            <Link
              href="/"
              className={`text-2xl font-extrabold tracking-tight ${textColor} hover:text-gray-200 transition-colors`}
            >
              {brand}
            </Link>
          )}
        </div>

        {/* Center items */}
        <div className="hidden md:flex gap-4 items-center">
          {centerItems.map(({ label, href, icon: Icon }) =>
            renderNavItem(label, href, Icon)
          )}
        </div>

        {/* Right items */}
        <div className="hidden md:flex gap-4 items-center">
          {rightItems.map(({ label, href, icon: Icon }) =>
            renderNavItem(label, href, Icon)
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`p-2 rounded-md border border-white ${textColor} hover:bg-white hover:text-blue-600 transition-colors`}
          >
            {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="absolute top-0 left-0 w-3/4 max-w-xs h-full bg-gradient-to-b from-blue-600 to-purple-600 shadow-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-6 mt-4">
              {items.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  className={`flex items-center gap-4 px-2 py-3 rounded-lg text-lg font-medium transition-colors duration-200 ${
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
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
