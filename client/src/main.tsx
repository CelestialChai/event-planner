import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import HomePage from './pages/home';
import CreateEvent from './pages/CreateEvent';
import ErrorPage from './pages/error';
import MyEvents from './pages/myevents';
import AboutUs from './pages/aboutus';
import Unlocks from './pages/unlocks';
import Venues from './pages/venues';
import SignUp from './pages/signup';
import { Login } from '@mui/icons-material';
import {EventProvider } from './context/EventContext';
import WeddingLandingPage from './pages/LandingPage';
import CalendarComponent from './components/calender';
import RSVPForm from './pages/RSVPform';
import GoogleCalendarIntegration from './components/GoogleCalenderIntergration';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,  // Error boundary for the entire app
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/create',
        element: <CreateEvent />,
      },
      {
        path: '/my-events',
        element: <MyEvents />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/unlocks',
        element: <Unlocks />,
      },
      {
        path: '/my-events',
        element: <MyEvents />,
      },
      {
        path: '/venues',
        element: <Venues />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/sign-up',
        element: <SignUp/>,
      },
      {
        path: '/landfall',
        element: <WeddingLandingPage/>,
      },
      {
        path: '/calender',
        element: <CalendarComponent/>,
      },
      {
        path: '/RSVPform',
        element: <RSVPForm/>,
      },
      {
        path: '/google-sign-in',
        element: <GoogleCalendarIntegration/>,
      },

      // Add other routes here as needed

      // Catch-all route for unmatched paths
      {
        path: '*',  // Will catch any unmatched path
        element: <ErrorPage />,
      },
    ],
  },
]);


const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <EventProvider>
      <RouterProvider router={router} />
    </EventProvider>
  );
}