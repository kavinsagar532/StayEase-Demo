import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Login.css";

export default function Login() {
  return (
    <div className="login-page-container">
      <div className="login-left-container">
        <h2 className="login-title">Login to StayEase</h2>
        <p className="login-description">
          Seamlessly connect with the right property or tenant. Your gateway to hassle-free rentals.
        </p>
        <ul className="login-benefits">
          <li>Access personalized dashboards</li>
          <li>Manage bookings, complaints, and listings</li>
          <li>Fast and secure login for all roles</li>
        </ul>
        <p className="login-note">StayEase - Where comfort meets convenience.</p>
      </div>
      <div className="login-right-container">
        <div className="login-role-selection">
          <h3 className="login-role-title">Log in as:</h3>
          <div className="login-role-options">
            <Link to="/admin/login" className="login-role-btn">Admin</Link>
            <Link to="/landlord/login" className="login-role-btn">Landlord</Link>
            <Link to="/tenant/login" className="login-role-btn">Tenant</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
