import React, { useState } from "react";
import "../../../styles/Landlord/LandlordProfile.css";

export default function LandlordProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [landlord, setLandlord] = useState({
    name: "James",
    email: "james@example.com",
    phone: "+91 9876543210",
    gender: "Male",
    address: "456, Housing Layout, City, State",
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLandlord(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSave = () => {
    // TODO: Implement actual save functionality with backend
    console.log("Saving profile:", landlord);
    setIsEditing(false);
  };

  return (
    <div className="landlord-profile-container">
      <div className="profile-header">
        <h2 className="landlord-profile-title">My Profile</h2>
        <button 
          className="edit-profile-btn" 
          onClick={handleEditToggle}
        >
          {isEditing ? "Cancel" : "Edit Profile"}
        </button>
      </div>
      
      <div className="landlord-profile-box">
        {!isEditing ? (
          <>
            <p><strong>Name:</strong> {landlord.name}</p>
            <p><strong>Email:</strong> {landlord.email}</p>
            <p><strong>Phone:</strong> {landlord.phone}</p>
            <p><strong>Gender:</strong> {landlord.gender}</p>
            <p><strong>Address:</strong> {landlord.address}</p>
          </>
        ) : (
          <>
            <div className="profile-input-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={landlord.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="profile-input-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={landlord.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="profile-input-group">
              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                value={landlord.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="profile-input-group">
              <label>Gender:</label>
              <select
                name="gender"
                value={landlord.gender}
                onChange={handleInputChange}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="profile-input-group">
              <label>Address:</label>
              <textarea
                name="address"
                value={landlord.address}
                onChange={handleInputChange}
              />
            </div>
            <button 
              className="save-profile-btn" 
              onClick={handleSave}
            >
              Save Changes
            </button>
          </>
        )}
      </div>
    </div>
  );
}
