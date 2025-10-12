import { AboutCard } from "@/types/aboutTypes";
import {
  FaUsers,
  FaGlobe,
  FaCheckCircle,
  FaBullhorn,
  FaCalendarAlt,
  FaNetworkWired,
} from "react-icons/fa";

export const ABOUT_CARDS: AboutCard[] = [
  {
    icon: <FaUsers />,
    title: "All Politicians in One Place",
    description:
      "Access posts from politicians across all major social media platforms in one unified feed.",
  },
  {
    icon: <FaGlobe />,
    title: "Genuine Social Media Content",
    description:
      "Every social media post is curated to ensure users see authentic and verified updates.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Election Area Coverage",
    description:
      "We include politicians from all election areas (nirbachan chhetra) for better representation.",
  },
  {
    icon: <FaBullhorn />,
    title: "Citizen Awareness",
    description:
      "Helps citizens understand political leaders’ actions and genuineness, so they can make informed choices.",
  },
  {
    icon: <FaCalendarAlt />,
    title: "Time-Sensitive Information",
    description:
      "During election periods (e.g., March 5), users can easily track political updates without missing key posts.",
  },
  {
    icon: <FaNetworkWired />,
    title: "Stay Connected",
    description:
      "Engage with posts and follow politicians to understand their vision and authenticity better.",
  },
];
