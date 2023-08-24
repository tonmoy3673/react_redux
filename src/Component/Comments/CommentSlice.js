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
        builder.addCase(fetchComment.pending,(state)=>{
            state.isLoading=true;
            state.comments=[];
            state.error=null
        });
        builder.addCase(fetchComment.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.comments=action.payload;
            state.error=null
        });
        builder.addCase(fetchComment.rejected,(state,action)=>{
            state.isLoading=false;
            state.comments=[];
            state.error=action.message
        });

    }
});
export default CommentSlice.reducer;