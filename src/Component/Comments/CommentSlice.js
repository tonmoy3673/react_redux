import { createSlice } from "@reduxjs/toolkit";


export const CommentSlice =createSlice({
    name:'Comments',
    initialState:{
        isLoading:false,
        comments:[],
        error:null
    },
    
});

