import React from "react";


const AboutUs: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#f8f8f8", minHeight: "100vh" }}>
      {/* Header Section */}
      <header style={{ backgroundColor: "#fff", padding: "20px", textAlign: "center", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
      
      </header>

      {/* Main Content */}
      <main style={{ padding: "40px", textAlign: "center" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "bold", color: "#333" }}>
          About Us
        </h1>
        <p style={{ fontSize: "18px", color: "#666", marginTop: "20px" }}>
          Welcome to Tie Your Knot! We are dedicated to making your wedding day truly special and unforgettable. 
          Our team works with you to bring your dream wedding to life with a range of services from event planning, catering, and venue selection to decor and much more.
        </p>
        <p style={{ fontSize: "18px", color: "#666", marginTop: "20px" }}>
          Whether you're just starting to plan or have already begun, we're here to assist you every step of the way.
        </p>
      </main>
      
      {/* Footer Section */}
      <footer style={{ padding: "20px", textAlign: "center", backgroundColor: "#fff", marginTop: "40px" }}>
        <p style={{ fontSize: "14px", color: "#777" }}>
          &copy; {new Date().getFullYear()} Tie Your Knot. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default AboutUs;
