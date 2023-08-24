import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../CounterSlice";
import PostReducer from "../PostSlice/PostSlice";
import TodoReducer from "../TodoSlice/TodoSlice";
import CommentReducer from "../Comments/CommentSlice";

export const store=configureStore({
    reducer:{
        count:CounterReducer,
        post:PostReducer,
        todo:TodoReducer,
        comments:CommentReducer,
    }
});