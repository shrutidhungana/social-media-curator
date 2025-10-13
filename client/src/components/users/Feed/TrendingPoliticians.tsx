"use client";

import React from "react";
import { TrendingPoliticiansProps } from "@/types/trendingPoliticiansTypes";
import * as Tooltip from "@radix-ui/react-tooltip";
import Image from "next/image";

const TrendingPoliticians: React.FC<TrendingPoliticiansProps> = ({
  politicians,
  maxItems = 3,
}) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      {politicians.slice(0, maxItems).map((politician, idx) => (
        <Tooltip.Provider key={idx}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <div
                onClick={politician.onClick}
                className="flex items-center gap-3 p-3 bg-white/90 rounded-xl shadow-md hover:shadow-lg cursor-pointer transition-shadow w-full box-border"
              >
                {politician?.profileImage ? (
                  <Image
                    width={10}
                    height={10}
                    src={politician.profileImage}
                    alt={politician.name}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold flex-shrink-0">
                    {politician.name.charAt(0)}
                  </div>
                )}

                <div className="flex flex-col min-w-0">
                  <span className="text-sm md:text-base font-semibold text-[#1e3a8a] truncate">
                    {politician.name}
                  </span>
                  {politician.party && (
                    <span className="text-xs text-gray-500 truncate">
                      {politician.party}
                    </span>
                  )}
                  {politician.position && (
                    <span className="text-xs text-gray-400 truncate">
                      {politician.position}
                    </span>
                  )}
                </div>
              </div>
            </Tooltip.Trigger>

            {/* Tooltip content for overflow */}
            <Tooltip.Content
              side="top"
              align="center"
              className="rounded-md bg-gray-900 px-2 py-1 text-white text-xs shadow-lg z-50"
            >
              <div>{politician.name}</div>
              {politician.party && <div>{politician.party}</div>}
              {politician.position && <div>{politician.position}</div>}
              <Tooltip.Arrow className="fill-gray-900" />
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      ))}
    </div>
  );
};

export default TrendingPoliticians;
