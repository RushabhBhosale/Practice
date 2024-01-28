import { createSlice } from "@reduxjs/toolkit";
import productsData from "../productsData";

const initialState = {
   cart: [],
   items: productsData,
   totalQuantity: 0,
   totalAmount: 0,
}

export const CartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addToCart: (state, action) => {
         const existingItem = state.cart.find(item => item.id === action.payload.id);

         if (existingItem) {
            existingItem.quantity++;
         } else {
            state.cart.push(action.payload);
         }
      },

      getCartTotal: (state, action) => {
         const { totalQuantity, totalAmount } = state.cart.reduce(
            (cartTotal, cartItem) => {
               const { price, quantity } = cartItem;
               const itemTotal = price * quantity;
               cartTotal.totalQuantity += quantity;
               cartTotal.totalAmount += itemTotal;
               return cartTotal;
            },
            {
               totalAmount: 0,
               totalQuantity: 0,
            }
         );
         state.totalAmount = parseFloat(totalAmount.toFixed(2));
         state.totalQuantity = totalQuantity;
      },

      removeItem: (state, action) => {
         state.cart = state.cart.filter((item) => item.id !== action.payload);
      }
   },
});

export const { addToCart, removeItem, getCartTotal } = CartSlice.actions;

export default CartSlice.reducer;
