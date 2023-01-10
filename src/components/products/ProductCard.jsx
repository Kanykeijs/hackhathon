import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { useCart } from "../../contexts/CartContext";
import { useProducts } from "../../contexts/ProductsContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { ADMIN } from "../../helpers/consts";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";

export default function ProductCard({ item }) {
  const navigate = useNavigate();

  const { addProductToCart, checkProductInCart } = useCart();
  const { deleteProduct } = useProducts();
  const {
    user: { email },
  } = useAuth();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={item.picture}
        title="green iguana"
        onClick={() => navigate(`/products/${item.id}`)}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography
          sx={{ color: "green", fontWeight: "700" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {item.price}сом
        </Typography>
        <Typography
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "3",
            WebkitBoxOrient: "vertical",
          }}
          variant="body2"
          color="text.secondary"
        >
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        {email == ADMIN ? (
          <>
            <Button onClick={() => deleteProduct(item.id)}>
              <DeleteIcon />
            </Button>
            <Button onClick={() => navigate(`/edit/${item.id}`)}>
              <BorderColorIcon />
            </Button>
          </>
        ) : (
          <IconButton onClick={() => addProductToCart(item)}>
            {checkProductInCart(item.id) ? (
              <>
                <ShoppingCartIcon
                  sx={{
                    color: "brown",
                  }}
                />
              </>
            ) : (
              <>
                <AddShoppingCartIcon />
                <FavoriteBorderIcon />
                <StarBorderIcon />
              </>
            )}
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}
