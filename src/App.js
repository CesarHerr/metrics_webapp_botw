import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './routes/error-page';
import Home from './components/Home';
import Creatures from './components/Creatures';
import Equipment from './components/Equipment';
import Materials from './components/Materials';
import Monsters from './components/Monsters';
import Treasures from './components/Tresures';
import CardDetails from './components/CardDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/creatures',
        element: <Creatures />,
      },
      {
        path: '/equipment',
        element: <Equipment />,
      },
      {
        path: '/materials',
        element: <Materials />,
      },
      {
        path: '/monsters',
        element: <Monsters />,
      },
      {
        path: '/treasures',
        element: <Treasures />,
      },
      {
        path: '/card_detail',
        element: <CardDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
