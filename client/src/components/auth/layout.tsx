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
  title = "Join Academia-Next",
  subtitle = "Create your account now",
}) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-tr from-indigo-800 via-purple-800 to-pink-700 px-4 pt-24 pb-8">
      {/* pt-24 offsets the fixed navbar height */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-8 space-y-6 hover:shadow-2xl transition-shadow duration-300"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-3xl font-extrabold text-[#DA70D6] animate-fadeIn">
            {title}
          </h1>
          <p className="mt-2 text-[#E0B0FF]">{subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AuthLayout;
