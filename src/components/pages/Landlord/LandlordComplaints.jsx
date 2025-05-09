import React, { useState } from 'react';
import "../../../styles/Landlord/LandlordComplaints.css";

const initialComplaints = [
  {
    id: 1,
    propertyTitle: "Spacious 2BHK in HSR Layout",
    propertyAddress: "Apartment 302, Green Towers",
    tenantName: "Ravi Kumar",
    tenantContact: "9876543210",
    complaint: "Water leakage in the bathroom needs urgent attention.",
    issueType: "Plumbing",
    urgency: "High",
    status: "Pending",
    reportedDate: "2025-05-03",
    additionalDetails: "Water is causing damage to bathroom tiles and floor"
  },
  {
    id: 2,
    propertyTitle: "Studio Apartment",
    propertyAddress: "Studio 101, Tech Park Apartments",
    tenantName: "Neha Shah",
    tenantContact: "8765432109",
    complaint: "Wi-Fi is not working properly for the past 3 days.",
    issueType: "Utilities",
    urgency: "Medium",
    status: "Pending",
    reportedDate: "2025-05-01",
    additionalDetails: "Internet is crucial for work from home"
  }
];

export default function LandlordComplaints() {
  const [complaints, setComplaints] = useState(initialComplaints);

  const handleSolveComplaint = (complaintId) => {
    setComplaints(prevComplaints => 
      prevComplaints.map(complaint => 
        complaint.id === complaintId && complaint.status === 'Pending' 
          ? { ...complaint, status: 'Solved' } 
          : complaint
      )
    );
  };

  return (
    <div className="landlord-complaints-container">
      <h2 className="landlord-complaints-title">Tenant Complaints</h2>
      <div className="complaints-list">
        {complaints.map((item) => (
          <div key={item.id} className="complaint-card">
            <div className="complaint-header">
              <h3>{item.propertyTitle}</h3>
              <span className={`complaint-status ${item.status.toLowerCase()}`}>
                {item.status}
              </span>
            </div>
            <div className="complaint-details">
              <div className="complaint-detail">
                <strong>Property Address:</strong> {item.propertyAddress}
              </div>
              <div className="complaint-detail">
                <strong>Tenant Name:</strong> {item.tenantName}
              </div>
              <div className="complaint-detail">
                <strong>Tenant Contact:</strong> {item.tenantContact}
              </div>
              <div className="complaint-detail">
                <strong>Issue Type:</strong> {item.issueType}
              </div>
              <div className="complaint-detail">
                <strong>Urgency:</strong> {item.urgency}
              </div>
              <div className="complaint-detail">
                <strong>Reported Date:</strong> {item.reportedDate}
              </div>
            </div>
            <p className="complaint-description">
              <strong>Complaint:</strong> {item.complaint}
            </p>
            {item.additionalDetails && (
              <p className="complaint-additional-details">
                <strong>Additional Details:</strong> {item.additionalDetails}
              </p>
            )}
            {item.status === 'Pending' && (
              <button 
                className="solve-complaint-btn" 
                onClick={() => handleSolveComplaint(item.id)}
              >
                Mark as Solved
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
