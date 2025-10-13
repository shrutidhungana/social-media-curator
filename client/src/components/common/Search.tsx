"use client";

import React from "react";
import { FaSearch } from "react-icons/fa";

type SearchProps = {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
};

const Search: React.FC<SearchProps> = ({
  placeholder = "Search...",
  value = "",
  onChange,
}) => {
  return (
    <div className="relative w-full max-w-md mx-auto bg-white">
      {/* Search Icon */}
      <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400" />

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        placeholder={placeholder}
        className="pl-10 pr-4 py-3 rounded-full bg-white/90 text-gray-900 placeholder-gray-400 shadow-md focus:shadow-lg focus:outline-none transition-all duration-300 w-full"
      />
    </div>
  );
};

export default Search;
