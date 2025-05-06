import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Tenant/TenantHeader.css";

export default function TenantHeader() {
  return (
    <header className="tenant-header">
      <h1 className="tenant-header-title">StayEase</h1>
      <nav className="tenant-nav">
        <ul className="tenant-nav-list">
          <li className="tenant-nav-item">
            <Link to="/tenant/dashboard" className="tenant-nav-link"><b>Dashboard</b></Link>
          </li>
          <li className="tenant-nav-item">
            <Link to="/tenant/view-properties" className="tenant-nav-link"><b>View Properties</b></Link>
          </li>
          <li className="tenant-nav-item">
            <Link to="/tenant/bookings" className="tenant-nav-link"><b>My Bookings</b></Link>
          </li>
          <li className="tenant-nav-item">
            <Link to="/tenant/my-complaints" className="tenant-nav-link"><b>My Complaints</b></Link>
          </li>
          <li className="tenant-nav-item">
            <Link to="/tenant/add-complaints" className="tenant-nav-link"><b>Add Complaint</b></Link>
          </li>
          <li className="tenant-nav-item">
            <Link to="/tenant/tenant-profile" className="tenant-nav-link"><b>Profile</b></Link>
          </li>
          <li className="tenant-nav-item">
            <Link to="/" className="tenant-nav-link"><b>Logout</b></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
