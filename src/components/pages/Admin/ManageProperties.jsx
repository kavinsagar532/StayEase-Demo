import React, { useState } from "react";
import "../../../styles/Admin/ManageProperties.css";

const initialProperties = [
  {
    id: 1,
    title: "2 BHK Apartment",
    owner: "John Doe",
    location: "Bangalore",
    status: "Pending",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "1 RK Studio",
    owner: "Jane Smith",
    location: "Hyderabad",
    status: "Approved",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "3 BHK Villa",
    owner: "Alice",
    location: "Delhi",
    status: "Rejected",
    image: "https://via.placeholder.com/150",
  },
];

export default function ManageProperties() {
  const [propertyList, setPropertyList] = useState(initialProperties);

  const updateStatus = (id, newStatus) => {
    setPropertyList(prev =>
      prev.map(prop =>
        prop.id === id ? { ...prop, status: newStatus } : prop
      )
    );
  };

  const handleDelete = (id) => {
    // Instead of removing it permanently here, you'd move it to the archive section
    setPropertyList(prev => prev.filter(prop => prop.id !== id));
  };

  return (
    <div className="manage-properties-container">
      <h2 className="manage-properties-title">Manage Properties</h2>
      <div className="property-cards-container">
        {propertyList.map((property) => (
          <div className="property-card" key={property.id}>
            <div className="property-card-left">
              <img src={property.image} alt="Property" className="property-image" />
            </div>
            <div className="property-card-right">
              <div className="property-card-header">
                <h3 className="property-card-title">{property.title}</h3>
                <span className={`property-status ${property.status.toLowerCase()}`}>
                  {property.status}
                </span>
              </div>
              <div className="property-card-body">
                <p><strong>Owner:</strong> {property.owner}</p>
                <p><strong>Location:</strong> {property.location}</p>
              </div>
              <div className="property-card-actions">
                {property.status === "Pending" && (
                  <>
                    <button
                      onClick={() => updateStatus(property.id, "Approved")}
                      className="property-action-btn"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => updateStatus(property.id, "Rejected")}
                      className="property-delete-btn"
                    >
                      Reject
                    </button>
                  </>
                )}
                {property.status === "Approved" && (
                  <button
                    onClick={() => updateStatus(property.id, "Rejected")}
                    className="property-delete-btn"
                  >
                    Reject
                  </button>
                )}
                {property.status === "Rejected" && (
                  <button
                    onClick={() => updateStatus(property.id, "Approved")}
                    className="property-action-btn"
                  >
                    Approve
                  </button>
                )}
                <button
                  onClick={() => handleDelete(property.id)}
                  className="property-delete-btn"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
