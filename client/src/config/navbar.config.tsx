import {
  FaHome,
  FaBell,
  FaUser,
  FaInfoCircle,
  FaSignInAlt,
} from "react-icons/fa";
import type { NavItem, UserRole } from "@/types/navbarTypes";

export const getNavbarItems = (role: UserRole): NavItem[] => [
  {
    label: "Feed",
    href: (role) =>
      role === "superadmin"
        ? "/superadmin/feed"
        : role === "moderator"
        ? "/moderator/feed"
        : "/user/feed",
    icon: FaHome,
    position: "center",
  },
  { label: "About", href: "/about", icon: FaInfoCircle, position: "center" },
  {
    label: "Notification",
    href: (role) =>
      role === "superadmin"
        ? "/superadmin/notification"
        : role === "moderator"
        ? "/moderator/notification"
        : "/user/notification",
    icon: FaBell,
    position: "right",
  },
  
  { label: "Login", href: "/auth/login", icon: FaSignInAlt, position: "right" },
];
