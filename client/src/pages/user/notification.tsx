import React from "react";
import UserLayout from "@/components/users/Notifications/layout";
import NotificationList from "@/components/users/Notifications/NotificationList";
import { notifications } from "@/config/notifications.config";

const UserNotificationPage: React.FC = () => {
  return (
    <UserLayout>
      <NotificationList notifications={notifications} />
    </UserLayout>
  );
};

export default UserNotificationPage;
