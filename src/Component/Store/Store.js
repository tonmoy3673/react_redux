import { configureStore } from "@reduxjs/toolkit";
import CommentReducer from "../Comments/CommentSlice";
import CounterReducer from "../CounterSlice";
import PostReducer from "../PostSlice/PostSlice";

export const store=configureStore({
    reducer:{
        post:PostReducer,
       count:CounterReducer,
        comments:CommentReducer,
    }
});