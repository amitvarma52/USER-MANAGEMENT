// import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchTodo } from '../Redux-toolkit/Slice/todoSlice'
const Todo = () => {
    const dispatch =useDispatch()
    const todoState=useSelector((state)=>state.todo)
    console.log("result of api ",todoState)
    if(todoState.isLoading){
        return <h1>Loading</h1>
    }
  return (<>
    <button onClick={()=>dispatch(fetchTodo())}>fetch todo</button>
    <ul>
        {todoState.data.map(e=><li key={e.name}>{e.name}</li>)}
    </ul>
    </>
  )
}

export default Todo