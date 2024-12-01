import { Outlet } from 'react-router-dom';
import NavigationBar from './components/Nav';
import './App.css';
import { Box, CssBaseline } from '@mui/material';

// Layout Component for Navigation and Main Content
export default function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        {/* Navigation Bar */}
        <NavigationBar />
        {/* Main Content */}
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <main>
            {/* Render the child routes defined in createBrowserRouter */}
            <Outlet />
          </main>
        </Box>
      </Box>
    </>
  );
}