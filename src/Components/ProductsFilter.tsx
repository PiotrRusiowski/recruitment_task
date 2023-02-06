import React, { FC, useState } from "react";
import { Button, InputAdornment, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { filterProducts, setProducts } from "../store/reducers/products";

const ProductsFilter: FC = () => {
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const handleFilterProducts = (e: string): void => {
    id === "" ? dispatch(filterProducts(e)) : dispatch(setProducts());
  };

  return (
    <div>
      <TextField
        onChange={(e) => {
          setId(e.target.value);
          handleFilterProducts(e.target.value);
        }}
        label="Id filter"
        type="number"
        id="outlined-start-adornment"
        sx={{ m: 1, width: "10ch" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">Id:</InputAdornment>,
        }}
      />
    </div>
  );
};

export default ProductsFilter;
