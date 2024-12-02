import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import NavigationBar from './components/Nav';

// Debug Component to Log Current Location
const DebugLocation: React.FC = () => {
  const location = useLocation();
  console.log('Current Path:', location.pathname);
  return null; // This component doesn't render anything on the UI
};

// Layout Component for Navigation and Main Content
const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        {/* Navigation Bar */}
        <NavigationBar />
        {/* Main Content */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DebugLocation />
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default App;
