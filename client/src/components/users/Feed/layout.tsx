"use client";

import React from "react";
import { motion } from "framer-motion";

type FeedLayoutProps = {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
};

const FeedLayout: React.FC<FeedLayoutProps> = ({
  children,
  title = "Welcome to Your Feed",
  subtitle = "Stay updated with the latest posts from politicians",
}) => {
  return (
    <div className="min-h-[calc(100vh-4rem)] w-full bg-gradient-to-br from-[#F8FAFC] via-[#EBF2F7] to-[#E2E8F0] text-[#1e3a8a] py-8 px-4">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-6"
      >
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
        <p className="mt-2 text-lg">{subtitle}</p>
        <div className="mt-4 h-1 w-20 bg-gradient-to-r from-[#F8FAFC] to-[#1e3a8a] rounded-full mx-auto"></div>
      </motion.div>

      {/* Feed Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex flex-col gap-6"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FeedLayout;
