"use client";

import React from "react";
import { NotificationItem } from "@/types/notificationTypes";
import clsx from "clsx";

type NotificationListProps = {
  notifications: NotificationItem[];
};

const NotificationList: React.FC<NotificationListProps> = ({
  notifications,
}) => {
  return (
    <div className="flex flex-col gap-3">
      {notifications.map((notification) => {
        const Icon = notification.Icon;
        return (
          <a
            key={notification.id}
            href={notification.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-100 transition-colors bg-white shadow"
          >
            <div className="flex-none text-blue-600">
              <Icon size={20} />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-800">{notification.message}</p>
              <span className="text-xs text-gray-500">
                {notification.timestamp}
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default NotificationList;
