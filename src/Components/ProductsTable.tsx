import React, { FC } from "react";
import { useSelector } from "react-redux";
import { ProductsState } from "../types/types";

const ProductsTable: FC = () => {
  const products = useSelector(
    (state: ProductsState) => state.filteredProducts
  );

  return <div></div>;
};

export default ProductsTable;
