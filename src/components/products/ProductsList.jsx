import { Box, CircularProgress, Grid, Pagination } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductsContext";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const [searchParams, serSearchParams] = useSearchParams();
  const { getProducts, products } = useProducts();

  const [page, setPage] = useState(1);

  const itemsPerPage = 5;

  const count = Math.ceil(products.length / itemsPerPage);

  const handleChange = (e, p) => {
    console.log(p);
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  return (
    <Grid
      item
      md={9}
      sx={{ justifyContent: "center", display: "flex", flexWrap: "wrap" }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          minHeight: "40vw",
          gap: "10px",
        }}
      >
        {products.length > 0 ? (
          currentData().map((item) => <ProductCard item={item} key={item.id} />)
        ) : (
          <>
            <CircularProgress color="inherit" />
          </>
        )}
      </Box>
      <Pagination
        sx={{ m: 2 }}
        count={count}
        page={page}
        onChange={handleChange}
        shape="rounded"
      />
    </Grid>
  );
};

export default ProductsList;
