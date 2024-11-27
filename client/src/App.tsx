import { Routes, Route, Outlet } from "react-router-dom";
import NavigationBar from "./components/Nav";
import "./App.css";
import { Box, CssBaseline } from "@mui/material";
import CreateEvent from "./pages/CreateEvent";
import MyEvents from "./pages/myevents";
// import Unlocks from "./pages/unlocks";
// import AboutUs from "./pages/aboutus";
// import Venues from "./pages/venues";
import WeddingLandingPage from "./pages/LandingPage"
import Login from "./pages/login";
import SignUp from "./pages/signup";
import CalendarComponent from "./components/calender";
import RSVPform from "./pages/RSVPform";

// Layout Component for Navigation and Main Content
function Layout() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        {/* Persistent Navigation Bar */}
        <NavigationBar />
        {/* Main Content Area */}
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <main>
            <Outlet /> {/* Render child routes here */}
          </main>
        </Box>
      </Box>
    </>
  );
}

export default function RouterSetup() {
  return (
    <Routes>
     <Route path="/" element={<Layout />}>
        <Route path="/CreateEvent" element={<CreateEvent />} />
        <Route path="/my-events" element={<MyEvents />} />
        {/* <Route path="/unlocks" element={<Unlocks />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/venues" element={<Venues />} /> */}
        <Route path="/login" element={<Login />} /> 
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/landfall" element={<WeddingLandingPage />} />
        <Route path="/calendar" element={<CalendarComponent />} />
        <Route path="/RSVPform" element={<RSVPform />} />
      </Route>
    </Routes>
  );
}
