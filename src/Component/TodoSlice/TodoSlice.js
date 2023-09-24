import { createSlice } from "@reduxjs/toolkit";


export const TodoSlice=createSlice({
    name:'todo',
    initialState:{
        isLoading:true,
        todo:[],
        error:null
    }

});