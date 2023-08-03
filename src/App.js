import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './routes/error-page';
import Creatures from './components/Creatures';
import Equipment from './components/Equipment';
import Materials from './components/Materials';
import Monsters from './components/Monsters';
import Treasures from './components/Treasures';
import CardDetails from './components/CardDetails';
import Categories from './components/Categories';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'metrics_webapp_botw/',
        element: <Categories />,
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
