import React, { useState } from "react";
import "../../../styles/Admin/ManageBookings.css";

const initialBookings = [
  {
    id: 1,
    tenantName: "John Doe",
    propertyTitle: "2 BHK Apartment",
    location: "Bangalore",
    bookingDate: "2025-05-01",
  },
  {
    id: 2,
    tenantName: "Jane Smith",
    propertyTitle: "1 RK Studio",
    location: "Hyderabad",
    bookingDate: "2025-05-03",
  },
  {
    id: 3,
    tenantName: "Alice",
    propertyTitle: "3 BHK Villa",
    location: "Delhi",
    bookingDate: "2025-05-05",
  },
];

export default function ManageBookings() {
  const [bookings] = useState(initialBookings);

  return (
    <div className="manage-bookings-container">
      <h2 className="manage-bookings-title">Manage Bookings</h2>
      <div className="booking-cards-container">
        {bookings.map((booking) => (
          <div className="booking-card" key={booking.id}>
            <h3 className="booking-tenant-name">{booking.tenantName}</h3>
            <p><strong>Property:</strong> {booking.propertyTitle}</p>
            <p><strong>Location:</strong> {booking.location}</p>
            <p><strong>Booking Date:</strong> {booking.bookingDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
