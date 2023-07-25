import axios from "axios";


export const todoAllAction=()=>async(dispatch)=>{
    dispatch({type:'REQUEST'});
   try {
    const res=await axios.get("https://jsonplaceholder.typicode.com/todos")
    dispatch({type:'SHOW',payload:res.data})
   } catch (error) {
    dispatch({type:'FAIL',payload:error.message})
   }

};