"use client";

import React from "react";
import { Constituency } from "@/types/topConstituenciesTypes";

type TopConstituenciesProps = {
  constituencies: Constituency[];
  maxItems?: number;
};

const TopConstituencies: React.FC<TopConstituenciesProps> = ({
  constituencies,
  maxItems = 6,
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-[#1e3a8a] mb-3">
        Top Constituencies This Week
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {constituencies.slice(0, maxItems).map((item, idx) => (
          <div
            key={idx}
            className="p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white/90 flex justify-between items-center"
          >
            <span className="text-sm md:text-base font-medium text-[#1e3a8a] truncate">
              {item.name}
            </span>
            <span className="text-xs text-gray-500 font-semibold">
              {item.engagementCount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopConstituencies;
