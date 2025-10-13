"use client";

import React from "react";
import { Badge } from "@radix-ui/themes";
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
      <h3 className="text-lg font-semibold text-[#1e3a8a] mb-4">
        Top Constituencies This Week
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {constituencies.slice(0, maxItems).map((item, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow 
                       bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50"
          >
            <span className="text-sm md:text-base font-medium text-[#1e3a8a] truncate">
              {item.name}
            </span>
            <Badge
              variant="solid"
              className="px-2 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full shadow-sm"
            >
              {item.engagementCount}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopConstituencies;
