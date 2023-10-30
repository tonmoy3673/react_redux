import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "../PostSlice/PostSlice";
import CommentReducer from "../Comments/CommentSlice";
import CounterReducer from "../CounterSlice";
import ProductReducer from "../Products/ProductSlice";



export const store=configureStore({
    reducer:{
       count:CounterReducer,
       products:ProductReducer,
        post:PostReducer,
        comment:CommentReducer
       
    }
});