import { createSlice } from "@reduxjs/toolkit";


export const CounterSlice=createSlice({
    name:'count',
    initialState:{
        count:0
    },
    reducers:{
    add:(state)=>{
        state.count=state.count+1
    },
    reset:(state)=>{
        state.count=0
    },
    remove:(state)=>{
        state.count=state.count-1
    },
    add10:(state,action)=>{
        state.count=state.count+action.payload
    }

    
    }
});

export const {add,reset,remove,add10}=CounterSlice.actions;
export default CounterSlice.reducer;