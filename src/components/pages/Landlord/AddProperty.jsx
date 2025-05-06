import React, { useState } from "react";
import "../../../styles/Landlord/AddProperty.css";

export default function AddProperty() {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    description: "",
    image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Property Submitted:", formData);
    // Logic to send the form data goes here
  };

  return (
    <div className="add-property-container">
      <h2 className="add-property-title">Add New Property</h2>
      <form className="add-property-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Property Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Monthly Rent (₹)"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Property Description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          required
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit-btn">Add Property</button>
      </form>
    </div>
  );
}
