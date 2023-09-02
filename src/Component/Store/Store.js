import { configureStore } from "@reduxjs/toolkit";

import PostReducer from "../PostSlice/PostSlice";
import TodoReducer from "../TodoSlice/TodoSlice";
import CommentReducer from "../Comments/CommentSlice";

export const store=configureStore({
    reducer:{
       
        post:PostReducer,
        todo:TodoReducer,
        comments:CommentReducer,
    }
});