import React from 'react';
import { Outlet } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import NavigationBar from './components/Nav';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        {/* Navigation Bar */}
        <NavigationBar />

        {/* Main Content */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default App;
