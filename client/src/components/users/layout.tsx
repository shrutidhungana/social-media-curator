"use client";

import React from "react";
import { motion } from "framer-motion";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
};

const NotificationLayout: React.FC<LayoutProps> = ({
  children,
  title = "Your Notifications",
  subtitle = "Stay updated with the latest posts from politicians",
}) => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] w-full bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 items-center py-6 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl w-full bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 space-y-6 border border-gray-100 overflow-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            {title}
          </h1>
          <p className="mt-2 text-gray-600">{subtitle}</p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotificationLayout;
