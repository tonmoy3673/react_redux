import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../CounterSlice";
import PostReducer from "../PostSlice/PostSlice";
import TodoReducer from "../TodoSlice/TodoSlice";

export const store=configureStore({
    reducer:{
        post:PostReducer,
        todo:TodoReducer,
       count:CounterReducer,
       
    }
});