import React, { FC, useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./actions/actions";
import { Action } from "@reduxjs/toolkit";
import { Product } from "./types/types";
import ProductsFilter from "./Components/ProductsFilter";
import ProductsTable from "./Components/ProductsTable";

const App: FC = () => {
  const dispatch = useDispatch();

  const { products, isLoading, filteredProducts } = useSelector(
    (state: any) => state.products
  );
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchProducts());
  }, []);
  return (
    <div>
      <ProductsFilter />
      <ProductsTable />
    </div>
  );
};

export default App;
