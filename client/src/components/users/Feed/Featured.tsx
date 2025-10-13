"use client";

import React from "react";
import { FeaturedPostType } from "@/types/featuredTypes";
import Post from "./Post";
import Image from "next/image";

type FeaturedPostProps = {
  featured: FeaturedPostType;
};

const FeaturedPost: React.FC<FeaturedPostProps> = ({ featured }) => {
  if (featured.type === "post" && featured.post) {
    return (
      <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold text-[#1e3a8a] mb-3">Featured Post</h2>
        <Post {...featured.post} />
      </div>
    );
  }

  if (featured.type === "politician" && featured.politician) {
    const pol = featured.politician;
    return (
      <div className="mb-6 p-4 bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-200 rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold text-[#1e3a8a] mb-3">
          Featured Politician
        </h2>
        <div className="flex items-center gap-4 p-3 bg-white/90 rounded-xl shadow-md">
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
          <div className="flex flex-col overflow-hidden">
            <span className="text-lg font-semibold text-[#1e3a8a] truncate">
              {pol.name}
            </span>
            {pol.party && (
              <span className="text-sm text-gray-500 truncate">
                {pol.party}
              </span>
            )}
            {pol.position && (
              <span className="text-sm text-gray-400 truncate">
                {pol.position}
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default FeaturedPost;
