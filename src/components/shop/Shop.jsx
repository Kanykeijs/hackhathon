import React from "react";
import ProductsList from "../products/ProductsList";
import SideBar from "../products/SideBar";
import "./Shop.css";

const Shop = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-betweenx",
      }}
    >
      <ProductsList />
      <SideBar />
    </div>
  );
};

export default Shop;
