import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchComments=createAsyncThunk('comments/fetchComments',async()=>{

});

export const CommentSlice =createSlice({
    name:'Comments',
    initialState:{
        isLoading:false,
        comments:[],
        error:null
    },
    extraReducers:(builder)=>{
    
    }
});

