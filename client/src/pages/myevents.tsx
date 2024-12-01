import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import CalendarComponent from "../components/calender";



const MyEvents: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >  
        <Tab label="Event List" />
        <Tab label="Calendar" />
      </Tabs>
      <Box sx={{ mt: 3 }}>
        {activeTab === 0 && <div>Your Event List goes here</div>}
        {activeTab === 1 && <CalendarComponent />}
      </Box>
       {/* Footer */}
       <footer className="py-6 bg-gray-800 text-center text-gray-400">
        <p>&copy; 2024 Tie Your Knot. All Rights Reserved.</p>
      </footer>
    </Box>
  );
};

export default MyEvents;