import { createAsyncThunk, Action } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(
      "https://reqres.in/api/products?per_page=5"
    );
    return response.data.data;
  }
);
