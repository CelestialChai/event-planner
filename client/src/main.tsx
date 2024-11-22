import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.tsx'
import './index.css'

import HomePage from './pages/home.tsx'
import CreateEvent from './pages/CreateEvent.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      }, 
      {
        path: '/new-event',
        element: <CreateEvent />
      },
      // {
      //   path: '/new-volunteer',
      //   element: <VolunteerForm />
      // },
      // {
      //   path: '/edit-volunteer',
      //   element: <EditVolunteer />
      // },
      // {
      //   path: '/edit-work',
      //   element: <EditWork />
      // }
    ]
  }
]);

const rootElement = document.getElementById('root');
if(rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}
