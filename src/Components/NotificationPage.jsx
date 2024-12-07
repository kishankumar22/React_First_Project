// import React, { useState } from "react";
// import AddNotification from "./AddNotification";
// import Notifications from "./Notifications";

// const NotificationPage = () => {
//   const [notifications, setNotifications] = useState(
//     JSON.parse(localStorage.getItem("notifications")) || []
//   );

//   const handleAddNotification = (newNotification) => {
//     const updatedNotifications = [...notifications, newNotification];
//     setNotifications(updatedNotifications);
//     localStorage.setItem("notifications", JSON.stringify(updatedNotifications));
//   };

//   return (
//     <div>
//       <AddNotification onAddNotification={handleAddNotification} />
//       <Notifications notifications={notifications} />
//     </div>
//   );
// };

// export default NotificationPage;
