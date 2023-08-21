import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchComments=createAsyncThunk('comments/fetchComments',async()=>{
const res=await axios.get('https://jsonplaceholder.typicode.com/comments')
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

