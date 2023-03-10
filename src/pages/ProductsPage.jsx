import { Box, Grid } from "@mui/material";
import React from "react";
import ProductsList from "../components/products/ProductsList";
import SideBar from "../components/products/SideBar";

const ProductsPage = () => {
  return (
    <Box p={5}>
      ProductsPage
      <Grid container spacing={3}>
        <ProductsList />
        <SideBar />
      </Grid>
    </Box>
  );
};

export default ProductsPage;
