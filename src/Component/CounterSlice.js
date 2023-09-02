import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice=createSlice({
    name:'count',
    initialState:{
        count:0
    },

    reducers:{
        ADD:(state)=>{
            state.count=state.count+1
        },
        RESET:(state)=>{
            state.count=0
        },
        REMOVE:(state)=>{
            state.count=state.count-1
        },
        ADD10:(state,action)=>{
            state.count=state.count+action.payload
        }
        
    }
});

export const {ADD,RESET,REMOVE,ADD10}=CounterSlice.actions;
export default CounterSlice.reducer;