import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "../PostSlice/PostSlice";
import CommentReducer from "../Comments/CommentSlice";
import CounterReducer from "../CounterSlice";



export const store=configureStore({
    reducer:{
       count:CounterReducer,
        post:PostReducer,
        comment:CommentReducer
       
    }
});