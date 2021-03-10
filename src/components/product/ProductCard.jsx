import { useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: "20px",
  },
  media: {
    height: 0,
    paddingTop: "150%", // 16:9
  },
});

function ProductCard({ product, addProduct }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [obj, setObj] = useState({ product })

  const ProductDetails = () => {
    try {
        dispatch({
            type: "Product_Details",
            payload: obj
        })
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <Card className={classes.root}>
      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        className="Link"
        onClick={()=>ProductDetails()}
        to="/productDetail"
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={product.image}
            title="product"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              Quantity: {product.quantity}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Unit Price: &#8377; {product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => addProduct(product)}
        >
          ADD
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
