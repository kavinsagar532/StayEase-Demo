import React from "react";
import "../../../styles/Landlord/MyProperties.css";

const sampleProperties = [
  {
    id: 1,
    title: "Spacious 2BHK in HSR Layout",
    location: "Bangalore",
    price: 18000,
    type: "Apartment",
    rooms: 2,
    availableFrom: "2025-06-01",
    furnishing: "Fully Furnished",
    description: "A well-ventilated apartment near market and metro.",
    size: 1200,
    contact: "9876543210",
    amenities: ["WiFi", "AC", "Parking", "Laundry"],
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60",
    status: "Pending"
  },
  {
    id: 2,
    title: "Modern Studio Apartment",
    location: "Pune",
    price: 12000,
    type: "Studio",
    rooms: 1,
    availableFrom: "2025-07-15",
    furnishing: "Semi-furnished",
    description: "Compact and convenient space for bachelors with modern amenities.",
    size: 600,
    contact: "8765432109",
    amenities: ["WiFi", "AC", "Parking"],
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=60",
    status: "Approved"
  }
];


export default function MyProperties() {
  return (
    <div className="my-properties-container">
      <h2 className="my-properties-title">My Properties</h2>
      <div className="property-grid">
        {sampleProperties.map((property) => (
          <div key={property.id} className="property-card">
            <div className="property-image-container">
              <img src={property.image} alt={property.title} className="property-image" />
              <span className="property-status">{property.status}</span>
            </div>
            <div className="property-info">
              <div className="property-header">
                <h3>{property.title}</h3>
                <div className="property-pricing">
                  <p className="property-rent">₹{property.price}/month</p>
                </div>
              </div>
              
              <div className="property-details">
                <p><strong>Property Type:</strong> {property.type}</p>
                <p><strong>Location:</strong> {property.location}</p>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
