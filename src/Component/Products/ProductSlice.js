import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProduct=createAsyncThunk('products/fetchProduct',async()=>{
    const res= await axios.get('/products.json');
    const data= await res.json();
    console.log(data);
})


export const ProductSlice = createSlice({
    name:'products',
    initialState:{
        isLoading:false,
        products:[],
        error:null,
    },
    extraReducers:builder=>{
        builder.addCase(fetchProduct.pending,(state)=>{
            state.isLoading=true;
            state.products=[];
            state.error=null;

        });
        builder.addCase(fetchProduct.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.products=action.payload;
            state.error=null;
        });
        builder.addCase(fetchProduct.rejected,(state,action)=>{
            state.isLoading=false;
            state.products=[];
            state.error=action.error.message;
        })
    }
});

export default ProductSlice.reducer;