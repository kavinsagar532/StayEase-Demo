import React from "react";
import "../../../styles/Landlord/LandlordProfile.css";

export default function LandlordProfile() {
  // Dummy data; replace with actual backend data
  const landlord = {
    name: "James",
    email: "james@example.com",
    phone: "+91 9876543210",
    gender: "Male",
    address: "456, Housing Layout, City, State",
  };

  return (
    <div className="landlord-profile-container">
      <h2 className="landlord-profile-title">My Profile</h2>
      <div className="landlord-profile-box">
        <p><strong>Name:</strong> {landlord.name}</p>
        <p><strong>Email:</strong> {landlord.email}</p>
        <p><strong>Phone:</strong> {landlord.phone}</p>
        <p><strong>Gender:</strong> {landlord.gender}</p>
        <p><strong>Address:</strong> {landlord.address}</p>
      </div>
    </div>
  );
}
