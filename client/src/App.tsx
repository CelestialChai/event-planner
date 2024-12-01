import { Routes, Route, Outlet } from 'react-router-dom';
import NavigationBar from './components/Nav';
import './App.css';
import { Box, CssBaseline } from '@mui/material';
import HomePage from './pages/home';
import CreateEvent from './pages/CreateEvent';
import MyEvents from './pages/myevents';
// import Unlocks from './pages/unlocks';
import AboutUs from './pages/aboutus';
// import Venues from './pages/venues';
import WeddingLandingPage from "./pages/LandingPage"
import Login from './pages/login';
import SignUp from './pages/signup';
import CalendarComponent from './components/calender';
import ErrorPage from './pages/error';
import RSVPform from './pages/RSVPform';
import GoogleSignIn from './components/GoogleSignIn';


// Layout Component for Navigation and Main Content
function Layout() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <NavigationBar />
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <main>
            <Outlet />
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
      {/* Main layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/my-events" element={<MyEvents />} />
        {/* <Route path="/unlocks" element={<Unlocks />} /> */}
        <Route path="/about-us" element={<AboutUs />} />
        {/* <Route path="/venues" element={<Venues />} /> */}
        <Route path="/login" element={<Login />} /> 
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/landfall" element={<WeddingLandingPage />} />
        <Route path="/calendar" element={<CalendarComponent />} />
        <Route path="/google-sign-in" element={<GoogleSignIn />} />
        {/* Catch-all route for errors */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
