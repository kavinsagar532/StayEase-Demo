import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Landlord/LandlordHeader.css";

export default function LandlordHeader() {
  return (
    <header className="landlord-header">
      <h1 className="landlord-header-title">StayEase</h1>
      <nav className="landlord-nav">
        <ul className="landlord-nav-list">
          <li className="landlord-nav-item">
            <Link to="/landlord/dashboard" className="landlord-nav-link"><b>Dashboard</b></Link>
          </li>
          <li className="landlord-nav-item">
            <Link to="/landlord/properties" className="landlord-nav-link"><b>My Properties</b></Link>
          </li>
          <li className="landlord-nav-item">
            <Link to="/landlord/add-property" className="landlord-nav-link"><b>Add Property</b></Link>
          </li>
          <li className="landlord-nav-item">
            <Link to="/landlord/bookings" className="landlord-nav-link"><b>Bookings</b></Link>
          </li>
          <li className="landlord-nav-item">
            <Link to="/landlord/complaints" className="landlord-nav-link"><b>Complaints</b></Link>
          </li>
          <li className="landlord-nav-item">
            <Link to="/landlord/landlord-profile" className="landlord-nav-link"><b>Profile</b></Link>
          </li>
          <li className="landlord-nav-item">
            <Link to="/" className="landlord-nav-link"><b>Logout</b></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
