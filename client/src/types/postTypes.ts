export type PostProps = {
  id: string;
  politicianName: string;
  politicianImage?: string; // optional, use next/image if available
  content: string;
  platform?: "Facebook" | "Twitter" | "Instagram" | string;
  timeAgo?: string;
  onLike?: () => void;
  onShare?: () => void;
  title?: string;
};
