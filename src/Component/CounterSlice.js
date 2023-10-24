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
        }
        
    }
});

export const {add,remove,reset}=CounterSlice.actions;
export default CounterSlice.reducer;
