import React from "react";
import "../../../styles/Landlord/LandlordComplaints.css";

const sampleComplaints = [
  {
    id: 1,
    propertyTitle: "Spacious 2BHK in HSR Layout",
    tenantName: "Ravi Kumar",
    complaint: "Water leakage in the bathroom needs urgent attention."
  },
  {
    id: 2,
    propertyTitle: "Studio Apartment",
    tenantName: "Neha Shah",
    complaint: "Wi-Fi is not working properly for the past 3 days."
  }
];

export default function LandlordComplaints() {
  return (
    <div className="landlord-complaints-container">
      <h2 className="landlord-complaints-title">Tenant Complaints</h2>
      <div className="complaints-list">
        {sampleComplaints.map((item) => (
          <div key={item.id} className="complaint-card">
            <h3 class="landlord-complaints-item">{item.propertyTitle}</h3>
            <p class="landlord-complaints-item"><strong>Tenant:</strong> {item.tenantName}</p>
            <p class="landlord-complaints-item"><strong>Complaint:</strong> {item.complaint}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
