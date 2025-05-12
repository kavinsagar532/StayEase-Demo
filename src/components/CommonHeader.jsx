import React from "react";
import { Link } from "react-router-dom";
import "../styles/CommonHeader.css";

export default function CommonHeader() {
  return (
    <header className="common-header">
      <Link to="/" className="brand-link">
        <h1 className="brand-name">StayEase</h1>
      </Link>
      <nav className="nav-links">
        <ul>
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/signup" className="nav-link">Sign Up</Link>
          </li>
          <li>
            <Link to="/login" className="nav-link">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
