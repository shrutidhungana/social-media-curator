"use client";

import React from "react";
import { FaSearch } from "react-icons/fa";
import clsx from "clsx";
import type { SearchInputProps } from "@/types/searchTypes";

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search...",
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "flex items-center w-full bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500",
        className
      )}
    >
      <FaSearch className="text-gray-400 mr-2" />
      <input
        type="text"
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-400 text-sm sm:text-base"
        {...props}
      />
    </div>
  );
};

export default SearchInput;
