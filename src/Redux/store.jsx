// src/Redux/store.js

import { configureStore } from "@reduxjs/toolkit";

// Slices import
import CartReducer from "./Slices/Cartslice"

export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});
