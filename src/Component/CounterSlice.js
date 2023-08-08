import { createSlice } from "@reduxjs/toolkit";


export const CounterSlice=createSlice({
    name:'counter',
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
        }
    }
});

export const {add,reset,remove}=CounterSlice.actions;
export default CounterSlice.reducer;