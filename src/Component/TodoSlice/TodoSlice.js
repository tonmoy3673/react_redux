import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodo=createAsyncThunk(('todo/fetchTodo',async()=>{
    const res=await axios.get('https://jsonplaceholder.typicode.com/todos');
    return res.data
}))

export const TodoSlice=createSlice({
    name:'todo',
    initialState:{
        isLoading:true,
        todo:[],
        error:null
    },

    extraReducers:builder=>{
        builder.addCase(fetchTodo.pending,(state)=>{
            state.isLoading=true;
            state.todo=[];
            state.error=null;
        })
    }

});
