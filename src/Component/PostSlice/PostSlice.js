import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPost=createAsyncThunk('post/fetchPost',async()=>{
   const res= await axios.get('https://jsonplaceholder.typicode.com/posts')
   return res.data

})

export const PostSlice=createSlice({
    name:'post',
    initialState:{
        isLoading:false,
        post:[],
        error:null,
    },
    extraReducers:builder=>{
    builder.addCase()
    }
})