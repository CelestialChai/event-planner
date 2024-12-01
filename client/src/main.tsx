import { createBrowserRouter } from "react-router-dom";
import App from "./App";

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
// import RSVPform from './pages/RSVPform';
import GoogleSignIn from './components/GoogleSignIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, // Define an error page
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "create",
        element: <CreateEvent />,
      },
      {
        path: "my-events",
        element: <MyEvents />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "landfall",
        element: <WeddingLandingPage />,
      },
      {
        path: "calendar",
        element: <CalendarComponent />,
      },
      {
        path: "google-sign-in",
        element: <GoogleSignIn />,
      },
    ],
  },
]);

export default router;
