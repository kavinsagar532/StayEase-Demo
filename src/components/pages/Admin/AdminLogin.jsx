import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/Admin/AdminLogin.css";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in as Admin...");
    navigate("/admin/dashboard");
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-left">
        <div className="admin-login-left-content">
          <h1 className="admin-login-title">Welcome Back, Admin!</h1>
          <p className="admin-login-description">
            Manage tenants, oversee landlord activities, resolve complaints, and
            maintain platform integrity all in one place.
          </p>
          <ul className="admin-login-features">
            <li>Dashboard overview and analytics</li>
            <li>Monitor room listings and bookings</li>
            <li>Address user complaints efficiently</li>
            <li>Ensure platform security and quality</li>
          </ul>
          <p className="admin-login-tagline">Your decisions shape the StayEase experience.</p>
        </div>
      </div>

      <div className="admin-login-right">
        <form onSubmit={handleSubmit} className="admin-login-form">
          <div className="admin-login-form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="admin-login-form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="admin-login-btn">Login</button>
        </form>
      </div>
    </div>
  );
}
