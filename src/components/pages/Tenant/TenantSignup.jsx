import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../styles/Tenant/TenantSignup.css";

export default function TenantSignup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tenant signup submitted");
    // Navigate to the login page after signup
    navigate("/tenant/login");
  };

  return (
    <div className="tenant-signup-container">
      <div className="tenant-signup-left">
        <h2 className="tenant-signup-title">Tenant Sign Up</h2>
        <p className="tenant-signup-description">
          Fill in your details to become a tenant.
        </p>
        <ul className="tenant-signup-features">
          <li>Easy to find your perfect room/PG.</li>
          <li>Track your bookings and payments.</li>
          <li>Secure and trusted platform for tenants.</li>
        </ul>
        <p className="tenant-signup-tagline">
          Start your journey with us today!
        </p>
      </div>
      <div className="tenant-signup-right">
        <form onSubmit={handleSubmit} className="tenant-signup-form">
          <div className="tenant-signup-form-group">
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
          <div className="tenant-signup-form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="tenant-signup-form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="tenant-signup-form-group">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="tenant-signup-form-group">
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
          <button type="submit" className="tenant-signup-btn">Sign Up</button>
        </form>
        <p className="tenant-signup-login-link">
          Already have an account? <Link to="/tenant/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}
