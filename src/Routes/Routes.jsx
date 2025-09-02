import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Root from '../Root';
import ViewShop from '../Components/ViewShop/ViewShop';
import HotDeals from '../Components/HotDeals/HotDeals';
import EidCollection from '../Components/EidCollection/EidCollection';
import BoishakhiCollection from '../Components/BoishakhiCollection/BoishakhiCollection';
import NotF from '../pages/NotF/NotF';
import ProductDetail from '../Components/ViewShop/ProductDetail';

// 🔹 New imports
import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';
import RecoverPassword from '../pages/Auth/RecoverPassword';
import UserProfile from '../pages/UserProfile/UserProfile';
import ChangePassword from '../pages/UserProfile/ChangePassword';
import AddNewAddress from '../pages/UserProfile/AddNewAddress';
import YourCart from '../pages/Cart/YourCart';
import ProceedToCheckout from '../pages/Cart/ProceedToCheckout';
import ViewYourOrder from '../pages/Cart/ViewYourOrder';

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
        Component: ViewShop,
      },
      {
        path: "/ViewShop/:id",
        element: <ProductDetail />,
      },
      {
        path: "/HotDeals",
        Component: HotDeals,
      },
      {
        path: "/EidCollection",
        Component: EidCollection,
      },
      {
        path: "/BoishakhiCollection",
        Component: BoishakhiCollection,
      },
      {
        path: "/Cart",
        element: <ProceedToCheckout />
      },
      {
        path: "/view-your-order",
        element: <ViewYourOrder />
      },
      // ✅ SignIn & SignUp inside Root layout (if you want same navbar/footer)
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/recover-password",
        element: <RecoverPassword />,
      },
      {
        path: "/UserProfile",
        element: <UserProfile />
      },
      {
        path: "/change-password",
        element: <ChangePassword />,
      },
      {
        path: "/add-new-address",
        element: <AddNewAddress />
      }
    ],
  },

  { path: "*", element: <NotF /> },
]);
