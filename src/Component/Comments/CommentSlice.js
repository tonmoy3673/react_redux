import { createSlice } from "@reduxjs/toolkit";

export const CommentSlice =createSlice({
    name:'comment',
    initialState:{
        isLoading:false,
        comment:[],
        error:null
    },

    extraReducers:builder=>{
        
    }
})