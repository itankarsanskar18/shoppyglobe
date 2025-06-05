// src/Redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // This is correct because both are in same folder

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
