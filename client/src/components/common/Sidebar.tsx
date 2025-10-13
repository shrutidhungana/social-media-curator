"use client";

import React, { useState, ReactNode } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import clsx from "clsx";

type SidebarProps = {
  children: ReactNode;
  side?: "left" | "right"; // Which side the sidebar appears
  width?: string; // Tailwind width class, default w-64
  bgColor?: string; // Tailwind bg-color class
};

const Sidebar: React.FC<SidebarProps> = ({
  children,
  side = "left",
  width = "w-64",
  bgColor = "bg-gradient-to-b from-blue-600/80 via-purple-600/70 to-pink-700/70",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle button */}
      <button
        className={clsx(
          "fixed top-16 z-50 p-2 rounded-full shadow-md bg-white/80 hover:bg-white transition-colors",
          side === "left" ? "left-4" : "right-4"
        )}
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar panel */}
      <div
        className={clsx(
          "fixed top-16 h-[calc(100vh-4rem)] z-50 shadow-lg overflow-auto transition-transform transform",
          width,
          bgColor,
          side === "left"
            ? open
              ? "translate-x-0 left-0"
              : "-translate-x-full left-0"
            : open
            ? "translate-x-0 right-0"
            : "translate-x-full right-0"
        )}
      >
        <div className="p-4 flex flex-col gap-4">{children}</div>
      </div>
    </>
  );
};

export default Sidebar;
