import {
  FaHome,
  FaBell,
  FaUser,
  FaInfoCircle,
  FaSignInAlt,
} from "react-icons/fa";
import type { NavItem } from "@/types/navbarTypes";

export const navbarItems: NavItem[] = [
  { label: "Feed", href: "/feed", icon: FaHome, position: "center" },
  { label: "About", href: "/about", icon: FaInfoCircle, position: "center" },
  {
    label: "Notification",
    href: "/notification",
    icon: FaBell,
    position: "right",
  },
  { label: "Profile", href: "/profile", icon: FaUser, position: "right" },

  {
    label: "Login",
    href: "/auth/login",
    icon: FaSignInAlt,
    position: "right",
  },
];
