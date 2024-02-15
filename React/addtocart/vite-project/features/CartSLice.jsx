import productData from "../productData"

const initialState = {
   cart:[],
   items: productData,
   totalQuantity: 0,
   totalAmount: 0,
}

export const CartSlice = ({
   name: 'cart',
   initialState,
   reducers:{

      addToCart: (state, action) {
         let find = state.cart.items.findIndex((item) => item.id === action.payload.id);

         if (find >= 0) {
            state.
         }
      }
   }
})