import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice=createSlice({
    name:'CountApp',
    initialState:{
        count:0
    },
    reducers:{
        ADD: state=>{
            state.count=state.count+1
        },
        RESET : state=>{
            state.count=0
        },

        REMOVE : state=>{
            state.count=state.count-1
        }
    },

});
export const {ADD,RESET,REMOVE}=CounterSlice.actions;
export default CounterSlice.reducer;