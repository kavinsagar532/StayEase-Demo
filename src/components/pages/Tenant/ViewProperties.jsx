import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/Tenant/ViewProperties.css";

const sampleProperties = [
  {
    id: 1,
    title: "Modern 2 BHK Flat",
    location: "Bangalore",
    rent: "₹15,000",
    type: "Apartment",
    rooms: 2,
    availableFrom: "2025-06-01",
    furnishing: "Furnished",
    description: "A modern 2 BHK flat located near tech parks with excellent ventilation.",
    size: "1100",
    contact: "9876543210",
    amenities: ["WiFi", "AC", "Parking"],
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 2,
    title: "Spacious 1 RK Studio",
    location: "Hyderabad",
    rent: "₹8,000",
    type: "Studio",
    rooms: 1,
    availableFrom: "2025-07-10",
    furnishing: "Semi-furnished",
    description: "Ideal for bachelors, close to major business centers.",
    size: "600",
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
    <div className="tenant-view-container">
      <h2 className="tenant-view-title">Available Properties</h2>
      <div className="tenant-view-grid">
        {sampleProperties.map((property) => (
          <div className="tenant-view-card" key={property.id}>
            <img src={property.image} alt={property.title} className="tenant-view-image" />
            <div className="tenant-view-info">
              <h3>{property.title}</h3>
              <p><strong>Location:</strong> {property.location}</p>
              <p><strong>Rent:</strong> {property.rent}</p>
              <p><strong>Type:</strong> {property.type}</p>
              <p><strong>Rooms:</strong> {property.rooms}</p>
              <p><strong>Available From:</strong> {property.availableFrom}</p>
              <p><strong>Furnishing:</strong> {property.furnishing}</p>
              <p><strong>Size:</strong> {property.size} sq.ft</p>
              <p><strong>Contact:</strong> {property.contact}</p>
              <p><strong>Description:</strong> {property.description}</p>
              <div>
                <strong>Amenities:</strong>
                <ul className="tenant-view-amenities">
                  {property.amenities.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
                </ul>
              </div>
              <button 
                className="tenant-view-book-btn" 
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
