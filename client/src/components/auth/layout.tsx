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
    <div className="flex flex-col min-h-[calc(100vh-4rem)] w-full bg-gradient-to-br from-[#F8FAFC] via-[#EBF2F7] to-[#E2E8F0] items-center justify-center px-4 py-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl w-full sm:w-11/12 md:w-3/4 lg:w-2/3 bg-[#E0F2FF] rounded-2xl shadow-xl p-10 space-y-8 border border-gray-100 overflow-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-4xl font-semibold text-[#1e3a8a] tracking-tight">
            {title}
          </h1>
          <p className="mt-3 text-base text-blue-400">{subtitle}</p>
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
