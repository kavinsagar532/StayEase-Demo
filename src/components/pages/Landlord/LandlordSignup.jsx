import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../styles/Landlord/LandlordSignup.css";

export default function LandlordSignup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Landlord signup submitted");
    navigate("/landlord/login");
  };

  return (
    <div className="landlord-signup-container">
      <div className="landlord-signup-left">
        <h2 className="landlord-signup-title">Landlord Sign Up</h2>
        <p className="landlord-signup-description">
          Fill in your details to become a landlord and start listing your properties today!
        </p>
        <ul className="landlord-signup-features">
          <li>Manage your listings easily</li>
          <li>Reach verified tenants</li>
          <li>Track rent payments online</li>
        </ul>
        <p className="landlord-signup-tagline">Join StayEase today – hassle-free property management.</p>
      </div>

      <div className="landlord-signup-right">
        <form onSubmit={handleSubmit} className="landlord-signup-form">
          <div className="landlord-signup-form-group">
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
          <div className="landlord-signup-form-group">
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
          <div className="landlord-signup-form-group">
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
          <div className="landlord-signup-form-group">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="landlord-signup-form-group">
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
          <button type="submit" className="landlord-signup-btn">Sign Up</button>
        </form>
        <p className="landlord-signup-login-link">
          Already have an account? <Link to="/landlord/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}
