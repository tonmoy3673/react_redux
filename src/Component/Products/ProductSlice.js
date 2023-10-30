import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProduct=createAsyncThunk('products/fetchProduct',async()=>{
    
})


export const ProductSlice = createSlice({
    name:'products',
    initialState:{
        isLoading:true,
        products:[],
        error:null,
    },
    extraReducers:builder=>{

    }
})