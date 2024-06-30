import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchTodo=createAsyncThunk('todos/fetchTodo',async()=>{
    const response=await fetch('http://localhost:8000/api/v1/user/data/allUsers')
    return response.json()
})
const todoSlice=createSlice({
    name:'todo',
    initialState:{
        isLoading:false,
        data:[],
        error:null
    },
    extraReducers:(builder=>{
        builder.addCase(fetchTodo.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(fetchTodo.fulfilled,(state,action)=>{
            state.isLoading=false
            state.data= action.payload
        })
        .addCase(fetchTodo.rejected,(state,action)=>{
            state.isLoading=true
            state.error=action.error.message
        })
    })
})
export default todoSlice.reducer