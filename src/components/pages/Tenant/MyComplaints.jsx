import React, { useState, useEffect } from "react";
import "../../../styles/Tenant/MyComplaints.css";

export default function MyComplaints() {
  const [complaints, setComplaints] = useState([]);
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  useEffect(() => {
    // TODO: Replace with actual API call to fetch complaints
    const fetchComplaints = async () => {
      try {
        // Simulating API call with hardcoded data for now
        setComplaints([
          {
            id: 1,
            subject: "Water leakage in kitchen",
            description: "There is continuous water leakage from the kitchen sink that needs urgent attention.",
            date: "2025-05-03",
            propertyAddress: "Apartment 302, Green Towers",
            issueType: "Plumbing",
            urgency: "High",
            status: "Pending",
            contactNumber: "9876543210",
            additionalDetails: "The water is causing damage to kitchen cabinets and floor"
          },
          {
            id: 2,
            subject: "WiFi not working",
            description: "WiFi service has been down for the past two days. Please check with the provider.",
            date: "2025-05-01",
            propertyAddress: "Studio 101, Tech Park Apartments",
            issueType: "Utilities",
            urgency: "Medium",
            status: "Pending",
            contactNumber: "8765432109",
            additionalDetails: "Internet is crucial for work from home"
          }
        ]);
      } catch (error) {
        console.error("Error fetching complaints:", error);
      }
    };

    fetchComplaints();
  }, []);

  const handleSolveComplaint = (complaintId) => {
    setComplaints(prevComplaints => 
      prevComplaints.map(complaint => 
        complaint.id === complaintId && complaint.status === 'Pending'
          ? { ...complaint, status: 'Solved' }
          : complaint
      )
    );
  };

  const handleComplaintClick = (complaint) => {
    setSelectedComplaint(complaint);
  };

  const handleCloseComplaintDetails = () => {
    setSelectedComplaint(null);
  };

  return (
    <div className="my-complaints-container">
      <h2 className="my-complaints-title">My Complaints</h2>
      <div className="complaints-list">
        {complaints.map((complaint) => (
          <div 
            key={complaint.id} 
            className="complaint-box" 
            onClick={() => handleComplaintClick(complaint)}
            style={{ cursor: 'pointer' }}
          >
            <div className="complaint-header">
              <h3>{complaint.subject}</h3>
              <span className={`complaint-status ${complaint.status.toLowerCase()}`}>
                {complaint.status}
              </span>
            </div>
            <div className="complaint-details">
              <div className="complaint-detail">
                <strong>Date:</strong> {complaint.date}
              </div>
              <div className="complaint-detail">
                <strong>Property:</strong> {complaint.propertyAddress}
              </div>
              <div className="complaint-detail">
                <strong>Issue Type:</strong> {complaint.issueType}
              </div>
              <div className="complaint-detail">
                <strong>Urgency:</strong> {complaint.urgency}
              </div>
              <div className="complaint-detail">
                <strong>Contact Number:</strong> {complaint.contactNumber}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedComplaint && (
        <div className="complaint-details-modal">
          <div className="complaint-details-content">
            <button 
              className="close-details-btn" 
              onClick={handleCloseComplaintDetails}
            >
              ×
            </button>
            <h2>{selectedComplaint.subject}</h2>
            <p className="complaint-desc">
              <strong>Description:</strong> {selectedComplaint.description}
            </p>
            <div className="complaint-details">
              <div><strong>Date:</strong> {selectedComplaint.date}</div>
              <div><strong>Property:</strong> {selectedComplaint.propertyAddress}</div>
              <div><strong>Issue Type:</strong> {selectedComplaint.issueType}</div>
              <div><strong>Urgency:</strong> {selectedComplaint.urgency}</div>
              <div><strong>Status:</strong> {selectedComplaint.status}</div>
              <div><strong>Contact Number:</strong> {selectedComplaint.contactNumber}</div>
            </div>
            {selectedComplaint.additionalDetails && (
              <p className="complaint-additional-details">
                <strong>Additional Details:</strong> {selectedComplaint.additionalDetails}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
