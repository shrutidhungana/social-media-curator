import React from "react";
import NotificationList from "@/components/users/NotificationList";
import { notifications } from "@/config/notifications.config";

const UserNotificationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Notifications</h1>
        <NotificationList notifications={notifications} />
      </div>
    </div>
  );
};

export default UserNotificationPage;
