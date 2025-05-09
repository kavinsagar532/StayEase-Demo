import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/Tenant/ViewProperties.css";

const sampleProperties = [
  {
    id: 1,
    title: "Modern 2 BHK Flat",
    location: "Bangalore",
    rent: "₹15,000",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 2,
    title: "Spacious 1 RK Studio",
    location: "Hyderabad",
    rent: "₹8,000",
    image: "https://via.placeholder.com/200",
  },
];

export default function ViewProperties() {
  const navigate = useNavigate();

  const handleBookNow = (property) => {
    navigate('/tenant/book-property', { state: { property } });
  };

  return (
    <div className="view-properties-container">
      <h2 className="view-properties-title">Available Properties</h2>
      <div className="properties-grid">
        {sampleProperties.map((property) => (
          <div className="property-card" key={property.id}>
            <img src={property.image} alt="Property" className="property-image" />
            <div className="property-info">
              <h3>{property.title}</h3>
              <p><strong>Location:</strong> {property.location}</p>
              <p><strong>Rent:</strong> {property.rent}</p>
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
