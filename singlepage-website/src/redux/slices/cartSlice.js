import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],  
  totalPrice: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, number = 1 } = action.payload;
      const productId = product.code;
      
      const existingItem = state.items.find(item => item.code === productId);

      if (existingItem) {
        existingItem.number += number;
      } else {
        state.items.push( {...product, number: number });
      }

      state.totalPrice += product.price * number;

      console.log(state)
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;
      const existingItem = state.items.find(item => item.code === productId);

      if (existingItem) {
        state.totalPrice -= existingItem.price * existingItem.number;
        state.items = state.items.filter(item => item.code !== productId);
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },

    updateNumber: (state, action) => {
      const { code, number } = action.payload;
      const existingItem = state.items.find(item => item.code === code);
      if (existingItem) {
        existingItem.number = number;
      }
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.number,
        0
      );
    },
  }
});

export const { addToCart, removeFromCart, clearCart, updateNumber } = cartSlice.actions;
export default cartSlice.reducer;
