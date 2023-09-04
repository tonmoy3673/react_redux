import { createSlice } from "@reduxjs/toolkit";

export const PostSlice=createSlice({
    name:'post',
    initialState:{
        isLoading:false,
        post:[],
        error:null,
    },
    
})