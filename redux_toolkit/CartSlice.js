import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const CartSlice = createSlice({
    name:'cartSlice',
    initialState,
    reducers:{
        addToCart(state,action){
         state.push(action.payload)
        },
        removeFromCart(state,action){
        return state.filter((item,index)=> index !== action.payload)
        }
    }
})
export  const {addToCart, removeFromCart} = CartSlice.actions
export default CartSlice.reducer