"use client";

import React from "react";
import { NotificationItem } from "@/types/notificationTypes";
import clsx from "clsx";
import { formatDistanceToNow } from "date-fns"; // For "time ago" timestamps

type NotificationListProps = {
  notifications: NotificationItem[];
};

const NotificationList: React.FC<NotificationListProps> = ({
  notifications,
}) => {
  if (!notifications || notifications.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-gray-100 text-lg font-medium">
          You have no notifications yet.
        </p>
        <p className="text-gray-300 text-sm mt-2 text-center max-w-xs">
          Check back later for updates from politicians you follow.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {notifications?.map((notification) => {
        const Icon = notification.Icon;
        const timeAgo = formatDistanceToNow(new Date(notification.timestamp), {
          addSuffix: true,
        });

        return (
          <a
            key={notification.id}
            href={notification.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white/90 backdrop-blur-sm border border-gray-200 hover:scale-[1.01] transform"
          >
            <div
              className={clsx(
                "flex-none p-4 rounded-full shadow-md flex items-center justify-center",
                {
                  "bg-blue-100 text-blue-600":
                    notification.type === "facebook" ||
                    notification.type === "x",
                  "bg-pink-100 text-pink-500":
                    notification.type === "instagram" ||
                    notification.type === "threads",
                  "bg-red-100 text-red-500": notification.type === "youtube",
                  "bg-purple-100 text-purple-600":
                    notification.type === "tiktok",
                }
              )}
            >
              <Icon size={28} />
            </div>
            <div className="flex-1">
              <p className="text-gray-900 font-semibold leading-snug">
                {notification.message}
              </p>
              <span className="text-xs text-gray-500 mt-1 block">
                {timeAgo}
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default NotificationList;
