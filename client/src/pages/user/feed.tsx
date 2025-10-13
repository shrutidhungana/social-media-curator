"use client";

import React from "react";
import FeedLayout from "@/components/users/Feed/layout";



const UserFeedPage: React.FC = () => {
  return (
    <FeedLayout
      title="Your Feed"
      subtitle="Check out the latest posts from politicians"
    >
      Hello
    </FeedLayout>
  );
};

export default UserFeedPage;
