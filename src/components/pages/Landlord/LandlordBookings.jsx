import React, { useState } from "react"; 
import "../../../styles/Landlord/LandlordBookings.css";

const initialBookingRequests = [
  {
    id: 1,
    propertyTitle: "Spacious 2BHK in HSR Layout",
    tenantName: "Ravi Kumar",
    startDate: "2025-05-10",
    endDate: "2025-11-10",
    status: "Pending"
  },
  {
    id: 2,
    propertyTitle: "Studio Apartment",
    tenantName: "Neha Shah",
    startDate: "2025-06-01",
    endDate: "2025-12-01",
    status: "Pending"
  }
];

export default function LandlordBookings() {
  const [bookingRequests, setBookingRequests] = useState(initialBookingRequests);

  const handleBookingAction = (id, action) => {
    setBookingRequests(prevRequests =>
      prevRequests.map(request =>
        request.id === id ? { ...request, status: action } : request
      )
    );
  };

  return (
    <div className="landlord-bookings-container">
      <section className="booking-requests-section">
        <h2 className="landlord-bookings-title">Booking Requests</h2>
        <div className="booking-list">
          {bookingRequests.map((booking) => (
            <div key={booking.id} className="booking-card">
              <div className="booking-card-header">
                <h3>{booking.propertyTitle}</h3>
                <span className={`booking-status ${booking.status.toLowerCase()}`}>
                  {booking.status}
                </span>
              </div>
              <div className="booking-card-body">
                <p><strong>Tenant:</strong> {booking.tenantName}</p>
                <p><strong>From:</strong> {booking.startDate}</p>
                <p><strong>To:</strong> {booking.endDate}</p>
              </div>
              {booking.status === 'Pending' && (
                <div className="booking-actions">
                  <button
                    className="approve-btn"
                    onClick={() => handleBookingAction(booking.id, 'Approved')}
                  >
                    Approve
                  </button>
                  <button
                    className="reject-btn"
                    onClick={() => handleBookingAction(booking.id, 'Rejected')}
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
