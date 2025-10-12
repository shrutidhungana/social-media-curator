"use client";

import React from "react";
import { Card } from "@radix-ui/themes";
import { AboutCard } from "@/types/aboutTypes";

type FeatureCardProps = AboutCard;

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white/95 backdrop-blur-md border border-gray-200 p-6 flex flex-col items-start gap-4">
      {icon && <div className="text-indigo-600 text-3xl">{icon}</div>}
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
};

export default FeatureCard;
