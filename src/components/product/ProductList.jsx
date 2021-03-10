import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ProductCard from "./ProductCard";
import data from '../../ProductData.json'
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 4,
    },
  })
);

export default function ProductList() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [obj, setObj] = useState({ products : [] })

  const addProduct = (product) => {
    setObj({
      ...obj,
      products: [...obj.products, product] });
  }

  useEffect(() => {
    try {
        dispatch({
            type: "Add_ToCart",
            payload: obj
        })
    } catch (error) {
        console.log(error)
    }
  }, [obj])

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {data &&
          data.products.map((product, i) => (
            <Grid item xs={6} sm={3} key={i}>
              <ProductCard product={product} addProduct={addProduct} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
