import React from "react";
import "../../../styles/Landlord/MyProperties.css";

const sampleProperties = [
  {
    id: 1,
    title: "Spacious 2BHK in HSR Layout",
    location: "Bangalore",
    price: 18000,
    description: "A well-ventilated apartment near market and metro.",
    image: "https://via.placeholder.com/300"
  },
  {
    id: 2,
    title: "Studio Apartment",
    location: "Pune",
    price: 12000,
    description: "Compact and convenient space for bachelors.",
    image: "https://via.placeholder.com/300"
  }
];

export default function MyProperties() {
  return (
    <div className="my-properties-container">
      <h2 className="my-properties-title">My Properties</h2>
      <div className="property-grid">
        {sampleProperties.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt={property.title} className="property-image" />
            <div className="property-info">
              <h3>{property.title}</h3>
              <p><strong>Location:</strong> {property.location}</p>
              <p><strong>Price:</strong> ₹{property.price}</p>
              <p>{property.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
