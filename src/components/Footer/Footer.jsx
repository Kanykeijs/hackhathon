import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 1500, backgroundColor: "#e0f2f1" }}>
      {/* <CardMedia component="img" alt="green iguana" height="140" /> */}
      <CardContent>
        <Typography
          style={{ display: "flex", justifyContent: "left" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          NAILS
        </Typography>
        <Typography variant="body2" color="text.secondary" variant="h6">
          Online-поддержка
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <InstagramIcon />
        </Button>
        <Button size="small">
          <TelegramIcon />
        </Button>
        <Button size="small">
          <WhatsAppIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
