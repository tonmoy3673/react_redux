import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPost=createAsyncThunk('posts/fetchPost',async()=>{
    const res=await axios.get('https://jsonplaceholder.typicode.com/posts')
    return res.data
})
export const PostSlice=createSlice({
    name:'posts',
    initialState:{
        isLoading:false,
        post:[],
        error:null
    },

    extraReducers:(builder)=>{
       builder.addCase(fetchPost.pending,state=>{
            state.isLoading=true;
            state.post=[];
            state.error=null;
       });
       builder.addCase(fetchPost.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.post=action.payload;
        state.error=null;
   });
   builder.addCase(fetchPost.rejected,(state,action)=>{
    state.isLoading=true;
    state.error=action.error.message;
});
    }
});

export default PostSlice.reducer;
