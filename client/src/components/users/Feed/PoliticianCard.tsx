"use client";

import React from "react";
import Image from "next/image";
import { Politician } from "@/types/politicianTypes";
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

const platformIcon = (platform?: string) => {
  switch (platform) {
    case "Facebook":
      return <FaFacebookF className="text-blue-600" />;
    case "Twitter":
      return <FaTwitter className="text-blue-400" />;
    case "Instagram":
      return <FaInstagram className="text-pink-500" />;
    case "TikTok":
      return <FaTiktok className="text-black" />;
    default:
      return null;
  }
};

type PoliticianCardProps = { politician: Politician };

const PoliticianCard: React.FC<PoliticianCardProps> = ({ politician }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-2xl shadow-md mb-6">
      {/* Profile */}
      <div className="flex items-center gap-4 mb-4">
        {politician.profileImage ? (
          <Image
            src={politician.profileImage}
            alt={politician.name}
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
            {politician.name.charAt(0)}
          </div>
        )}
        <div className="flex-1 flex flex-col">
          <span className="text-lg font-semibold text-[#1e3a8a]">
            {politician.name}
          </span>
          {politician.party && (
            <span className="text-sm text-gray-500">{politician.party}</span>
          )}
          {politician.position && (
            <span className="text-sm text-gray-400">{politician.position}</span>
          )}
          <div className="flex gap-2 mt-2">
            {politician.socialLinks?.map((s, idx) => (
              <a key={idx} href={s.url} target="_blank" rel="noreferrer">
                {platformIcon(s.platform)}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Opinions */}
      <div className="flex flex-col gap-3 mb-4">
        {politician.opinions.map((op) => (
          <div key={op.id} className="p-3 bg-white rounded-xl shadow-sm">
            <p className="text-gray-700 text-sm">{op.content}</p>
            <span className="text-xs text-gray-400 mt-1 block">
              {op.timeAgo}
            </span>
          </div>
        ))}
      </div>

      {/* Stats / Summary */}
      {politician.summary && (
        <p className="text-gray-700 mb-2">{politician.summary}</p>
      )}
      <div className="flex flex-wrap gap-2 text-sm text-gray-600">
        {politician.stats?.topics.map((topic, idx) => (
          <span key={idx} className="px-2 py-1 bg-blue-100 rounded-full">
            {topic}
          </span>
        ))}
        <span className="px-2 py-1 bg-green-100 rounded-full">
          Opinions: {politician.stats?.totalOpinions}
        </span>
        <span className="px-2 py-1 bg-yellow-100 rounded-full">
          Engagement: {politician.stats?.totalEngagement}
        </span>
      </div>
    </div>
  );
};

export default PoliticianCard;
