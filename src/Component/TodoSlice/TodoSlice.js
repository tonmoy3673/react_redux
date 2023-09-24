import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodo=createAsyncThunk(('todo/fetchTodo',async()=>{
    
}))

export const TodoSlice=createSlice({
    name:'todo',
    initialState:{
        isLoading:true,
        todo:[],
        error:null
    },

    extraReducers:builder=>{

    }

});
