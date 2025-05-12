import React, { useState } from "react";
import "../../../styles/Admin/ManageTenants.css";

const tenants = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "+1112223333",
    status: "Active",
    registrationDate: "2023-03-15",
    totalBookings: 5,
    activeRentals: 2,
    complaintHistory: 1,
    gender: "Female",
  },
  {
    id: 2,
    name: "Bob Lee",
    email: "bob@example.com",
    phone: "+4445556666",
    status: "Blocked",
    registrationDate: "2022-11-20",
    totalBookings: 3,
    activeRentals: 1,
    complaintHistory: 2,
    gender: "Male",
  },
  {
    id: 3,
    name: "Emma Wilson",
    email: "emma@example.com",
    phone: "+7778889999",
    status: "Active",
    registrationDate: "2024-01-10",
    totalBookings: 7,
    activeRentals: 3,
    complaintHistory: 0,
    gender: "Female",
  },
  {
    id: 4,
    name: "David Smith",
    email: "david@example.com",
    phone: "+9998887777",
    status: "Active",
    registrationDate: "2023-06-22",
    totalBookings: 4,
    activeRentals: 1,
    complaintHistory: 1,
    gender: "Male",
  }
];

export default function ManageTenants() {
  const [tenantList, setTenantList] = useState(tenants);

  const toggleStatus = (id) => {
    setTenantList((prevList) =>
      prevList.map((tenant) =>
        tenant.id === id
          ? {
              ...tenant,
              status: tenant.status === "Active" ? "Blocked" : "Active",
            }
          : tenant
      )
    );
  };

  const handleDelete = (id) => {
    setTenantList((prevList) =>
      prevList.filter((tenant) => tenant.id !== id)
    );
  };

  return (
    <div className="manage-tenants-container">
      <h2 className="manage-tenants-title">Manage Tenants</h2>
      <div className="tenant-cards-container">
        {tenantList.map((tenant) => (
          <div className="tenant-card" key={tenant.id}>
            <div className="tenant-card-header">
              <h3 className="tenant-card-name">{tenant.name}</h3>
              <span className={`tenant-status ${tenant.status.toLowerCase()}`}>
                {tenant.status}
              </span>
            </div>
            <div className="tenant-card-body">
              <p><strong>Email:</strong> {tenant.email}</p>
              <p><strong>Phone:</strong> {tenant.phone}</p>
            </div>
            <div className="tenant-card-details">
              <div className="tenant-detail-section">
                <h4>Personal Info</h4>
                <p><strong>Gender:</strong> {tenant.gender}</p>
                <p><strong>Registration Date:</strong> {tenant.registrationDate}</p>
              </div>
              <div className="tenant-detail-section">
                <h4>Booking Details</h4>
                <p><strong>Total Bookings:</strong> {tenant.totalBookings}</p>
                <p><strong>Active Rentals:</strong> {tenant.activeRentals}</p>
                <p><strong>Complaints:</strong> {tenant.complaintHistory}</p>
              </div>
            </div>
            <div className="tenant-card-actions">
              <button
                onClick={() => toggleStatus(tenant.id)}
                className="tenant-action-btn"
              >
                {tenant.status === "Active" ? "Block" : "Unblock"}
              </button>
              <button
                onClick={() => handleDelete(tenant.id)}
                className="tenant-delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
