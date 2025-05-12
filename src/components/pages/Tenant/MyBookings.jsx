import React from "react";
import "../../../styles/Tenant/MyBookings.css";

const bookings = [
  {
    id: 1,
    propertyTitle: "Modern 2 BHK Flat",
    location: "Bangalore",
    pincode: "560001",
    price: 15000,
    type: "Apartment",
    rooms: 2,
    status: "Confirmed",
    bookingDate: "2025-05-01",
    furnishing: "Furnished",
    size: 1100,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60",
    amenities: ["WiFi", "AC", "Parking"],
    contact: "9876543210"
  },
  {
    id: 2,
    propertyTitle: "1 RK Studio Apartment",
    location: "Hyderabad",
    pincode: "500001",
    price: 8000,
    type: "Studio",
    rooms: 1,
    status: "Pending",
    bookingDate: "2025-05-03",
    furnishing: "Semi-furnished",
    size: 600,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=60",
    amenities: ["WiFi", "Laundry"],
    contact: "8765432109"
  }
];

export default function MyBookings() {
  return (
    <div className="tenant-mybookings-container">
      <h2 className="tenant-mybookings-title">My Bookings</h2>
      <div className="tenant-mybookings-grid">
        {bookings.map((booking) => (
          <div key={booking.id} className="tenant-mybookings-card">
            <div className="tenant-mybookings-image-container">
              <img src={booking.image} alt={booking.propertyTitle} className="tenant-mybookings-image" />
              <span className={`tenant-mybookings-status ${booking.status.toLowerCase()}`}>
                {booking.status}
              </span>
            </div>
            <div className="tenant-mybookings-info">
              <div className="tenant-mybookings-header">
                <h3>{booking.propertyTitle}</h3>
                <div className="tenant-mybookings-pricing">
                  <p className="tenant-mybookings-rent">₹{booking.price}/month</p>
                </div>
              </div>
              
              <div className="tenant-mybookings-details">
                <p><strong>Property Type:</strong> {booking.type}</p>
                <p><strong>Location:</strong> {booking.location}</p>
                <p><strong>Pincode:</strong> {booking.pincode}</p>
                <p><strong>Number of Rooms:</strong> {booking.rooms}</p>
                <p><strong>Booking Date:</strong> {booking.bookingDate}</p>
                <p><strong>Furnishing Status:</strong> {booking.furnishing}</p>
                <p><strong>Property Size:</strong> {booking.size} sq.ft</p>
                <p><strong>Contact Number:</strong> {booking.contact}</p>
              </div>
              
              <div className="tenant-mybookings-amenities">
                <strong>Amenities:</strong>
                <ul>
                  {booking.amenities.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
