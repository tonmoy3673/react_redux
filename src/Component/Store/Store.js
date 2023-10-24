import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "../PostSlice/PostSlice";
import CommentReducer from "../Comments/CommentSlice";



export const store=configureStore({
    reducer:{
       
        post:PostReducer,
        comment:CommentReducer
       
    }
});