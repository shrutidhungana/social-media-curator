import { Politician } from "@/types/politicianTypes";

export const politicians: Politician[] = [
  {
    id: "p1",
    name: "Leader A",
    profileImage: "",
    party: "Party Alpha",
    position: "Minister of Health",
    socialLinks: [
      { platform: "Facebook", url: "https://facebook.com/leaderA" },
      { platform: "Twitter", url: "https://twitter.com/leaderA" },
    ],
    opinions: [
      {
        id: "o1",
        content: "We must invest in healthcare infrastructure.",
        timeAgo: "2h ago",
        platform: "Facebook",
      },
      {
        id: "o2",
        content: "Education reform is key for our future.",
        timeAgo: "1d ago",
        platform: "Twitter",
      },
    ],
    summary: "Focused on healthcare and education reforms.",
    stats: {
      totalOpinions: 15,
      totalEngagement: 1200,
      topics: ["Health", "Education", "Policy"],
    },
  },
  {
    id: "p2",
    name: "Leader B",
    profileImage: "",
    party: "Party Beta",
    position: "Minister of Finance",
    socialLinks: [
      { platform: "Facebook", url: "https://facebook.com/leaderB" },
      { platform: "Instagram", url: "https://instagram.com/leaderB" },
    ],
    opinions: [
      {
        id: "o1",
        content: "Tax reforms will help small businesses.",
        timeAgo: "3h ago",
        platform: "Facebook",
      },
      {
        id: "o2",
        content: "Budget allocation needs transparency.",
        timeAgo: "2d ago",
        platform: "Instagram",
      },
    ],
    summary: "Economy-focused, transparency advocate.",
    stats: {
      totalOpinions: 20,
      totalEngagement: 1800,
      topics: ["Economy", "Finance", "Transparency"],
    },
  },
  {
    id: "p3",
    name: "Leader C",
    profileImage: "",
    party: "Party Gamma",
    position: "Minister of Environment",
    socialLinks: [
      { platform: "Twitter", url: "https://twitter.com/leaderC" },
      { platform: "TikTok", url: "https://tiktok.com/@leaderC" },
    ],
    opinions: [
      {
        id: "o1",
        content: "Climate action is urgent.",
        timeAgo: "5h ago",
        platform: "Twitter",
      },
    ],
    summary: "Environment and climate change focused.",
    stats: {
      totalOpinions: 10,
      totalEngagement: 900,
      topics: ["Climate", "Environment"],
    },
  },
  {
    id: "p4",
    name: "Leader D",
    profileImage: "",
    party: "Party Delta",
    position: "Minister of Education",
    socialLinks: [
      { platform: "Facebook", url: "https://facebook.com/leaderD" },
    ],
    opinions: [
      {
        id: "o1",
        content: "Schools need modern infrastructure.",
        timeAgo: "4h ago",
        platform: "Facebook",
      },
    ],
    summary: "Modernization of education sector.",
    stats: {
      totalOpinions: 12,
      totalEngagement: 800,
      topics: ["Education", "Policy"],
    },
  },
  {
    id: "p5",
    name: "Leader E",
    profileImage: "",
    party: "Party Epsilon",
    position: "Minister of Technology",
    socialLinks: [
      { platform: "Twitter", url: "https://twitter.com/leaderE" },
      { platform: "Instagram", url: "https://instagram.com/leaderE" },
    ],
    opinions: [
      {
        id: "o1",
        content: "Digital transformation is critical.",
        timeAgo: "6h ago",
        platform: "Twitter",
      },
    ],
    summary: "Promoting tech and digital transformation.",
    stats: {
      totalOpinions: 8,
      totalEngagement: 700,
      topics: ["Technology", "Innovation"],
    },
  },
  {
    id: "p6",
    name: "Leader F",
    profileImage: "",
    party: "Party Zeta",
    position: "Minister of Agriculture",
    socialLinks: [
      { platform: "Facebook", url: "https://facebook.com/leaderF" },
    ],
    opinions: [
      {
        id: "o1",
        content: "Farmers need support programs.",
        timeAgo: "2d ago",
        platform: "Facebook",
      },
    ],
    summary: "Agricultural policy and rural development.",
    stats: {
      totalOpinions: 14,
      totalEngagement: 1000,
      topics: ["Agriculture", "Rural Development"],
    },
  },
  {
    id: "p7",
    name: "Leader G",
    profileImage: "",
    party: "Party Eta",
    position: "Minister of Defense",
    socialLinks: [{ platform: "Twitter", url: "https://twitter.com/leaderG" }],
    opinions: [
      {
        id: "o1",
        content: "National security is our top priority.",
        timeAgo: "3h ago",
        platform: "Twitter",
      },
    ],
    summary: "Defense and national security focused.",
    stats: {
      totalOpinions: 9,
      totalEngagement: 950,
      topics: ["Defense", "Security"],
    },
  },
  {
    id: "p8",
    name: "Leader H",
    profileImage: "",
    party: "Party Theta",
    position: "Minister of Transport",
    socialLinks: [
      { platform: "Facebook", url: "https://facebook.com/leaderH" },
      { platform: "Instagram", url: "https://instagram.com/leaderH" },
    ],
    opinions: [
      {
        id: "o1",
        content: "Infrastructure investment is key.",
        timeAgo: "1d ago",
        platform: "Facebook",
      },
    ],
    summary: "Transportation and infrastructure development.",
    stats: {
      totalOpinions: 11,
      totalEngagement: 870,
      topics: ["Infrastructure", "Transport"],
    },
  },
  {
    id: "p9",
    name: "Leader I",
    profileImage: "",
    party: "Party Iota",
    position: "Minister of Culture",
    socialLinks: [{ platform: "TikTok", url: "https://tiktok.com/@leaderI" }],
    opinions: [
      {
        id: "o1",
        content: "Promoting cultural heritage is vital.",
        timeAgo: "5h ago",
        platform: "TikTok",
      },
    ],
    summary: "Culture and heritage preservation.",
    stats: {
      totalOpinions: 7,
      totalEngagement: 650,
      topics: ["Culture", "Heritage"],
    },
  },
  {
    id: "p10",
    name: "Leader J",
    profileImage: "",
    party: "Party Kappa",
    position: "Minister of Science",
    socialLinks: [
      { platform: "Twitter", url: "https://twitter.com/leaderJ" },
      { platform: "Instagram", url: "https://instagram.com/leaderJ" },
    ],
    opinions: [
      {
        id: "o1",
        content: "Scientific research drives innovation.",
        timeAgo: "7h ago",
        platform: "Twitter",
      },
    ],
    summary: "Science and research advocacy.",
    stats: {
      totalOpinions: 13,
      totalEngagement: 900,
      topics: ["Science", "Innovation"],
    },
  },
];
