import { Navigate, type RouteObject } from 'react-router-dom';

// Layouts
import Layout from 'layouts/index';
import CharacterLayout from 'layouts/Character';
import ComicsLayout from 'layouts/Comics';

import CharacterDetails from './Characters/CharacterDetails/CharacterDetails';
import ComicsDetails from './Comics/ComicsDetails/ComicsDetails';
import Favourites from './Favourites';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/characters" /> },
      {
        path: 'characters',
        element: <CharacterLayout />,
        children: [
          {
            path: ':id',
            element: <CharacterDetails />
          }
        ]
      },
      {
        path: 'comics',
        element: <ComicsLayout />,
        children: [
          {
            path: ':id',
            element: <ComicsDetails />
          }
        ]
      },
      {
        path: 'favourites',
        element: <Favourites />
      }
    ]
  },
  {
    path: '404',
    element: <div>Not Found</div>
  },
  {
    path: '*',
    element: <Navigate to="/404" />
  }
];

export default routes;
