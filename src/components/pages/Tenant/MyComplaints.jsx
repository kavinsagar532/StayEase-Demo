import React, { useState, useEffect } from "react";
import "../../../styles/Tenant/MyComplaints.css";

export default function MyComplaints() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    // Simulated API data with fields matching ManageComplaints
    setComplaints([
      {
        id: 1,
        tenantName: "Ravi Kumar",
        tenantContact: "9876543210",
        property: "Apartment 302, Green Towers",
        propertyLandlord: "Michael Thompson",
        landlordContact: "9123456789",
        complaint: "There is continuous water leakage from the kitchen sink.",
        issueType: "Plumbing",
        urgency: "High",
        status: "Pending",
        reportedDate: "2025-05-03",
        additionalDetails: "The water is causing damage to kitchen cabinets and floor"
      },
      {
        id: 2,
        tenantName: "Anjali Mehta",
        tenantContact: "8765432109",
        property: "Studio 101, Tech Park Apartments",
        propertyLandlord: "David Kim",
        landlordContact: "9345678901",
        complaint: "WiFi service has been down for the past two days.",
        issueType: "Utilities",
        urgency: "Medium",
        status: "Solved",
        reportedDate: "2025-05-01",
        additionalDetails: "Internet is crucial for work from home",
        responseNotes: "Contacted service provider; issue resolved."
      }
    ]);
  }, []);

  return (
    <div className="tenant-myowncomplaints-container">
      <h2 className="tenant-myowncomplaints-title">My Complaints</h2>
      <div className="tenant-myowncomplaints-cards-container">
        {complaints.map((complaint) => (
          <div className="tenant-myowncomplaints-card" key={complaint.id}>
            <div className="tenant-myowncomplaints-header">
              <h3>{complaint.tenantName}</h3>
              <span className={`tenant-myowncomplaints-status ${complaint.status.toLowerCase()}`}>
                {complaint.status}
              </span>
            </div>
            <div className="tenant-myowncomplaints-details">
              <div className="tenant-myowncomplaints-detail">
                <strong>Property:</strong> {complaint.property}
              </div>
              <div className="tenant-myowncomplaints-detail">
                <strong>Landlord:</strong> {complaint.propertyLandlord}
              </div>
              <div className="tenant-myowncomplaints-detail">
                <strong>Landlord Contact:</strong> {complaint.landlordContact}
              </div>
              <div className="tenant-myowncomplaints-detail">
                <strong>My Contact:</strong> {complaint.tenantContact}
              </div>
              <div className="tenant-myowncomplaints-detail">
                <strong>Issue Type:</strong> {complaint.issueType}
              </div>
              <div className="tenant-myowncomplaints-detail">
                <strong>Urgency:</strong> {complaint.urgency}
              </div>
              <div className="tenant-myowncomplaints-detail">
                <strong>Reported Date:</strong> {complaint.reportedDate}
              </div>
            </div>
            <p className="tenant-myowncomplaints-description">
              <strong>Complaint:</strong> {complaint.complaint}
            </p>
            {complaint.additionalDetails && (
              <p className="tenant-myowncomplaints-additional-details">
                <strong>Additional Details:</strong> {complaint.additionalDetails}
              </p>
            )}
            {complaint.responseNotes && (
              <p className="tenant-myowncomplaints-additional-details">
                <strong>Response Notes:</strong> {complaint.responseNotes}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
