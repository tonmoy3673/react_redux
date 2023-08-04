import { applyMiddleware, createStore } from "redux";
import TodoReducer from "../TodoReducer";
import thunk from "redux-thunk";

export const store=createStore(TodoReducer,applyMiddleware(thunk));