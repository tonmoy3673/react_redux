import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice=createSlice({
    name:'todo',
    initialState:{
        isLoading:false,
        todo:[],
        error:null
    },
    
})