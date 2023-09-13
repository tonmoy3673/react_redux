import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchComment=createAsyncThunk('comment/fetchComment',async()=>{
    const res= await axios.get('https://jsonplaceholder.typicode.com/comments');
    return res.data;
})
export const CommentSlice =createSlice({
    name:'comment',
    initialState:{
        isLoading:false,
        comment:[],
        error:null
    },

    extraReducers:builder=>{

    }
});