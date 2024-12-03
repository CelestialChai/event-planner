import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

import HomePage from './pages/home';
import CreateEvent from './pages/CreateEvent';
import MyEvents from './pages/myevents';
import Unlocks from './pages/unlocks';
import AboutUs from './pages/aboutus';
import Venues from './pages/venues';
import WeddingLandingPage from './pages/LandingPage';
import Login from './pages/login';
import SignUp from './pages/signup';
import CalendarComponent from './components/calender';
import RSVPform from './pages/RSVPform';
import GoogleSignIn from './components/GoogleSignIn';
import ErrorPage from './pages/error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'create', element: <CreateEvent /> },
      { path: 'my-events', element: <MyEvents /> },
      { path: 'about-us', element: <AboutUs /> },
      { path: 'unlocks', element: <Unlocks /> },
      { path: 'venues', element: <Venues /> },
      { path: 'login', element: <Login /> },
      { path: 'sign-up', element: <SignUp /> },
      { path: 'landfall', element: <WeddingLandingPage /> },
      { path: 'calendar', element: <CalendarComponent /> },
      { path: 'RSVPform', element: <RSVPform /> },
      { path: 'google-sign-in', element: <GoogleSignIn /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);

