import { createSlice } from "@reduxjs/toolkit"
import { nanoid } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        itemsList : [],
        totalQuantity: 0,
        
    },
    reducers: {
        addToCart(state,action) {
            const newItem = action.payload;
            state.itemsList.push(newItem);
            state.totalQuantity++;
        },
        fixId(state,action) {
            state.itemsList.map(item => {if (item.id === action.payload) return item.id = nanoid()} )
        },
        removeFromCart(state,action) {
            state.totalQuantity--;
            state.itemsList = state.itemsList.filter(item => item.id !== action.payload);
        },
        removeAll(state) {
            state.itemsList = [];
            state.totalQuantity = 0;
        }
        
    }
});

export default cartSlice;