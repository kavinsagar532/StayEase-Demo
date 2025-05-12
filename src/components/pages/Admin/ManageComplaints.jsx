import React, { useState } from "react";
import "../../../styles/Admin/ManageComplaints.css";

const initialComplaints = [
  {
    id: 1,
    tenantName: "John Doe",
    tenantContact: "9876543210",
    property: "Apartment 101, Green Towers",
    propertyLandlord: "Michael Thompson",
    landlordContact: "9123456789", // Added landlord contact
    complaint: "There is a water leakage in the bathroom.",
    issueType: "Plumbing",
    urgency: "High",
    status: "Pending",
    reportedDate: "2025-05-03",
    additionalDetails: "Water is causing damage to bathroom walls and floor"
  },
  {
    id: 2,
    tenantName: "Jane Smith",
    tenantContact: "8765432109",
    property: "Villa 5, Sunset Residency",
    propertyLandlord: "Emily Rodriguez",
    landlordContact: "9234567890", // Added landlord contact
    complaint: "The AC is not working properly.",
    issueType: "Maintenance",
    urgency: "Medium",
    status: "Pending",
    reportedDate: "2025-05-01",
    additionalDetails: "Room temperature is uncomfortably high"
  },
  {
    id: 3,
    tenantName: "Alice",
    tenantContact: "7654321098",
    property: "Studio 302, Tech Park Apartments",
    propertyLandlord: "David Kim",
    landlordContact: "9345678901", // Added landlord contact
    complaint: "The Wi-Fi is down.",
    issueType: "Utilities",
    urgency: "Low",
    status: "Solved",
    reportedDate: "2025-04-28",
    additionalDetails: "Internet connection is critical for remote work"
  },
];

export default function ManageComplaints() {
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
    <div className="manage-complaints-container">
      <h2 className="manage-complaints-title">Manage Complaints</h2>
      <div className="complaints-cards-container">
        {complaints.map((complaint) => (
          <div className="complaint-card" key={complaint.id}>
            <div className="complaint-header">
              <h3>{complaint.tenantName}</h3>
              <span className={`complaint-status ${complaint.status.toLowerCase()}`}>
                {complaint.status}
              </span>
            </div>
            <div className="complaint-details">
              <div className="complaint-detail">
                <strong>Property:</strong> {complaint.property}
              </div>
              <div className="complaint-detail">
                <strong>Property Landlord:</strong> {complaint.propertyLandlord}
              </div>
              <div className="complaint-detail">
                <strong>Landlord Contact:</strong> {complaint.landlordContact}
              </div>
              <div className="complaint-detail">
                <strong>Tenant Contact:</strong> {complaint.tenantContact}
              </div>
              <div className="complaint-detail">
                <strong>Issue Type:</strong> {complaint.issueType}
              </div>
              <div className="complaint-detail">
                <strong>Urgency:</strong> {complaint.urgency}
              </div>
              <div className="complaint-detail">
                <strong>Reported Date:</strong> {complaint.reportedDate}
              </div>
            </div>
            <p className="complaint-description">
              <strong>Complaint:</strong> {complaint.complaint}
            </p>
            {complaint.additionalDetails && (
              <p className="complaint-additional-details">
                <strong>Additional Details:</strong> {complaint.additionalDetails}
              </p>
            )}
            {complaint.status === 'Pending' && (
              <button 
                className="solve-complaint-btn" 
                onClick={() => handleSolveComplaint(complaint.id)}
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
