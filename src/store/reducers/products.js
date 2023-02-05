import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: ["pepe"],
  isLoading: false,
};
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://reqres.in/api/products");
    return response.data.data;
  }
);
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addItem(state, action) {
      state.products = [...state.products, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});
export const { addItem } = productsSlice.actions;
export default productsSlice.reducer;
