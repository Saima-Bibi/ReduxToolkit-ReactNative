import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartSlice'
const myStore = configureStore(
   { reducer:{
     cart: cartReducer
    }}
)
export default myStore


