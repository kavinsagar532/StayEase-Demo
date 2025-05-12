import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../../styles/Tenant/BookProperty.css";

export default function BookProperty() {
  const location = useLocation();
  const navigate = useNavigate();
  const { property } = location.state || {};

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleBooking = () => {
    if (!startDate || !endDate) {
      alert("Please select both start and end dates");
      return;
    }

    const bookingDetails = {
      propertyId: property.id,
      propertyTitle: property.title,
      startDate,
      endDate,
    };

    console.log("Booking Details:", bookingDetails);
    alert("Booking request sent to landlord!");
    navigate("/tenant/bookings");
  };

  if (!property) {
    return <div className="no-property-message">No property selected</div>;
  }

  return (
    <div className="book-property-container">
      <div className="booking-card">
        <h2 className="booking-title">Book Property: {property.title}</h2>

        <div className="property-details-section">
          <h3 className="section-title">Property Details</h3>
          <div className="property-details-grid">
            <div className="detail-item">
              <span className="detail-label">Location:</span>
              <span className="detail-value">
                {property.location || "N/A"}
              </span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Rent:</span>
              <span className="detail-value">₹10000</span>
            </div>
          </div>
        </div>

        <div className="date-selection-section">
          <h3 className="section-title">Select Dates</h3>
          <div className="date-pickers">
            <div className="date-picker-group">
              <label className="date-label">Start Date</label>
              <input
                type="date"
                value={startDate ? startDate.toISOString().split("T")[0] : ""}
                onChange={(e) => setStartDate(new Date(e.target.value))}
                min={new Date().toISOString().split("T")[0]}
                className="date-input"
              />
            </div>

            <div className="date-picker-group">
              <label className="date-label">End Date</label>
              <input
                type="date"
                value={endDate ? endDate.toISOString().split("T")[0] : ""}
                onChange={(e) => setEndDate(new Date(e.target.value))}
                min={
                  startDate
                    ? startDate.toISOString().split("T")[0]
                    : new Date().toISOString().split("T")[0]
                }
                className="date-input"
              />
            </div>
          </div>
        </div>

        <button
          className="submit-booking-btn"
          onClick={handleBooking}
          disabled={!startDate || !endDate}
        >
          Submit Booking Request
        </button>
      </div>
    </div>
  );
}
