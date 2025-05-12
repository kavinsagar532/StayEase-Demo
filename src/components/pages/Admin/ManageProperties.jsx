import React, { useState } from "react";
import "../../../styles/Admin/ManageProperties.css";

const initialProperties = [
  {
    id: 1,
    title: "2 BHK Apartment",
    owner: "John Doe",
    location: "Bangalore",
    pincode: "560001",
    price: 35000,
    type: "Apartment",
    rooms: 2,
    availableFrom: "2025-06-15",
    furnishing: "Fully Furnished",
    description: "Spacious 2 BHK apartment with modern amenities.",
    size: 1200,
    contact: "9876543210",
    amenities: ["WiFi", "AC", "Parking", "Swimming Pool"],
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60",
    status: "Pending"
  },
  {
    id: 2,
    title: "1 RK Studio",
    owner: "Jane Smith",
    location: "Hyderabad",
    pincode: "500001",
    price: 18000,
    type: "Studio",
    rooms: 1,
    availableFrom: "2025-07-01",
    furnishing: "Semi-furnished",
    description: "Cozy 1 RK studio, ideal for a single person.",
    size: 600,
    contact: "8765432109",
    amenities: ["WiFi", "Parking"],
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=60",
    status: "Approved"
  },
  {
    id: 3,
    title: "3 BHK Villa",
    owner: "Alice Johnson",
    location: "Delhi",
    pincode: "110001",
    price: 60000,
    type: "Villa",
    rooms: 3,
    availableFrom: "2025-08-01",
    furnishing: "Fully Furnished",
    description: "Luxurious villa with a private garden and pool.",
    size: 2000,
    contact: "7654321098",
    amenities: ["WiFi", "AC", "Parking", "Swimming Pool"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
    status: "Rejected"
  }
];

export default function ManageProperties() {
  const [propertyList, setPropertyList] = useState(initialProperties);

  const updateStatus = (id, newStatus) => {
    setPropertyList((prev) =>
      prev.map((prop) => (prop.id === id ? { ...prop, status: newStatus } : prop))
    );
  };

  const handleDelete = (id) => {
    setPropertyList((prev) => prev.filter((prop) => prop.id !== id));
  };

  return (
    <div className="manage-properties-container">
      <h2 className="manage-properties-title">Manage Properties</h2>
      <div className="property-grid">
        {propertyList.map((property) => (
          <div key={property.id} className="property-card">
            <div className="property-image-container">
              <img src={property.image} alt={property.title} className="property-image" />
              <span className={`property-status ${property.status.toLowerCase()}`}>
                {property.status}
              </span>
            </div>
            <div className="property-info">
              <div className="property-header">
                <h3>{property.title}</h3>
                <div className="property-pricing">
                  <p className="property-rent">₹{property.price}/month</p>
                </div>
              </div>
              
              <div className="property-details">
                <p><strong>Owner:</strong> {property.owner}</p>
                <p><strong>Property Type:</strong> {property.type}</p>
                <p><strong>Location:</strong> {property.location}</p>
                <p><strong>Pincode:</strong> {property.pincode}</p>
                <p><strong>Number of Rooms:</strong> {property.rooms}</p>
                <p><strong>Available From:</strong> {property.availableFrom}</p>
                <p><strong>Furnishing Status:</strong> {property.furnishing}</p>
                <p><strong>Property Size:</strong> {property.size} sq.ft</p>
                <p><strong>Contact Number:</strong> {property.contact}</p>
              </div>
              
              <div className="property-description">
                <strong>Description:</strong>
                <p>{property.description}</p>
              </div>
              
              <div className="property-amenities">
                <strong>Amenities:</strong>
                <ul>
                  {property.amenities.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
                </ul>
              </div>
              
              <div className="property-actions">
                {property.status === "Pending" && (
                  <>
                    <button 
                      onClick={() => updateStatus(property.id, "Approved")}
                      className="approve-btn"
                    >
                      Approve
                    </button>
                    <button 
                      onClick={() => updateStatus(property.id, "Rejected")}
                      className="reject-btn"
                    >
                      Reject
                    </button>
                  </>
                )}
                {property.status === "Approved" && (
                  <button 
                    onClick={() => updateStatus(property.id, "Rejected")}
                    className="reject-btn"
                  >
                    Reject
                  </button>
                )}
                {property.status === "Rejected" && (
                  <button 
                    onClick={() => updateStatus(property.id, "Approved")}
                    className="approve-btn"
                  >
                    Approve
                  </button>
                )}
                <button 
                  onClick={() => handleDelete(property.id)}
                  className="delete-btn"
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
