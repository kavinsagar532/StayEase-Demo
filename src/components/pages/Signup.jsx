import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Signup.css";

export default function Signup() {
  return (
    <div className="signup-page-container">
      <div className="signup-left-container">
        <h2 className="signup-title">Join StayEase</h2>
        <p className="signup-description">
          Whether you're looking for a place to stay or listing your property, StayEase makes it simple and secure.
        </p>
        <ul className="signup-benefits">
          <li>Easy property listing for landlords</li>
          <li>Effortless room search for tenants</li>
          <li>Secure and streamlined platform</li>
          <li>Manage your bookings and profiles with ease</li>
        </ul>
        <p className="signup-note">
          Choose your role below to create your account and start your journey with StayEase.
        </p>
      </div>
      <div className="signup-right-container">
        <div className="signup-role-selection">
          <h3 className="signup-role-title">Sign up as:</h3>
          <div className="signup-role-options">
            <Link to="/landlord/signup" className="signup-role-btn">Landlord</Link>
            <Link to="/tenant/signup" className="signup-role-btn">Tenant</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
