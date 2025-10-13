"use client";

import React from "react";
import { TrendingPostProps } from "@/types/trendingPostTypes";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const platformIcons: Record<string, React.ReactNode> = {
  Twitter: <FaTwitter className="text-blue-500" />,
  Facebook: <FaFacebook className="text-blue-700" />,
  Instagram: <FaInstagram className="text-pink-500" />,
};

const TrendingPost: React.FC<TrendingPostProps> = ({
  title,
  author,
  timeAgo,
  platform,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer p-3 bg-white/90 rounded-xl shadow-md hover:shadow-lg transition-shadow mb-3"
    >
      <div className="flex flex-col gap-1">
        <h3 className="text-sm md:text-base font-semibold text-[#1e3a8a] line-clamp-2">
          {title}
        </h3>
        {author && <span className="text-xs text-gray-500">{author}</span>}
        <div className="flex justify-between items-center text-xs text-gray-400 mt-1">
          {timeAgo && <span>{timeAgo}</span>}
          {platform && (
            <span className="flex items-center gap-1">
              {platformIcons[platform]}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrendingPost;
