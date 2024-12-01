import React from "react";
import tykLogo from '../assets/WeddingPlanner/tykLogo.png'; // Adjust the path to where the logo is located

const Unlocks: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      {/* Header Section */}
      <header
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          textAlign: "center",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ fontSize: "28px", fontWeight: "bold", color: "#ff4081" }}>
          Unlock Exclusive Features
        </h1>
      </header>

      {/* Main Content */}
      <main style={{ padding: "40px", textAlign: "center" }}>
        <img
          src={tykLogo}
          alt="TYK Logo"
          style={{ width: "120px", height: "auto", marginBottom: "20px" }}
        />
        <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}>
          Premium Tools for Your Wedding Planning
        </h2>
        <p style={{ fontSize: "18px", color: "#666", marginTop: "20px" }}>
          Elevate your wedding planning experience with access to exclusive
          features and services.
        </p>

        {/* Unlocks List */}
        <div style={{ marginTop: "40px", textAlign: "left", maxWidth: "600px", margin: "0 auto" }}>
          <ul style={{ listStyleType: "none", padding: "0" }}>
            <li
              style={{
                marginBottom: "20px",
                padding: "20px",
                backgroundColor: "#fff",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
              }}
            >
              <h3 style={{ color: "#ff4081", marginBottom: "10px" }}>
                Priority Venue Booking
              </h3>
              <p style={{ color: "#666" }}>
                Secure your dream venue with our priority booking feature.
              </p>
            </li>
            <li
              style={{
                marginBottom: "20px",
                padding: "20px",
                backgroundColor: "#fff",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
              }}
            >
              <h3 style={{ color: "#ff4081", marginBottom: "10px" }}>
                Customized Themes
              </h3>
              <p style={{ color: "#666" }}>
                Get exclusive access to premium themes for your wedding setup.
              </p>
            </li>
            <li
              style={{
                marginBottom: "20px",
                padding: "20px",
                backgroundColor: "#fff",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
              }}
            >
              <h3 style={{ color: "#ff4081", marginBottom: "10px" }}>
                Dedicated Planner Assistance
              </h3>
              <p style={{ color: "#666" }}>
                Work with a dedicated wedding planner to perfect every detail.
              </p>
            </li>
          </ul>
        </div>

        <button
          style={{
            marginTop: "40px",
            padding: "10px 20px",
            backgroundColor: "#ff4081",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Explore More
        </button>
      </main>

      {/* Footer */}
      <footer
        style={{
          marginTop: "40px",
          backgroundColor: "#333",
          color: "#aaa",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <p>&copy; 2024 Tie Your Knots. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Unlocks;