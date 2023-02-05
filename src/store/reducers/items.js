import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: ["pepe"],
  isLoading: false,
};
export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const response = await axios.get("https://reqres.in/api/products");
  return response.data.data;
});
const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items = [...state.items, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchItems.rejected, (state) => {
      state.isLoading = false;
    });
  },
});
export const { addItem } = itemsSlice.actions;
export default itemsSlice.reducer;
