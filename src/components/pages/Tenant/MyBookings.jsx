import React from "react";
import "../../../styles/Tenant/MyBookings.css";

const bookings = [
  {
    id: 1,
    propertyTitle: "Modern 2 BHK Flat",
    location: "Bangalore",
    rent: "₹15,000",
    status: "Confirmed",
    date: "2025-05-01",
  },
  {
    id: 2,
    propertyTitle: "1 RK Studio Apartment",
    location: "Hyderabad",
    rent: "₹8,000",
    status: "Pending",
    date: "2025-05-03",
  },
];

export default function MyBookings() {
  return (
    <div className="my-bookings-container">
      <h2 className="my-bookings-title">My Bookings</h2>
      <div className="booking-cards-container">
        {bookings.map((booking) => (
          <div className="booking-card" key={booking.id}>
            <h3>{booking.propertyTitle}</h3>
            <p><strong>Location:</strong> {booking.location}</p>
            <p><strong>Rent:</strong> {booking.rent}</p>
            <p><strong>Date:</strong> {booking.date}</p>
            <p className={`booking-status ${booking.status.toLowerCase()}`}>
              {booking.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
