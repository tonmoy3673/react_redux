import { configureStore } from "@reduxjs/toolkit";


import TodoReducer from "../TodoSlice/TodoSlice";
import CommentReducer from "../Comments/CommentSlice";
import CounterReducer from "../CounterSlice";

export const store=configureStore({
    reducer:{
       count:CounterReducer,
        todo:TodoReducer,
        comments:CommentReducer,
    }
});