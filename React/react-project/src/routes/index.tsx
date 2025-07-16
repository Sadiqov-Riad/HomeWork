import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Dashboard from '../pages/Dashboard';
import Booking from '../pages/Booking';
import Schedule from '../pages/Schedule';
import BusManagement from '../pages/BusManagement';
import Settings from '../pages/Settings';
import Support from '../pages/Support';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'booking',
        element: <Booking />,
      },
      {
        path: 'schedule',
        element: <Schedule />,
      },
      {
        path: 'bus-management',
        element: <BusManagement />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'support',
        element: <Support />,
      },
    ],
  },
]); 