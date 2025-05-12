import React, { useState } from "react";
import "../../../styles/Landlord/ConfirmedBookings.css";

const initialConfirmedBookings = [
  {
    id: 1,
    propertyTitle: "Modern 3BHK in Koramangala",
    tenantName: "Aditya Sharma",
    startDate: "2025-07-15",
    endDate: "2025-08-15",
    totalAmount: 75000,
    paymentStatus: "Completed"
  },
  {
    id: 2,
    propertyTitle: "Luxury Penthouse",
    tenantName: "Priya Patel",
    startDate: "2025-08-01",
    endDate: "2025-09-01",
    totalAmount: 100000,
    paymentStatus: "Completed"
  }
];

export default function ConfirmedBookings() {
  const [confirmedBookings] = useState(initialConfirmedBookings);

  return (
    <div className="landlord-confirmed-bookings-container">
      <h2 className="landlord-confirmed-bookings-title">Confirmed Bookings</h2>
      <div className="landlord-confirmed-booking-list">
        {confirmedBookings.map((booking) => (
          <div key={booking.id} className="landlord-confirmed-booking-card">
            <div className="landlord-confirmed-booking-card-header">
              <h3>{booking.propertyTitle}</h3>
              <span className="landlord-payment-status landlord-payment-completed">Paid</span>
            </div>
            <div className="landlord-confirmed-booking-card-body">
              <p><strong>Tenant:</strong> {booking.tenantName}</p>
              <p><strong>From:</strong> {booking.startDate}</p>
              <p><strong>To:</strong> {booking.endDate}</p>
              <p><strong>Total Amount:</strong> ₹{booking.totalAmount}</p>
              <p><strong>Payment Status:</strong> {booking.paymentStatus}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
