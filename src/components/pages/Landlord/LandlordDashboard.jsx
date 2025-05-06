import React from "react";
import "../../../styles/Landlord/LandlordDashboard.css";

export default function LandlordDashboard() {
  const totalProperties = 5;
  const totalBookings = 12;
  const totalComplaints = 2;

  return (
    <div className="landlord-dashboard-container">
      <h2 className="landlord-dashboard-title">Landlord Dashboard</h2>
      <div className="landlord-stats-grid">
        <div className="landlord-stat-card">
          <h3>Total Properties</h3>
          <p>{totalProperties}</p>
        </div>
        <div className="landlord-stat-card">
          <h3>Total Bookings</h3>
          <p>{totalBookings}</p>
        </div>
        <div className="landlord-stat-card">
          <h3>Total Complaints</h3>
          <p>{totalComplaints}</p>
        </div>
      </div>
    </div>
  );
}
