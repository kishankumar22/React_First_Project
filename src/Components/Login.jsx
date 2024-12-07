import "../Style/Login.css";
import "../Style/indexpage.css";
import Layout from "./layout/Layout";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
  
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  
    const user = storedUsers.find(
      (user) => user.email === email && user.password === pass
    );
  
    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      localStorage.setItem("isLoggedIn", "true");
      console.log(user);
      navigate("/"); // Redirect to home page if login is successful
    } else {
      setMessage("Invalid email or password.");
    }
  };
    
  return (
    <div className="loginp">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        {message && <p className="error-message">{message}</p>}
        <p className="register-link">
          Don't have an account? <Link to="/registration">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
