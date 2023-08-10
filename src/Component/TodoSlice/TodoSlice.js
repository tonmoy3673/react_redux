import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchTodo=createAsyncThunk('todo/fetchTodo',async()=>{
    const res=await axios.get()
})

export const TodoSlice=createSlice({
    name:'todo',
    initialState:{
        isLoading:false,
        todo:[],
        error:null
    },
    extraReducers:(builder)=>{

    }
})