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
      return <FaFacebookF className="text-blue-600" />;
    case "Twitter":
      return <FaTwitter className="text-blue-400" />;
    case "Instagram":
      return <FaInstagram className="text-pink-500" />;
    case "TikTok":
      return <FaTiktok className="text-black-500" />;
    default:
      return <FaShare className="text-gray-400" />; // default icon
  }
};

const Post: React.FC<PostProps> = ({

  politicianName,
  politicianImage,
  content,
  platform,
  timeAgo,
  onLike,
  onShare,
}) => {
  return (
    <div className="bg-white/90 rounded-xl shadow-md p-4 mb-4 hover:shadow-lg transition-shadow">
      {/* Header: Politician */}
      <div className="flex items-center gap-3 mb-3">
        {politicianImage ? (
          <Image
            src={politicianImage}
            alt={politicianName}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
            {politicianName.charAt(0)}
          </div>
        )}
        <div className="flex flex-col">
          <span className="font-semibold text-[#1e3a8a] text-sm md:text-base">
            {politicianName}
          </span>
          {timeAgo && <span className="text-xs text-gray-400">{timeAgo}</span>}
        </div>
        <div className="ml-auto">{platformIcon(platform)}</div>
      </div>

      {/* Content */}
      <p className="text-gray-800 text-sm md:text-base mb-3">{content}</p>

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
