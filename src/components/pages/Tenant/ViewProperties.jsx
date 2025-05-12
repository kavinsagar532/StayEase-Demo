import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/Tenant/ViewProperties.css";

const sampleProperties = [
  {
    id: 1,
    title: "Modern 2 BHK Flat",
    location: "Bangalore",
    pincode: "560001",
    price: 15000,
    type: "Apartment",
    rooms: 2,
    availableFrom: "2025-06-01",
    furnishing: "Furnished",
    description: "A modern 2 BHK flat located near tech parks with excellent ventilation.",
    size: 1100,
    contact: "9876543210",
    amenities: ["WiFi", "AC", "Parking"],
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 2,
    title: "Spacious 1 RK Studio",
    location: "Hyderabad",
    pincode: "500001",
    price: 8000,
    type: "Studio",
    rooms: 1,
    availableFrom: "2025-07-10",
    furnishing: "Semi-furnished",
    description: "Ideal for bachelors, close to major business centers.",
    size: 600,
    contact: "8765432109",
    amenities: ["WiFi", "Laundry"],
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=60"
  }
];

export default function ViewProperties() {
  const navigate = useNavigate();

  const handleBookNow = (property) => {
    navigate('/tenant/book-property', { state: { property } });
  };

  return (
    <div className="view-properties-container">
      <h2 className="view-properties-title">Available Properties</h2>
      <div className="property-grid">
        {sampleProperties.map((property) => (
          <div key={property.id} className="property-card">
            <div className="property-image-container">
              <img src={property.image} alt={property.title} className="property-image" />
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

              <button 
                className="book-now-btn"
                onClick={() => handleBookNow(property)}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}