import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../styles/Tenant/TenantLogin.css";

export default function TenantLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in as Tenant...");
    navigate("/tenant/dashboard");
  };

  return (
    <div className="tenant-login-container">
      <div className="tenant-login-left-container">
        <h2 className="tenant-login-title">Tenant Login</h2>
        <p className="tenant-login-description">
          Securely access your personalized tenant dashboard.
        </p>
        <ul className="tenant-login-features">
          <li>Search and book verified PGs</li>
          <li>Track your current stay and bookings</li>
          <li>Raise service complaints easily</li>
        </ul>
        <p className="tenant-login-tagline">Find comfort. Live peacefully.</p>
      </div>
      <div className="tenant-login-right-container">
        <form onSubmit={handleSubmit}>
          <div className="tenant-form-group">
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
          <div className="tenant-form-group">
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
          <button type="submit" className="tenant-btn">Login</button>
        </form>
        <p className="tenant-signup-link">
          Don't have an account? <Link to="/tenant/signup">Sign up here</Link>
        </p>
      </div>
    </div>
  );
}
