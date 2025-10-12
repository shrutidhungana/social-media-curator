"use client";

import React from "react";
import FeatureCard from "@/components/common/Card";
import { ABOUT_CARDS } from "@/config/about.config";

const AboutPage: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] w-full bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 px-6 py-6">
      {/* Hero Section */}
      <div className="flex-shrink-0 text-center text-white space-y-4 max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold tracking-tight">About Us</h1>
        <p className="text-lg text-indigo-100">
          Bringing all social media posts from politicians in one place so users
          can see authentic content and understand genuine leadership.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex-1 overflow-y-auto mt-8">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {ABOUT_CARDS.map((card, idx) => (
            <FeatureCard key={idx} {...card} />
          ))}
        </div>
      </div>

      {/* Mission / Footer Section */}
      <div className="flex-shrink-0 mt-12 max-w-3xl mx-auto text-center text-indigo-100 space-y-3">
        <h2 className="text-3xl font-semibold">Our Mission</h2>
        <p>
          Our goal is to make political updates transparent and easily
          accessible. By curating posts from verified social media accounts of
          politicians from all election areas, users can understand leaders’
          genuineness.
        </p>
        <p>
          This platform empowers citizens to follow trustworthy sources and
          discover authentic leadership, all in a single, easy-to-use interface.
        </p>
        <p className="mt-4 text-sm text-indigo-200">
          &copy; {currentYear} Politician Social Media Curator. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
