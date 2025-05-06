import React, { useState } from "react";
import "../../../styles/Tenant/SubmitComplaint.css";

export default function SubmitComplaint() {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to the backend
    alert("Complaint submitted successfully!");
    setSubject("");
    setDescription("");
  };

  return (
    <div className="submit-complaint-container">
      <h2 className="submit-complaint-title">Submit a Complaint</h2>
      <form onSubmit={handleSubmit} className="submit-complaint-form">
        <label>Subject:</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />

        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="5"
          required
        ></textarea>

        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
}
