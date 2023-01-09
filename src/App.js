import React from "react";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./contexts/authContext";
import CartContextProvider from "./contexts/CartContext";
import ProductsContextProvider from "./contexts/ProductsContext";
import ProductsPage from "./pages/ProductsPage";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <Navbar />

          <MainRoutes />
        </CartContextProvider>
      </ProductsContextProvider>
    </AuthContextProvider>
  );
};

export default App;
