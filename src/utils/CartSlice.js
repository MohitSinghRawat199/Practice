import {createSlice} from "@reduxjs/toolkit";


const CartSLice = createSlice({
    name:"cart",
    initialState:{
        count:3
    },
    reducers:{
        addItems: ()=>{
               conut =count+1;
        }
    }
})

export const {addItems} = CartSLice.actions;
export default CartSLice.reducer;