import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchComment=createAsyncThunk('comments/fetchComment',async()=>{
    

})
export const CommentSlice=createSlice({
    name:'comments',
    initialState:{
        isLoading:false,
        comments:[],
        error:null
    },
    extraReducers:(builder)=>{

    }
})