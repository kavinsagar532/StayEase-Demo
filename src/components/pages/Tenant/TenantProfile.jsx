import React, { useState } from "react";
import "../../../styles/Tenant/TenantProfile.css";

export default function TenantProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [tenant, setTenant] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 9876543210",
    gender: "Male",
    address: "123, Sample Street, City, State",
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTenant(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSave = () => {
    // TODO: Implement actual save functionality with backend
    console.log("Saving profile:", tenant);
    setIsEditing(false);
  };

  return (
    <div className="tenant-profile-container">
      <div className="profile-header">
        <h2 className="tenant-profile-title">My Profile</h2>
        <button 
          className="edit-profile-btn" 
          onClick={handleEditToggle}
        >
          {isEditing ? "Cancel" : "Edit Profile"}
        </button>
      </div>
      
      <div className="tenant-profile-box">
        {!isEditing ? (
          <>
            <p><strong>Name:</strong> {tenant.name}</p>
            <p><strong>Email:</strong> {tenant.email}</p>
            <p><strong>Phone:</strong> {tenant.phone}</p>
            <p><strong>Gender:</strong> {tenant.gender}</p>
            <p><strong>Address:</strong> {tenant.address}</p>
          </>
        ) : (
          <>
            <div className="profile-input-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={tenant.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="profile-input-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={tenant.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="profile-input-group">
              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                value={tenant.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="profile-input-group">
              <label>Gender:</label>
              <select
                name="gender"
                value={tenant.gender}
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
                value={tenant.address}
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
