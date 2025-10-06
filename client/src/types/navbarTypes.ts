
import { IconType } from "react-icons";

export type NavItem = {
  label: string;
  href: string;
  icon?: IconType; // optional for even more flexibility
};

export type NavbarProps = {
  brand?: string;
  items: NavItem[];
  sticky?: boolean;
  bgColor?: string;
  textColor?: string;
};
