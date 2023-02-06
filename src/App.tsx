import React, { FC, useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./actions/actions";
import { Action } from "@reduxjs/toolkit";
import { Product } from "./types/types";
import ProductsFilter from "./Components/ProductsFilter";

const App: FC = () => {
  const dispatch = useDispatch();

  const { products, isLoading, filteredProducts } = useSelector(
    (state: any) => state.products
  );
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchProducts());
  }, []);
  console.log(products, filteredProducts);
  return (
    <div>
      <ProductsFilter />

      {filteredProducts.map((el: any) => (
        <h4 key={el.id}>{el.id}</h4>
      ))}
    </div>
  );
};

export default App;
