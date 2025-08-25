import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Root from '../Root';
import ViewShop from '../Components/ViewShop/ViewShop';
import HotDeals from '../Components/HotDeals/HotDeals';
import EidCollection from '../Components/EidCollection/EidCollection';
import BoishakhiCollection from '../Components/BoishakhiCollection/BoishakhiCollection';
import NotF from '../pages/NotF/NotF';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, 
    children: [
      {
        index: true,
        element: <Home />, 
      },
      {
        path: "/ViewShop",
        Component: ViewShop
      },
      {
        path: "/HotDeals",
        Component: HotDeals
      },
      {
        path: "/EidCollection",
        Component: EidCollection
      },
      {
        path: "/BoishakhiCollection",
        Component: BoishakhiCollection
      }
    ],
  },
  { path: "*", element: <NotF /> }
]);
