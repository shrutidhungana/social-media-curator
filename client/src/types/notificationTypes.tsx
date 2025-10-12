import { IconType } from "react-icons";

export type NotificationType =
  | "facebook"
  | "instagram"
  | "youtube"
  | "tiktok"
  | "x"
  | "threads";

export type NotificationItem = {
  id: string;
  type: NotificationType;
  message: string;
  url: string;
  timestamp: string; // string to avoid hydration issues
  Icon: IconType; // store icon component directly
};
