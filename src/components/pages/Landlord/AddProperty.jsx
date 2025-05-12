import React, { useState } from "react";
import "../../../styles/Landlord/AddProperty.css";

export default function AddProperty() {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    pincode: "", // Added pincode field
    price: "",
    type: "",
    rooms: "",
    availableFrom: "",
    furnishing: "",
    description: "",
    size: "",
    contact: "",
    amenities: [],
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;

    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else if (name === "amenities") {
      const updatedAmenities = checked
        ? [...formData.amenities, value]
        : formData.amenities.filter((amenity) => amenity !== value);
      setFormData({ ...formData, amenities: updatedAmenities });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Property Submitted:", formData);
    // Typically send `formData` to backend API here
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
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={formData.pincode}
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
        <input
          type="text"
          name="type"
          placeholder="Property Type (PG/Apartment/House)"
          value={formData.type}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="rooms"
          placeholder="Number of Rooms"
          value={formData.rooms}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="availableFrom"
          value={formData.availableFrom}
          onChange={handleChange}
          required
        />
        <select
          name="furnishing"
          value={formData.furnishing}
          onChange={handleChange}
          required
        >
          <option value="">Select Furnishing Status</option>
          <option value="Furnished">Furnished</option>
          <option value="Semi-furnished">Semi-furnished</option>
          <option value="Unfurnished">Unfurnished</option>
        </select>
        <textarea
          name="description"
          placeholder="Property Description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          required
        />
        <input
          type="text"
          name="size"
          placeholder="Property Size (sq ft)"
          value={formData.size}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
          required
        />
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="amenities"
              value="WiFi"
              onChange={handleChange}
            />{" "}
            WiFi
          </label>
          <label>
            <input
              type="checkbox"
              name="amenities"
              value="AC"
              onChange={handleChange}
            />{" "}
            AC
          </label>
          <label>
            <input
              type="checkbox"
              name="amenities"
              value="Parking"
              onChange={handleChange}
            />{" "}
            Parking
          </label>
          <label>
            <input
              type="checkbox"
              name="amenities"
              value="Laundry"
              onChange={handleChange}
            />{" "}
            Laundry
          </label>
          <label>
            <input
              type="checkbox"
              name="amenities"
              value="Swimming Pool"
              onChange={handleChange}
            />{" "}
            Swimming Pool
          </label>
        </div>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit-btn">
          Add Property
        </button>
      </form>
    </div>
  );
}
