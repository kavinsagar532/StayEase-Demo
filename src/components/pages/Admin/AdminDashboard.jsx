import React from "react";
import "../../../styles/Admin/AdminDashboard.css";

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard-container">
      <h2 className="admin-dashboard-title">Admin Dashboard</h2>
      <div className="admin-dashboard-grid">
        <div className="admin-dashboard-card">
          <h3>Total Landlords</h3>
          <p>25</p>
        </div>
        <div className="admin-dashboard-card">
          <h3>Total Tenants</h3>
          <p>80</p>
        </div>
        <div className="admin-dashboard-card">
          <h3>Total Properties</h3>
          <p>45</p>
        </div>
        <div className="admin-dashboard-card">
          <h3>Total Bookings</h3>
          <p>120</p>
        </div>
        <div className="admin-dashboard-card">
          <h3>Total Complaints</h3>
          <p>10</p>
        </div>
      </div>
    </div>
  );
}
