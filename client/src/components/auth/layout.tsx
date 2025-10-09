"use client";

import React from "react";
import { motion } from "framer-motion";

type AuthLayoutProps = {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title = "Welcome Back",
  subtitle = "Sign in to continue your social media journey",
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 relative overflow-hidden px-4">
      {/* Floating orbs */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-indigo-500/30 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-40 h-40 bg-fuchsia-500/30 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />

      {/* Auth container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md bg-slate-900/60 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl p-8 space-y-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold text-indigo-400 tracking-tight">
            {title}
          </h1>
          <p className="mt-2 text-slate-300 text-sm">{subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AuthLayout;
