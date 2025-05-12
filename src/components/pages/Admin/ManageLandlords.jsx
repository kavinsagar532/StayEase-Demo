import React, { useState } from "react";
import "../../../styles/Admin/ManageLandlords.css";

const landlords = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "+1234567890",
    status: "Active",
    registrationDate: "2023-01-15",
    gender: "Male",
    totalProperties: 3,
    completedBookings: 5,
    activeComplaints: 1,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+0987654321",
    status: "Blocked",
    registrationDate: "2023-03-22",
    gender: "Female",
    totalProperties: 1,
    completedBookings: 2,
    activeComplaints: 0,
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael@example.com",
    phone: "+1122334455",
    status: "Active",
    registrationDate: "2022-11-10",
    gender: "Male",
    totalProperties: 5,
    completedBookings: 12,
    activeComplaints: 2,
  }
];

export default function ManageLandlords() {
  const [landlordList, setLandlordList] = useState(landlords);

  const toggleStatus = (id) => {
    setLandlordList((prevList) =>
      prevList.map((landlord) =>
        landlord.id === id
          ? { ...landlord, status: landlord.status === "Active" ? "Blocked" : "Active" }
          : landlord
      )
    );
  };

  const handleDelete = (id) => {
    setLandlordList((prevList) => prevList.filter((landlord) => landlord.id !== id));
  };

  return (
    <div className="manage-landlords-container">
      <h2 className="manage-landlords-title">Manage Landlords</h2>
      <div className="landlord-cards-container">
        {landlordList.map((landlord) => (
          <div className="landlord-card" key={landlord.id}>
            <div className="landlord-card-header">
              <h3 className="landlord-card-name">{landlord.name}</h3>
              <span className={`landlord-status ${landlord.status.toLowerCase()}`}>
                {landlord.status}
              </span>
            </div>
            <div className="landlord-card-body">
              <p><strong>Email:</strong> {landlord.email}</p>
              <p><strong>Phone:</strong> {landlord.phone}</p>
              <div className="landlord-card-details">
                <div className="landlord-detail-section">
                  <h4>Profile Overview</h4>
                  <p><strong>Registration Date:</strong> {landlord.registrationDate}</p>
                  <p><strong>Gender:</strong> {landlord.gender}</p>
                </div>
                <div className="landlord-detail-section">
                  <h4>Property Insights</h4>
                  <p><strong>Total Properties:</strong> {landlord.totalProperties}</p>
                  <p><strong>Completed Bookings:</strong> {landlord.completedBookings}</p>
                  <p><strong>Active Complaints:</strong> {landlord.activeComplaints}</p>
                </div>
              </div>
            </div>
            <div className="landlord-card-actions">
              <button
                onClick={() => toggleStatus(landlord.id)}
                className="landlord-action-btn"
              >
                {landlord.status === "Active" ? "Block" : "Unblock"}
              </button>
              <button
                onClick={() => handleDelete(landlord.id)}
                className="landlord-delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
