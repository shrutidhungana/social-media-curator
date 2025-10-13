"use client";

import React from "react";
import { PostProps } from "@/types/postTypes";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaHeart,
  FaShare,
  FaTiktok,
} from "react-icons/fa";

const platformIcon = (platform?: string) => {
  switch (platform) {
    case "Facebook":
      return <FaFacebookF className="text-white" />;
    case "Twitter":
      return <FaTwitter className="text-white" />;
    case "Instagram":
      return <FaInstagram className="text-white" />;
    case "TikTok":
      return <FaTiktok className="text-white" />;
    default:
      return <FaShare className="text-white" />;
  }
};

const platformColor = (platform?: string) => {
  switch (platform) {
    case "Facebook":
      return "bg-blue-600";
    case "Twitter":
      return "bg-blue-400";
    case "Instagram":
      return "bg-pink-500";
    case "TikTok":
      return "bg-black";
    default:
      return "bg-gray-400";
  }
};

const Post: React.FC<PostProps> = ({
  politicianName,
  politicianImage,
  content,
  platform,
  timeAgo,
  title,
  onLike,
  onShare,
}) => {
  return (
    <div className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-5 mb-5">
      {/* Header: Politician */}
      <div className="flex items-center gap-3 mb-4">
        {politicianImage ? (
          <Image
            src={politicianImage}
            alt={politicianName}
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold text-lg">
            {politicianName.charAt(0)}
          </div>
        )}

        <div className="flex flex-col">
          <span className="font-semibold text-[#1e3a8a] text-base md:text-lg">
            {politicianName}
          </span>
          {timeAgo && <span className="text-xs text-gray-400">{timeAgo}</span>}
        </div>

        {/* Platform icon rounded */}
        {platform && (
          <div
            className={`${platformColor(
              platform
            )} w-8 h-8 flex items-center justify-center rounded-full ml-auto`}
          >
            {platformIcon(platform)}
          </div>
        )}
      </div>

      {/* Content */}
      <p className="text-gray-700 text-sm md:text-base mb-4 leading-relaxed">
        {content}
      </p>

      {/* Actions */}
      <div className="flex gap-4 text-gray-500 text-sm">
        <button
          onClick={onLike}
          className="flex items-center gap-1 hover:text-red-500 transition-colors"
        >
          <FaHeart /> Like
        </button>
        <button
          onClick={onShare}
          className="flex items-center gap-1 hover:text-blue-500 transition-colors"
        >
          <FaShare /> Share
        </button>
      </div>
    </div>
  );
};

export default Post;
