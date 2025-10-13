"use client";

import React, { useState } from "react";
import { SearchItem } from "@/types/searchTypes";
import { FaSearch } from "react-icons/fa";

type SearchProps = {
  searchItem: SearchItem;
  onSearch?: (query: string, id: string) => void;
};

const Search: React.FC<SearchProps> = ({ searchItem, onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch?.(e.target.value, searchItem.id);
  };

  return (
    <div className="flex items-center gap-3 bg-white/90 rounded-2xl p-3 shadow-md hover:shadow-lg transition-all duration-200 w-full max-w-[16rem] sm:max-w-[17rem] md:max-w-[15rem] lg:max-w-[15.5rem]">
      <FaSearch className="text-gray-500 flex-shrink-0" />
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder={searchItem.placeholder}
        className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400 text-sm md:text-base"
      />
    </div>
  );
};

export default Search;
