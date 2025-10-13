"use client";

import React, { useState } from "react";
import FeedLayout from "@/components/users/Feed/layout";
import Sidebar from "@/components/common/Sidebar";
import Search from "@/components/common/Search";
import Filter from "@/components/common/Filter";
import TrendingPost from "@/components/users/Feed/TrendingPosts";
import TrendingPoliticians from "@/components/users/Feed/TrendingPoliticians";
import TopConstituencies from "@/components/users/Feed/TopConstituencies";
import Post from "@/components/users/Feed/Post";

import { searchItems } from "@/config/search.config";
import { filterConfigs } from "@/config/filter.config";
import { trendingPosts } from "@/config/trendingPosts.config";
import { trendingPoliticians } from "@/config/trendingPoliticians.config";
import { topConstituencies } from "@/config/topConstituencies.config";
import { posts } from "@/config/posts.config";

const UserFeedPage: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string>
  >({});

  const handleSearch = (query: string, id: string) => {
    console.log("Searching", query, "in", id);
  };

  const handleFilterChange = (id: string, value: string) => {
    setSelectedFilters((prev) => ({ ...prev, [id]: value }));
    console.log("Filter changed:", id, value);
  };

  return (
    <>
      {/* Desktop layout */}
      <div className="hidden md:flex h-[calc(100vh-4rem)]">
        {/* Left Sidebar: Search + Filters */}
        <Sidebar width="w-64" title="Search & Filter" position="left">
          {searchItems.map((item) => (
            <div key={item.id} className="mb-4 last:mb-0">
              <Search searchItem={item} onSearch={handleSearch} />
            </div>
          ))}

          <hr className="my-4 border-gray-300" />

          {filterConfigs.map((filter) => (
            <div key={filter.id} className="mb-4">
              <label className="block text-sm font-semibold text-[#1e3a8a] mb-2">
                {filter.label}
              </label>
              <Filter
                options={filter.options}
                selectedValue={selectedFilters[filter.id]}
                onChange={(value) => handleFilterChange(filter.id, value)}
                placeholder={filter.placeholder}
              />
            </div>
          ))}
        </Sidebar>

        {/* Main Feed */}
        <div className="flex-1 overflow-auto">
          <FeedLayout
            title="Your Feed"
            subtitle="Check out the latest posts from politicians"
          >
            <div className="p-4 flex flex-col gap-4">
              <TopConstituencies
                constituencies={topConstituencies}
                maxItems={6}
              />
              {posts.map((post) => (
                <Post key={post.id} {...post} />
              ))}
            </div>
          </FeedLayout>
        </div>

        {/* Right Sidebar: Trending + Top Constituencies */}
        <Sidebar width="w-64" title="Trending" position="right">
          <h3 className="text-lg font-semibold text-[#1e3a8a] mb-1">
            Trending Posts
          </h3>
          {trendingPosts.map((post, idx) => (
            <TrendingPost key={idx} {...post} />
          ))}

          <hr className="my-4 border-gray-300" />

          <h3 className="text-lg font-semibold text-[#1e3a8a] mb-1">
            Trending Politicians
          </h3>
          <TrendingPoliticians politicians={trendingPoliticians} maxItems={3} />
        </Sidebar>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden">
        <FeedLayout
          title="Your Feed"
          subtitle="Check out the latest posts from politicians"
        >
          {/* Sidebar (Stacked above main content) */}
          <Sidebar title="Search & Filter">
            {searchItems.map((item) => (
              <div key={item.id} className="mb-4 last:mb-0">
                <Search searchItem={item} onSearch={handleSearch} />
              </div>
            ))}

            <hr className="my-4 border-gray-300" />

            {filterConfigs.map((filter) => (
              <div key={filter.id} className="mb-4">
                <label className="block text-sm font-semibold text-[#1e3a8a] mb-2">
                  {filter.label}
                </label>
                <Filter
                  options={filter.options}
                  selectedValue={selectedFilters[filter.id]}
                  onChange={(value) => handleFilterChange(filter.id, value)}
                  placeholder={filter.placeholder}
                />
              </div>
            ))}

            <hr className="my-4 border-gray-300" />

            <h3 className="text-lg font-semibold text-[#1e3a8a] mb-3">
              Trending Posts
            </h3>
            {trendingPosts.map((post, idx) => (
              <TrendingPost key={idx} {...post} />
            ))}

            <hr className="my-4 border-gray-300" />

            <h3 className="text-lg font-semibold text-[#1e3a8a] mb-3">
              Trending Politicians
            </h3>
            <TrendingPoliticians
              politicians={trendingPoliticians}
              maxItems={3}
            />
          </Sidebar>

          {/* Main Feed */}
          <div className="p-4 flex flex-col gap-4">
            <TopConstituencies
              constituencies={topConstituencies}
              maxItems={6}
            />
            {posts.map((post) => (
              <Post key={post.id} {...post} />
            ))}
          </div>
        </FeedLayout>
      </div>
    </>
  );
};

export default UserFeedPage;
