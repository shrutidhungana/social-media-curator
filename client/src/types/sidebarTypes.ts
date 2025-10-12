export type SidebarProps = {
  title?: string;
  children: React.ReactNode;
  position?: "left" | "right"; // optional, defaults to left
  width?: string; // optional, e.g., 'w-72'
  mobileWidth?: string; // optional, e.g., 'w-3/4'
  bgColor?: string; // optional background color
}