import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice=createSlice({
    name:'count',
    initialState:{
        count:0
    },

    reducers:{
        type:'ADD',
        
    }
})