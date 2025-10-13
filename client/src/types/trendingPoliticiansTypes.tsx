export type TrendingPoliticianProps = {
  name: string;
  party?: string;
  position?: string;
  profileImage?: string; // optional profile image URL
  onClick?: () => void;
};

export type TrendingPoliticiansProps = {
  politicians: TrendingPoliticianProps[];
  maxItems?: number; // default 5
};