import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../styles/Landlord/LandlordLogin.css";

export default function LandlordLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in as Landlord...");
    navigate("/landlord/dashboard"); // Navigate to dashboard after login
  };

  return (
    <div className="landlord-login-container">
      <div className="landlord-login-left-container">
        <h2 className="landlord-login-title">Landlord Login</h2>
        <p className="landlord-login-description">
          Enter your credentials to access your landlord dashboard. Stay connected to your properties and tenants easily.
        </p>
        <ul className="landlord-login-features">
          <li>Manage property listings</li>
          <li>Track tenant applications</li>
          <li>Set rental prices and availability</li>
          <li>Receive notifications for tenant requests</li>
        </ul>
        <p className="landlord-login-tagline">
          Your decisions shape the StayEase experience.
        </p>
      </div>
      <div className="landlord-login-right-container">
        <form onSubmit={handleSubmit}>
          <div className="landlord-form-group">
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
          <div className="landlord-form-group">
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
          <button type="submit" className="landlord-btn">Login</button>
        </form>
        <p className="landlord-signup-link">
          Don't have an account? <Link to="/landlord/signup">Sign up here</Link>
        </p>
      </div>
    </div>
  );
}
