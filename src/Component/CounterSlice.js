import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice=createSlice({
    name:'counter',
    initialState:{
        count:0
    },
   
    reducers:{
        ADD:state=>{
            state.count=state.count+1
        },
        RESET:state=>{
            state.count=0
        },

        REMOVE:state=>{
            state.count=state.count-1
        }
    }
});

export const {ADD,REMOVE,RESET}=CounterSlice.actions;
 export default CounterSlice.reducer;
