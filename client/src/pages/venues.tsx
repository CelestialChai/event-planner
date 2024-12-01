import React from "react";
import tykLogo from '../assets/WeddingPlanner/tykLogo.png'; // Adjust the path to where the logo is located

const Venues: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#f8f8f8", minHeight: "100vh" }}>
      {/* Header Section */}
      <header style={{ backgroundColor: "#fff", padding: "20px", textAlign: "center", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
      </header>

      {/* Main Content */}
      <main style={{ padding: "40px", textAlign: "center" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "bold", color: "#333" }}>
          Venue Section - Coming Soon!
        </h1>
        <img src={tykLogo} alt="TYK Logo" style={{ width: "150px", height: "auto" }} />
        <p style={{ fontSize: "18px", color: "#666", marginTop: "20px" }}>
          We're working hard to bring you the best venues for your dream wedding. Stay tuned!
        </p>
      </main>
      
       {/* Footer */}
       <footer className="py-6 bg-gray-800 text-center text-gray-400">
        <p>&copy; 2024 Tie Your Knot. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Venues;
