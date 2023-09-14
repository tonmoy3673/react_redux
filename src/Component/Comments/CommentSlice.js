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
        builder.addCase(fetchComment.pending,(state)=>{
            state.isLoading=true;
            state.comment=[];
            state.error=null;

        });
        builder.addCase(fetchComment.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.comment=action.payload;
            state.error=null;

        })
        builder.addCase(fetchComment.rejected,(state,action)=>{
            state.isLoading=false;
            state.comment=[];
            state.error=action.payload.message;

        });

    }
});

export default CommentSlice.reducer;
