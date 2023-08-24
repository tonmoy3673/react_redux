import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchComment=createAsyncThunk('comments/fetchComment',async()=>{
    const res=await axios.get('https://jsonplaceholder.typicode.com/comments');
    return res.data;

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