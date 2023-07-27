import { applyMiddleware, createStore } from "redux";
import Reducer from "../Reducer";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../CounterSlice";

export const  store=createStore(Reducer,applyMiddleware(thunk));
export const myStore=configureStore({
    reducer:{
        count:CounterSlice
    }
})