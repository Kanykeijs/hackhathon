import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductsContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { getOneProduct, oneProduct } = useProducts();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  return (
    <Paper sx={{ m: 3 }} elevation={24}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img src={oneProduct.picture} alt="" />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h3">{oneProduct.name}</Typography>
          <Typography variant="subtitle">{oneProduct.type}</Typography>
          <Typography variant="caption">{oneProduct.price}сом</Typography>
          <Typography variant="caption">{oneProduct.description}</Typography>
          <Box>
            <Button>Добавить в корзину</Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProductDetails;
