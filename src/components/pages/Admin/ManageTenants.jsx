import React, { useState } from "react";
import "../../../styles/Admin/ManageTenants.css";

const tenants = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "+1112223333",
    status: "Active",
  },
  {
    id: 2,
    name: "Bob Lee",
    email: "bob@example.com",
    phone: "+4445556666",
    status: "Blocked",
  },
  // Add more tenants as needed
];

export default function ManageTenants() {
  const [tenantList, setTenantList] = useState(tenants);

  const toggleStatus = (id) => {
    setTenantList((prevList) =>
      prevList.map((tenant) =>
        tenant.id === id
          ? { ...tenant, status: tenant.status === "Active" ? "Blocked" : "Active" }
          : tenant
      )
    );
  };

  const handleDelete = (id) => {
    setTenantList((prevList) => prevList.filter((tenant) => tenant.id !== id));
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
