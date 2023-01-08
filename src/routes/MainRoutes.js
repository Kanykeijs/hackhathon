import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Contacts from "../components/contacts/Contacts";
import HomePage from "../components/homePage/HomePage";
import Services from "../components/services/Services";
import { useAuth } from "../contexts/authContext";
import { ADMIN } from "../helpers/consts";
import AdminPage from "../pages/AdminPage";
import EditProductPage from "../pages/EditProductPage";

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
