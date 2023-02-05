import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [{ name: "item1" }],
  isLoading: false,
};
export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const response = await axios.get("https://reqres.in/api/products");
  return response.data;
});
const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items = [...state.items, action.payload];
    },
    extraReducers: (builder) => {
      builder.addCase(fetchItems.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(fetchItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      });
      builder.addCase(fetchItems.rejected, (state) => {
        console.log(state);
        state.isLoading = false;
      });
    },
  },
});
export const { addUser } = itemsSlice.actions;
export default itemsSlice.reducer;
