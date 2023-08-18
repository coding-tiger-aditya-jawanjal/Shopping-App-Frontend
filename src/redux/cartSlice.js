import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addToCart(state, action) {
      const exist = state.items.find((item) => item.id === action.payload.id);
      if (!exist) {
        state.items.push(action.payload);
        state.total += action.payload.price
      } else {
        const index = state.items.findIndex((item) => item.id === exist.id);
        state.items[index].qty += 1;
        state.total += state.items[index].price;
      }
    },
    removeFromCart(state, action) {
      return {
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    },
    reduceNumber(state, action) {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      return {
        items: state.items[index].qty -= 1,
        total: state.total = state.total - state.items[index].price
      };
    },
  },
});
export const { addToCart, removeFromCart , reduceNumber} = cartSlice.actions;
export default cartSlice.reducer;
