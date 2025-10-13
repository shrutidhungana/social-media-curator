import { FilterConfig } from "@/types/filterTypes";

export const filterConfigs: FilterConfig[] = [
  {
    id: "social-media",
    label: "Social Media",
    placeholder: "Select Platform",
    options: [
      { label: "Facebook", value: "facebook" },
      { label: "Twitter (X)", value: "twitter" },
      { label: "Instagram", value: "instagram" },
      { label: "YouTube", value: "youtube" },
      { label: "TikTok", value: "tiktok" },
    ],
  },
  {
    id: "state",
    label: "State",
    placeholder: "Select State",
    options: [
      { label: " Koshi Pradesh", value: "koshi" },
      { label: " Madhesh Pradesh", value: "madesh" },
      { label: "Bagmati Pradesh", value: "bagmati" },
      { label: "Gandaki Pradesh", value: "gandaki" },
      { label: "Lumbini Pradesh", value: "lumbini" },
      { label: "Karnali Pradesh", value: "karnali" },
      { label: "Sudurpashchim Pradesh", value: "sudurpaschim" },
    ],
  },
  {
    id: "district",
    label: "District",
    placeholder: "Select District",
    options: [
      { label: "Kathmandu", value: "kathmandu" },
      { label: "Lalitpur", value: "lalitpur" },
      { label: "Bhaktapur", value: "bhaktapur" },
      { label: "Pokhara", value: "pokhara" },
      { label: "Chitwan", value: "chitwan" },
      { label: "Jhapa", value: "jhapa" },
      { label: "Morang", value: "morang" },
      { label: "Dhanusha", value: "dhanusha" },
    ],
  },
  {
    id: "constituency",
    label: "Constituency",
    placeholder: "Select Constituency",
    options: [
      { label: "Constituency 1", value: "constituency-1" },
      { label: "Constituency 2", value: "constituency-2" },
      { label: "Constituency 3", value: "constituency-3" },
      { label: "Constituency 4", value: "constituency-4" },
    ],
  },
  {
    id: "filter-type",
    label: "Filter Type",
    placeholder: "Select Filter Type",
    options: [
      { label: "Most Recent", value: "recent" },
      { label: "Most Liked", value: "liked" },
      { label: "Most Shared", value: "shared" },
      { label: "Trending", value: "trending" },
    ],
  },
];