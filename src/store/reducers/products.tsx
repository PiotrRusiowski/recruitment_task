import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts } from "../../actions/actions";
import { Product, ProductsState } from "../../types/types";

const initialState: ProductsState = {
  products: [],
  filteredProducts: [],
  isLoading: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state) => {
      state.filteredProducts = state.products;
    },
    filterProducts: (state, action: PayloadAction<string>) => {
      state.filteredProducts = state.products.filter(
        (product) => product.id === +action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.products = action.payload;
        state.isLoading = false;
      }
    );
    builder.addCase(fetchProducts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});
export const { filterProducts, setProducts } = productsSlice.actions;
export default productsSlice.reducer;
