import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/CartSLice'

export const store = configureStore({
   reducer:{
      allCart: cartReducer,
   },
})