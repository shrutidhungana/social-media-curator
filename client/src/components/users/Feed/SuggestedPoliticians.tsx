"use client";

import React from "react";
import { SuggestedPolitician } from "@/types/suggestedPoliticiansTypes";
import Image from "next/image";

type SuggestedPoliticiansProps = {
  politicians: SuggestedPolitician[];
};

const SuggestedPoliticians: React.FC<SuggestedPoliticiansProps> = ({
  politicians,
}) => {
  return (
    <div className="my-6">
      <h3 className="text-lg font-semibold text-[#1e3a8a] mb-3">
        Suggested Politicians to Follow
      </h3>
      <div className="flex flex-col gap-3 max-h-[400px] overflow-auto">
        {politicians.map((pol) => (
          <div
            key={pol.id}
            className="flex items-center gap-3 p-2 bg-white/90 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            {pol.profileImage ? (
              <Image
                src={pol.profileImage}
                alt={pol.name}
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
                {pol.name.charAt(0)}
              </div>
            )}
            <div className="flex-1 flex flex-col overflow-hidden">
              <span className="text-sm font-semibold text-[#1e3a8a] truncate">
                {pol.name}
              </span>
              {pol.party && (
                <span className="text-xs text-gray-500 truncate">
                  {pol.party}
                </span>
              )}
            </div>
            <button className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedPoliticians;
