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
        path: 'metrics_webapp_botw/creatures',
        element: <Creatures />,
      },
      {
        path: 'metrics_webapp_botw/equipment',
        element: <Equipment />,
      },
      {
        path: 'metrics_webapp_botw/materials',
        element: <Materials />,
      },
      {
        path: 'metrics_webapp_botw/monsters',
        element: <Monsters />,
      },
      {
        path: 'metrics_webapp_botw/treasures',
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
