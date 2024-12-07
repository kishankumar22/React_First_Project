import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../Style/registration.css";


const Registration = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordStrength, setPasswordStrength] = useState(""); // Track password strength
  const [message, setMessage] = useState({ text: "", type: "" }); // message with type
  const [showPassword, setShowPassword] = useState(false); // Toggle for password visibility

  // Function to check password strength
  const evaluatePasswordStrength = (password) => {
    if (password.length < 6) return "Very Low";
    let strength = 0;
    if (/[a-z]/.test(password)) strength++; // Lowercase
    if (/[A-Z]/.test(password)) strength++; // Uppercase
    if (/\d/.test(password)) strength++; // Digit
    if (/[@$!%*?&#]/.test(password)) strength++; // Special character

    if (strength <= 1) return "Low";
    if (strength === 2) return "Medium";
    if (strength === 3) return "Strong";
    if (strength === 4) return "Very Strong";
    return "Extremely Strong";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If password field changes, evaluate its strength
    if (name === "password") {
      const strength = value ? evaluatePasswordStrength(value) : ""; // Only set strength if password is not empty
      setPasswordStrength(strength);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // If confirmPassword is being updated, check password match
    if (name === "confirmPassword") {
      if (value === formData.password) {
        setMessage({ text: "Passwords match", type: "success" });

        // Clear the message after 1 second
        setTimeout(() => {
          setMessage({ text: "", type: "" });
        }, 1000);
      } else if (value && value !== formData.password) {
        setMessage({ text: "Passwords do not match", type: "error" });
      } else {
        setMessage({ text: "", type: "" }); // Clear message if confirmPassword is empty
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, password, confirmPassword } = formData;

    // Password Validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/;
    if (!passwordRegex.test(password)) {
      setMessage({
        text: "Password must be at least 6 characters, include 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.",
        type: "error",
      });

      return;
    }

    if (!username) {
      setMessage({ text: "Username is required.", type: "error" });
      return;
    }

    if (password !== confirmPassword) {
      setMessage({ text: "Passwords do not match.", type: "error" });
      return;
    }

    // Validate email domain
    const allowedEmailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|[a-zA-Z0-9.-]+\.in)$/;
    if (!allowedEmailRegex.test(email)) {
      setMessage({ text: "Invalid email domain.", type: "error" });
      return;
    }

    // Retrieve existing users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the email is already registered
    const isEmailRegistered = storedUsers.some((user) => user.email === email);

    if (isEmailRegistered) {
      setMessage({
        text: "Email is already registered. Please use a different email.",
        type: "error",
      });
      return;
    }

    // Add new user to the list
    const updatedUsers = [...storedUsers, { username, email, password }];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setMessage({
      text: "Registration successful! You can now log in.",
      type: "success",
    });

    // Clear form data
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    // Redirect to the login page
    navigate("/login");
  };

  return (
   
      <div className="register">
        <div className="registration-container">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
             <div className="password-tools">
    
    {passwordStrength && (
      <p className={`strength ${passwordStrength.toLowerCase()}`}>
        Strength: {passwordStrength}
      </p>
    )}
  </div>
  </div>
            <div>
              <label>Confirm Password:</label>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
              />
              {message.text && (
                <p className={message.type === "success" ? "success" : "error"}>
                  {message.text}
                </p>
              )}
            </div>
            
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
 
  );
};

export default Registration;
