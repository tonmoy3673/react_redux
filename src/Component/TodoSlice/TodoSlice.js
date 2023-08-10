import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchTodo=createAsyncThunk('todo/fetchTodo',async()=>{
    const res=await axios.get('https://jsonplaceholder.typicode.com/todos')
    return res.data
})

export const TodoSlice=createSlice({
    name:'todo',
    initialState:{
        isLoading:false,
        todo:[],
        error:null
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchTodo.pending,(state)=>{
            state.isLoading=true;
            state.todo=[];
            state.error=null

        });
        builder.addCase(fetchTodo.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.todo=action.payload;
            state.error=null

        });
        builder.addCase(fetchTodo.rejected,(state,action)=>{
            state.isLoading=false;
            state.todo=[];
            state.error=action.error.message

        });
    }
});

export default TodoSlice.reducer;