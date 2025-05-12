import React from "react";
import "../../styles/Home.css";

export default function Home() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <h1>Welcome to StayEase</h1>
        <p>Your trusted platform for renting rooms and PGs with ease.</p>
      </section>

      <section className="home-about">
        <h2>About StayEase</h2>
        <p>
          StayEase bridges the gap between landlords and tenants, offering a
          seamless, transparent, and user-friendly experience for finding or
          listing rooms and PG accommodations.
        </p>
      </section>

      <section className="home-features">
        <h2>Why Choose StayEase?</h2>
        <ul>
          <li>Book Your Accomodation</li>
          <li>Verified Listings with Photos</li>
          <li>Complaints Easily</li>
          <li>Make a Happy Stay</li>
        </ul>
      </section>
    </div>
  );
}
