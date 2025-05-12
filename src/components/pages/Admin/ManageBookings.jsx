import React, { useState } from "react";
import "../../../styles/Admin/ManageBookings.css";

const initialBookings = [
  {
    id: 1,
    tenantName: "John Doe",
    propertyTitle: "2 BHK Apartment",
    location: "Bangalore",
    bookingDate: "2025-05-01",
    checkInDate: "2025-06-15",
    checkOutDate: "2025-07-15",
    totalCost: 45000,
    landlordName: "Rajesh Kumar",
    propertyType: "Residential",
    contactEmail: "john.doe@example.com",
    contactPhone: "+91 9876543210"
  },
  {
    id: 2,
    tenantName: "Jane Smith",
    propertyTitle: "1 RK Studio",
    location: "Hyderabad",
    bookingDate: "2025-05-03",
    checkInDate: "2025-07-01",
    checkOutDate: "2025-07-10",
    totalCost: 25000,
    landlordName: "Priya Sharma",
    propertyType: "Studio",
    contactEmail: "jane.smith@example.com",
    contactPhone: "+91 8765432109"
  },
  {
    id: 3,
    tenantName: "Alice",
    propertyTitle: "3 BHK Villa",
    location: "Delhi",
    bookingDate: "2025-05-05",
    checkInDate: "2025-08-01",
    checkOutDate: "2025-08-15",
    totalCost: 75000,
    landlordName: "Amit Patel",
    propertyType: "Villa",
    contactEmail: "alice@example.com",
    contactPhone: "+91 7654321098"
  },
];

export default function ManageBookings() {
  const [bookings] = useState(initialBookings);

  return (
    <div className="admin-manage-bookings-container">
      <h2 className="admin-manage-bookings-title">Bookings</h2>
      <div className="admin-booking-cards-container">
        {bookings.map((booking) => (
          <div className="admin-booking-card" key={booking.id}>
            <div className="admin-booking-card-header">
              <h3 className="admin-booking-tenant-name">{booking.tenantName}</h3>
            </div>
            <div className="admin-booking-card-details">
              <div className="admin-booking-info-section">
                <p><strong>Property:</strong> {booking.propertyTitle}</p>
                <p><strong>Property Type:</strong> {booking.propertyType}</p>
                <p><strong>Location:</strong> {booking.location}</p>
                <p><strong>Landlord:</strong> {booking.landlordName}</p>
              </div>
              <div className="admin-booking-info-section">
                <p><strong>Booking Date:</strong> {booking.bookingDate}</p>
                <p><strong>Check-in:</strong> {booking.checkInDate}</p>
                <p><strong>Check-out:</strong> {booking.checkOutDate}</p>
              </div>
              <div className="admin-booking-info-section">
                <p><strong>Total Cost:</strong> ₹{booking.totalCost}</p>
                <p><strong>Contact Email:</strong> {booking.contactEmail}</p>
                <p><strong>Contact Phone:</strong> {booking.contactPhone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
