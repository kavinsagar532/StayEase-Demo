import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Fallback to native date input if react-datepicker fails
import "../../../styles/Tenant/BookProperty.css";

export default function BookProperty() {
  const location = useLocation();
  const navigate = useNavigate();
  const { property } = location.state || {};

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleBooking = () => {
    if (!startDate || !endDate) {
      alert('Please select both start and end dates');
      return;
    }

    // TODO: Implement actual booking logic with backend
    const bookingDetails = {
      propertyId: property.id,
      propertyTitle: property.title,
      startDate,
      endDate
    };

    console.log('Booking Details:', bookingDetails);
    alert('Booking request sent to landlord!');
    navigate('/tenant/bookings');
  };

  if (!property) {
    return <div>No property selected</div>;
  }

  return (
    <div className="book-property-container">
      <h2>Book Property: {property.title}</h2>
      <div className="booking-details">
        <p><strong>Location:</strong> {property.location}</p>
        <p><strong>Rent:</strong> {property.rent}</p>
      </div>
      
      <div className="date-selection">
        <div className="date-picker-group">
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate ? startDate.toISOString().split('T')[0] : ''}
            onChange={(e) => setStartDate(new Date(e.target.value))}
            min={new Date().toISOString().split('T')[0]}
            className="date-input"
          />
        </div>
        
        <div className="date-picker-group">
          <label>End Date:</label>
          <input
            type="date"
            value={endDate ? endDate.toISOString().split('T')[0] : ''}
            onChange={(e) => setEndDate(new Date(e.target.value))}
            min={startDate ? startDate.toISOString().split('T')[0] : new Date().toISOString().split('T')[0]}
            className="date-input"
          />
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
  );
}
