"use client";

import React from "react";
import { motion } from "framer-motion";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
};

const AuthLayout: React.FC<LayoutProps> = ({
  children,
  title = "Join Social Media Curator",
  subtitle = "Create your account now",
}) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 px-4 pt-24 pb-10">
      {/* pt-24 ensures space for fixed navbar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-10 space-y-8 border border-gray-100"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-4xl font-semibold text-gray-800 tracking-tight">
            {title}
          </h1>
          <p className="mt-3 text-base text-gray-500">{subtitle}</p>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="relative"
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AuthLayout;
