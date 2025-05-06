import React from "react";
import "../../../styles/Landlord/LandlordBookings.css";

const sampleBookings = [
  {
    id: 1,
    propertyTitle: "Spacious 2BHK in HSR Layout",
    tenantName: "Ravi Kumar",
    startDate: "2025-05-10",
    endDate: "2025-11-10",
    paymentStatus: "Paid"
  },
  {
    id: 2,
    propertyTitle: "Studio Apartment",
    tenantName: "Neha Shah",
    startDate: "2025-06-01",
    endDate: "2025-12-01",
    paymentStatus: "Pending"
  }
];

export default function LandlordBookings() {
  return (
    <div className="landlord-bookings-container">
      <h2 className="landlord-bookings-title">Bookings</h2>
      <div className="booking-list">
        {sampleBookings.map((booking) => (
          <div key={booking.id} className="booking-card">
            <h3>{booking.propertyTitle}</h3>
            <p><strong>Tenant:</strong> {booking.tenantName}</p>
            <p><strong>From:</strong> {booking.startDate}</p>
            <p><strong>To:</strong> {booking.endDate}</p>
            <p><strong>Payment:</strong> <span className={booking.paymentStatus.toLowerCase()}>{booking.paymentStatus}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}
