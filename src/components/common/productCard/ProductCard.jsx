import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 300, maxHeight: 700, marginBottom: 20, marginTop: 5 }}>
      <CardMedia
        sx={{ height: 190 }}
        image={item.img}
        title={`image ${item.title}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {item.title}
        </Typography>
        <Typography variant="h7" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${item.id}`}>
          <Button size="small" variant="outlined">
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
