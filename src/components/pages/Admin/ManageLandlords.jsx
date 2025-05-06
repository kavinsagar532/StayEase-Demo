import React, { useState } from "react";
import "../../../styles/Admin/ManageLandlords.css";

const landlords = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "+1234567890",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+0987654321",
    status: "Blocked",
  },
  // Add more landlords as needed
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
