"use client";

import React from "react";
import { Button } from "@radix-ui/themes";
import clsx from "clsx";
import { motion } from "framer-motion";

type Provider = {
  id: string;
  label: string;
  LogoComponent?: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
};

type OAuthButtonsProps = {
  providers: Provider[];
};

const OAuthButtons: React.FC<OAuthButtonsProps> = ({ providers }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8 flex flex-col gap-4"
    >
      {providers.map(({ label, LogoComponent: Logo, onClick, id }) => (
        <Button
          key={id}
          onClick={onClick}
          variant="soft"
          className={clsx(
            "w-full flex items-center justify-center gap-3 border-2 rounded-lg shadow-sm transition duration-300 px-6 py-3 text-sm font-semibold",
            "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400 active:scale-[0.98]"
          )}
          aria-label={`Continue with ${label}`}
        >
          {Logo && <Logo className="h-5 w-5" aria-hidden="true" />}
          <span>{label}</span>
        </Button>
      ))}
    </motion.div>
  );
};

export default OAuthButtons;
