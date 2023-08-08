import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPost=createAsyncThunk('posts/fetchPost',async()=>{
    const res=await axios.get('https://jsonplaceholder.typicode.com/posts')
    return res.data
})
const PostSlice=createSlice({
    name:'posts',
    initialState:{
        isLoading:false,
        post:[],
        error:null
    },

    extraReducers:(builder)=>{
       
    }
})