import { createSlice } from '@reduxjs/toolkit'
import productData from '../productData'

const initialState = {
   cart: [],
   items: productData,
   totalQuantity: 0,
   totalPrice: 0,
};

export const cartSLice = createSlice({
   name: 'cart',
   initialState,
   reducers: {

      addToCart: (state, action) => {
         let find = state.cart.findIndex((item) => item.id === action.payload.id);

         if (find >= 0) {
            state.cart[find].quantity++;
         } else {
            state.cart.push(action.payload)
         }

      },

      getCartTotal: (state) => {
         let { totalQuantity, totalPrice } = state.cart.reduce(
            (cartTotal, cartItem) => {
               const { price, quantity } = cartItem;
               const itemTotal = price * quantity;
               cartTotal.totalQuantity += quantity;
               cartTotal.totalPrice += itemTotal;
               return cartTotal;
            },
            {
               totalPrice: 0,
               totalQuantity: 0,
            }
         );
         state.totalPrice = parseInt(totalPrice.toFixed(2));
         state.totalQuantity = totalQuantity;
      },

      removeItem: (state, action) => {
         state.cart = state.cart.filter((item) => item.id !== action.payload);
      }
   },
});

export const { addToCart, getCartTotal, removeItem } = cartSLice.actions

export default cartSLice.reducer