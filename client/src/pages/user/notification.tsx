import React from "react";
import NotificationLayout from "@/components/users/Notifications/layout";
import NotificationList from "@/components/users/Notifications/NotificationList";
import { notifications } from "@/config/notifications.config";

const UserNotificationPage: React.FC = () => {
  return (
    <NotificationLayout>
      <NotificationList notifications={notifications} />
    </NotificationLayout>
  );
};

export default UserNotificationPage;
