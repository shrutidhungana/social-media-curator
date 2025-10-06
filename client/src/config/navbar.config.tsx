import { IconType } from "react-icons";
import {
  FaHome,
  FaBell,
  FaUser,
  FaInfoCircle,
  FaSignInAlt,
} from "react-icons/fa";

export interface NavItem {
  label: string;
  href: string;
  icon: IconType;
}

export const navbarItems: NavItem[] = [
  { label: "Feed", href: "/feed", icon: FaHome },
  { label: "Notification", href: "/notification", icon: FaBell },
  { label: "Profile", href: "/profile", icon: FaUser },
  { label: "About", href: "/about", icon: FaInfoCircle },
  { label: "Login/Register", href: "/auth/login", icon: FaSignInAlt },
];
