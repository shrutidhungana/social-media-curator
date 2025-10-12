"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import clsx from "clsx";
import type { SidebarProps } from "@/types/sidebarTypes";

const Sidebar: React.FC<SidebarProps> = ({
  title,
  children,
  position = "left",
  width = "w-72",
  mobileWidth = "w-3/4",
  bgColor = "bg-white/90 backdrop-blur-md",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={clsx(
          "hidden md:flex flex-col",
          width,
          "p-4 h-[calc(100vh-4rem)] sticky top-16",
          bgColor,
          "rounded-2xl shadow-lg border border-gray-200"
        )}
      >
        {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
        {children}
      </aside>

      {/* Mobile Toggle Button */}
      <div className="md:hidden fixed top-20 left-4 z-50">
        <button
          onClick={() => setOpen(true)}
          className="p-2 rounded-md bg-indigo-600 text-white shadow-md"
        >
          <FaBars size={22} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className={clsx(
              "absolute top-0",
              position === "left" ? "left-0" : "right-0",
              mobileWidth,
              "h-full p-6 shadow-xl overflow-auto",
              bgColor,
              "rounded-tr-2xl rounded-br-2xl"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              {title && <h2 className="text-xl font-semibold">{title}</h2>}
              <button
                onClick={() => setOpen(false)}
                className="p-1 rounded-md text-gray-700 hover:text-gray-900"
              >
                <FaTimes size={20} />
              </button>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
