import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Cart from "../components/cart/Cart";
import Contacts from "../components/contacts/Contacts";
import HomePage from "../components/homePage/HomePage";
import SideBar from "../components/products/SideBar";
import Services from "../components/services/Services";
import Shop from "../components/shop/Shop";
import { useAuth } from "../contexts/authContext";
import { ADMIN } from "../helpers/consts";
import AdminPage from "../pages/AdminPage";
//import EditProductPage from "../pages/EditProductPage";
import AuthPage from "../pages/AuthPage";
import EditProductPage from "../pages/EditProductPage";
import ProductsPage from "../pages/ProductsPage";

const MainRoutes = () => {
  const { user } = useAuth();
  const PUBLIC_ROUTES = [
    {
      link: "beauty",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/price",
      element: <Services />,
      id: 2,
    },
    {
      link: "/contacts",
      element: <Contacts />,
      id: 3,
    },
    {
      link: "/about",
      element: <Shop />,
      id: 4,
    },
    {
      link: "/auth",
      element: <AuthPage />,
      id: 5,
    },
    {
      link: "/",
      element: <SideBar />,
      id: 6,
    },
    {
      link: "/products",
      element: <ProductsPage />,
      id: 7,
    },
    {
      link: "/cart",
      element: <Cart />,
      id: 8,
    },
  ];

  const PRIVATE_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditProductPage />,
      id: 2,
    },
  ];

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
        {user
          ? PRIVATE_ROUTES.map((item) => (
              <Route
                path={item.link}
                element={
                  user.email === ADMIN ? (
                    item.element
                  ) : (
                    <Navigate replace to="*" />
                  )
                }
                key={item.id}
              />
            ))
          : null}
      </Routes>
    </>
  );
};

export default MainRoutes;
