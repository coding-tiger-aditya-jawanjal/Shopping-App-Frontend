import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = res.json();
  return data;
});

export const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: true,
    data: [],
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export default productSlice.reducer;
