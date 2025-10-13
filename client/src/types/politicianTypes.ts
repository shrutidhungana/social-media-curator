export type Opinion = {
  id: string;
  content: string;
  timeAgo: string;
  platform?: "Facebook" | "Twitter" | "Instagram" | "TikTok";
};

export type Politician = {
  id: string;
  name: string;
  profileImage?: string;
  party?: string;
  position?: string;
  socialLinks?: {
    platform: "Facebook" | "Twitter" | "Instagram" | "TikTok";
    url: string;
  }[];
  opinions: Opinion[];
  summary?: string; // key points of all opinions
  stats?: {
    totalOpinions: number;
    totalEngagement: number;
    topics: string[];
  };
};
