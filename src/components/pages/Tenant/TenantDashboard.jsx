import React from "react";
import "../../../styles/Tenant/TenantDashboard.css";

export default function TenantDashboard() {
  return (
    <div className="tenant-dashboard-container">
      <h2 className="tenant-dashboard-title">Tenant Dashboard</h2>
      <div className="tenant-dashboard-grid">
        <div className="tenant-dashboard-card">
          <h3>Total Bookings</h3>
          <p>3</p>
        </div>
        <div className="tenant-dashboard-card">
          <h3>Active Complaints</h3>
          <p>2</p>
        </div>
        <div className="tenant-dashboard-card">
          <h3>Active Bookings</h3>
          <p>1</p>
        </div>
      </div>
    </div>
  );
}
