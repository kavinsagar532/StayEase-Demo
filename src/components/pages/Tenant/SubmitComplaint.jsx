import React, { useState } from "react";
import "../../../styles/Tenant/SubmitComplaint.css";

export default function SubmitComplaint() {
  const [complaintDetails, setComplaintDetails] = useState({
    subject: "",
    description: "",
    additionalDetails: "",
    propertyAddress: "",
    issueType: "",
    urgency: "low",
    contactNumber: "",
    email: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setComplaintDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Complaint Details:", complaintDetails);
    alert("Complaint submitted successfully!");
    setComplaintDetails({
      subject: "",
      description: "",
      additionalDetails: "",
      propertyAddress: "",
      issueType: "",
      urgency: "low",
      contactNumber: "",
      email: ""
    });
  };

  return (
    <div className="tenant-mycomplaintsubmission-container">
      <h2 className="tenant-mycomplaintsubmission-title">Submit a Detailed Complaint</h2>
      <form onSubmit={handleSubmit} className="tenant-mycomplaintsubmission-form">
        <div className="tenant-mycomplaintsubmission-form-group">
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={complaintDetails.subject}
            onChange={handleInputChange}
            placeholder="Brief summary of your complaint"
            required
          />
        </div>

        <div className="tenant-mycomplaintsubmission-form-group">
          <label>Property Address:</label>
          <input
            type="text"
            name="propertyAddress"
            value={complaintDetails.propertyAddress}
            onChange={handleInputChange}
            placeholder="Full address of the property"
            required
          />
        </div>

        <div className="tenant-mycomplaintsubmission-form-group">
          <label>Issue Type:</label>
          <select
            name="issueType"
            value={complaintDetails.issueType}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Issue Type</option>
            <option value="maintenance">Maintenance</option>
            <option value="plumbing">Plumbing</option>
            <option value="electrical">Electrical</option>
            <option value="pest-control">Pest Control</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="tenant-mycomplaintsubmission-form-group">
          <label>Urgency Level:</label>
          <select
            name="urgency"
            value={complaintDetails.urgency}
            onChange={handleInputChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="emergency">Emergency</option>
          </select>
        </div>

        <div className="tenant-mycomplaintsubmission-form-group">
          <label>Contact Number:</label>
          <input
            type="tel"
            name="contactNumber"
            value={complaintDetails.contactNumber}
            onChange={handleInputChange}
            placeholder="Your contact number"
            pattern="[0-9]{10}"
          />
        </div>

        <div className="tenant-mycomplaintsubmission-form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={complaintDetails.email}
            onChange={handleInputChange}
            placeholder="Your email address"
          />
        </div>

        <div className="tenant-mycomplaintsubmission-form-group tenant-mycomplaintsubmission-full-width">
          <label>Description:</label>
          <textarea
            name="description"
            value={complaintDetails.description}
            onChange={handleInputChange}
            rows="6"
            placeholder="Provide a detailed description of the issue"
            required
          ></textarea>
        </div>

        <div className="tenant-mycomplaintsubmission-form-group tenant-mycomplaintsubmission-full-width">
          <label>Additional Details:</label>
          <textarea
            name="additionalDetails"
            value={complaintDetails.additionalDetails}
            onChange={handleInputChange}
            rows="6"
            placeholder="Provide any other relevant information"
          ></textarea>
        </div>

        <button type="submit" className="tenant-mycomplaintsubmission-submit-btn">
          Submit Complaint
        </button>
      </form>
    </div>
  );
}
