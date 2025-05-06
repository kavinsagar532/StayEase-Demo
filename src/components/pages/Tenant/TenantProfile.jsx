import React from "react";
import "../../../styles/Tenant/TenantProfile.css";

export default function TenantProfile() {
  // Dummy data; replace with actual data from backend or context
  const tenant = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 9876543210",
    gender: "Male",
    address: "123, Sample Street, City, State",
  };

  return (
    <div className="tenant-profile-container">
      <h2 className="tenant-profile-title">My Profile</h2>
      <div className="tenant-profile-box">
        <p><strong>Name:</strong> {tenant.name}</p>
        <p><strong>Email:</strong> {tenant.email}</p>
        <p><strong>Phone:</strong> {tenant.phone}</p>
        <p><strong>Gender:</strong> {tenant.gender}</p>
        <p><strong>Address:</strong> {tenant.address}</p>
      </div>
    </div>
  );
}
