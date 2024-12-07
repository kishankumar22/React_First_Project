import React, { useEffect, useState } from "react";
import "../Style/notifications.css";

const Notifications = ({ newNotification }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Load notifications from localStorage on component mount
    const storedNotifications =
      JSON.parse(localStorage.getItem("notifications")) || [];
    setNotifications(storedNotifications);
  }, []);

  useEffect(() => {
    if (newNotification) {
      // Prepend the new notification to the top of the list
      setNotifications((prevNotifications) => {
        const updatedNotifications = [newNotification, ...prevNotifications];
        // Save updated notifications to localStorage
        localStorage.setItem("notifications", JSON.stringify(updatedNotifications));
        return updatedNotifications;
      });
    }
  }, [newNotification]);

  return (
    <div className="NotificationWrapper">
      <div className="NotificationList">
        {notifications
          .slice() // Create a shallow copy of the array
          .reverse() // Reverse the order
          .map((note, index) => (
            <div className="NotificationItem" key={index}>
              {note}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Notifications;
