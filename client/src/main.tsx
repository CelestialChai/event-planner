import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './pages/home';
import CreateEvent from './pages/CreateEvent';
import MyEvents from './pages/myevents';
import AboutUs from './pages/aboutus';
import WeddingLandingPage from './pages/LandingPage';
import Login from './pages/login';
import SignUp from './pages/signup';
import CalendarComponent from './components/calender';
import ErrorPage from './pages/error';
import GoogleSignIn from './components/GoogleSignIn';
import './index.css';

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
      { path: 'landfall', element: <WeddingLandingPage /> },
      { path: 'login', element: <Login /> },
      { path: 'sign-up', element: <SignUp /> },
      { path: 'calendar', element: <CalendarComponent /> },
      { path: 'google-sign-in', element: <GoogleSignIn /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
