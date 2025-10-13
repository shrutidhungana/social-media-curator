import { PostProps } from "./postTypes";
import { TrendingPoliticiansProps } from "./trendingPoliticiansTypes";

export type FeaturedPostType = {
  id: string;
  type: "post" | "politician";
  post?: PostProps;
  politician?: TrendingPoliticiansProps["politicians"][0];
};
