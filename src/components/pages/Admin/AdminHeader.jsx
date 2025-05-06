import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Admin/AdminHeader.css";

export default function AdminHeader() {
  return (
    <header className="admin-header">
      <h1 className="admin-header-title">StayEase</h1>
      <nav className="admin-nav">
        <ul className="admin-nav-list">
          <li className="admin-nav-item">
            <Link to="/admin/dashboard" className="admin-nav-link"><b>Dashboard</b></Link>
          </li>
          <li className="admin-nav-item">
            <Link to="/admin/manage-landlords" className="admin-nav-link"><b>Manage Landlords</b></Link>
          </li>
          <li className="admin-nav-item">
            <Link to="/admin/manage-tenants" className="admin-nav-link"><b>Manage Tenants</b></Link>
          </li>
          <li className="admin-nav-item">
            <Link to="/admin/manage-properties" className="admin-nav-link"><b>Manage Properties</b></Link>
          </li>
          <li className="admin-nav-item">
            <Link to="/admin/complaints" className="admin-nav-link"><b>Complaints</b></Link>
          </li>
          <li className="admin-nav-item">
            <Link to="/admin/bookings" className="admin-nav-link"><b>Bookings</b></Link>
          </li>
          <li className="admin-nav-item">
            <Link to="/" className="admin-nav-link"><b>Logout</b></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
