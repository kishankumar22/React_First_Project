import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "../Style/Login.css"; // Assuming Login.css contains reusable styles
import Header from "./header";
import Footer from "./Footer";

const AddNotification = () => {
  const [notification, setNotification] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleAddNotification = () => {
    if (notification.trim() === "") {
      alert("Notification text cannot be empty!");
      return;
    }

    const storedNotifications =
      JSON.parse(localStorage.getItem("notifications")) || [];

    storedNotifications.push(notification);

    localStorage.setItem("notifications", JSON.stringify(storedNotifications));

    alert("Notification added successfully!");

    setNotification(""); // Clear the input field

    // Redirect to index page after adding notification
    navigate("/"); // Navigating to the index page
  };

  return (
    <>
      <Header />
      <div className="loginp">
        <div className="login-container">
          <h1>Add Notification</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddNotification();
            }}
          >
            <div className="form-group">
              <label htmlFor="notification">Notification Text </label>
              <input
                type="text"
                id="notification"
                value={notification}
                onChange={(e) => setNotification(e.target.value)}
                placeholder="Enter notification"
              />
            </div>
            <button type="submit" className="login-button">
              Add Notification
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddNotification;
