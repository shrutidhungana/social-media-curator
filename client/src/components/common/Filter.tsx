"use client";

import React from "react";
import clsx from "clsx";
import type { FilterProps } from "@/types/filterTypes";

const Filter: React.FC<FilterProps> = ({
  options,
  selected,
  onChange,
  className,
}) => {
  return (
    <div className={clsx("flex flex-wrap gap-2", className)}>
      {options.map((option) => {
        const isActive = selected === option.value;
        return (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={clsx(
              "px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200",
              isActive
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-white/90 text-gray-700 border border-gray-200 hover:bg-indigo-50"
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
