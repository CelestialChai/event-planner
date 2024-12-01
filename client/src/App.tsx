import { Routes, Route, useLocation, Outlet } from 'react-router-dom';
import NavigationBar from './components/Nav';
import './App.css';
import { Box, CssBaseline } from '@mui/material';
import HomePage from './pages/home';
import CreateEvent from './pages/CreateEvent';
import MyEvents from './pages/myevents';
// import Unlocks from './pages/unlocks';
import AboutUs from './pages/aboutus';
// import Venues from './pages/venues';
// import Login from './pages/login';
import SignUp from './pages/signup';
import CalendarComponent from './components/calender';
import ErrorPage from './pages/error';
import RSVPform from './pages/RSVPform';
import GoogleSignIn from './components/GoogleSignIn';

// Debug Component to Log Current Location
const DebugLocation: React.FC = () => {
  const location = useLocation();
  console.log('Current Path:', location.pathname);
  return null; // This component doesn't render anything on the UI
};

// Layout Component for Navigation and Main Content
function Layout() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <NavigationBar />
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <main>
            <DebugLocation /> {/* Logs the current path */}
            <Outlet /> {/* Renders child routes */}
          </main>
        </Box>
      </Box>
    </>
  );
}

// Router Setup with Routes and Layout
export default function App() {
  return (
    <Routes>
      {/* Main Layout */}
      <Route path="/" element={<Layout />}>
        {/* Child Routes */}
        <Route index element={<HomePage />} />
        <Route path="create" element={<CreateEvent />} />
        <Route path="my-events" element={<MyEvents />} />
        {/* <Route path="unlocks" element={<Unlocks />} /> */}
        <Route path="about-us" element={<AboutUs />} />
        {/* <Route path="venues" element={<Venues />} />
        <Route path="login" element={<Login />} /> */}
        <Route path="sign-up" element={<SignUp />} />
        <Route path="calendar" element={<CalendarComponent />} />
        <Route path="google-sign-in" element={<GoogleSignIn />} />

        {/* Catch-All Route for Undefined Paths */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}