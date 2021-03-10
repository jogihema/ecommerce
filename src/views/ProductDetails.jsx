import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from "../components/product/ProductCard";

const ProductDetails = () => {
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

    const product = useSelector(state => (state.Product_Reducer.product));

    return (
        <div>
            <ProductCard product={product} addProduct={addProduct} />
        </div>
    )
}

export default ProductDetails
