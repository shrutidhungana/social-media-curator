
import { IconType } from "react-icons";
export type NavItem = {
  label: string;
  href: string;
  icon?: IconType;
  position?: "left" | "center" | "right"; // optional, defaults to center
};


export type NavbarProps = {
  brand?: string;
  items: NavItem[];
  sticky?: boolean;
  bgColor?: string;
  textColor?: string;
};
