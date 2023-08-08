import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../CounterSlice";
import PostReducer from "../PostSlice/PostSlice";

export const store=configureStore({
    reducer:{
        count:CounterReducer,
        post:PostReducer,
    }
});