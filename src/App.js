import React from "react";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./contexts/authContext";
import CartContextProvider from "./contexts/CartContext";
import ProductsContextProvider from "./contexts/ProductsContext";
//import ProductsPage from "./pages/ProductsPage";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <Navbar />
          {/* <ProductsPage /> */}
          <MainRoutes />
          <Footer />
        </CartContextProvider>
      </ProductsContextProvider>
    </AuthContextProvider>
  );
};

export default App;
