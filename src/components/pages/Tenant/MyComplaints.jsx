import React from "react";
import "../../../styles/Tenant/MyComplaints.css";

const complaints = [
  {
    id: 1,
    subject: "Water leakage in kitchen",
    description: "There is continuous water leakage from the kitchen sink that needs urgent attention.",
    date: "2025-05-03"
  },
  {
    id: 2,
    subject: "WiFi not working",
    description: "WiFi service has been down for the past two days. Please check with the provider.",
    date: "2025-05-01"
  }
];

export default function MyComplaints() {
  return (
    <div className="my-complaints-container">
      <h2 className="my-complaints-title">My Complaints</h2>
      <div className="complaints-list">
        {complaints.map((complaint) => (
          <div className="complaint-box" key={complaint.id}>
            <h3>{complaint.subject}</h3>
            <p className="complaint-date"><strong>Date:</strong> {complaint.date}</p>
            <p className="complaint-desc">{complaint.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
