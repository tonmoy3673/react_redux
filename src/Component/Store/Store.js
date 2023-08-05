import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../CounterSlice";
import { postReducer } from "../PostSlice/PostSlice";


export const store=configureStore({
    reducer:{
        counter:CounterReducer,
        posts:postReducer
    }
});