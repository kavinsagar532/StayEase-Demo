import React, { useState } from "react";
import "../../../styles/Admin/ManageComplaints.css";

const initialComplaints = [
  {
    id: 1,
    tenantName: "John Doe",
    complaint: "There is a water leakage in the bathroom.",
  },
  {
    id: 2,
    tenantName: "Jane Smith",
    complaint: "The AC is not working properly.",
  },
  {
    id: 3,
    tenantName: "Alice",
    complaint: "The Wi-Fi is down.",
  },
];

export default function ManageComplaints() {
  const [complaints, setComplaints] = useState(initialComplaints);

  return (
    <div className="manage-complaints-container">
      <h2 className="manage-complaints-title">Manage Complaints</h2>
      <div className="complaints-cards-container">
        {complaints.map((complaint) => (
          <div className="complaint-card" key={complaint.id}>
            <div className="complaint-card-left">
              <h3 className="complaint-tenant-name">{complaint.tenantName}</h3>
              <p className="complaint-text">{complaint.complaint}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
