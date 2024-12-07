import '../Style/header.css';
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const navigate = useNavigate();

  useEffect(() => {
    // Check login status on page load
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setIsLoggedIn(true); // Set state to true if user is logged in
    }
  }, []);

  const handleButtonClick = () => {
    if (isLoggedIn) {
      // Log out the user
      localStorage.removeItem("loggedInUser"); // Clear user data
      localStorage.removeItem("isLoggedIn");  // Clear logged-in flag
      localStorage.removeItem("alertShown")
      setIsLoggedIn(false); // Update state
      navigate("/login"); // Redirect to login page
    } else {
      // Navigate to login page
      navigate("/login");
    }
  };
  return (
      <>
  <header>
    <div class="logo">My Website</div>
    <nav>
      <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/addnotification">Add notification</a></li>
        <li> <button className='login-button1' onClick={handleButtonClick}>
        {isLoggedIn ? "Logout" : "Login"} {/* Conditionally render button text */}
      </button></li>
      </ul>
    </nav>
  </header>


      </>
    )
  }
  
  export default header;
  