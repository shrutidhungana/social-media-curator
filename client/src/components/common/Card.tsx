import React from "react";
import { AboutCard } from "@/types/aboutTypes";

type FeatureCardProps = AboutCard

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="flex flex-col items-start gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      {icon && <div className="text-indigo-600 text-3xl">{icon}</div>}
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;