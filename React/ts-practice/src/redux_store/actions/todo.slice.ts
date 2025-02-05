import { TodoState } from "../types/todo.type";
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState: TodoState ={
    todos:[]
}

const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTask: (state, action: PayloadAction<string>) =>{
            state.todos.push({
                id: Date.now(),
                title: action.payload,
                isCompleted: false
            })
        },
        toggleTask: (state, action: PayloadAction<number>) =>{
            state.todos = state.todos.map((task) => task.id === action.payload ? {...task, isCompleted: !task.isCompleted}: task)
        },
        deleteTask: (state, action: PayloadAction<number>) =>{
            state.todos = state.todos.filter((task) => task.id !== action.payload)
        },
        editTask: (state, action: PayloadAction<{id: number, title: string}>) =>{
            state.todos = state.todos.map((task) => task.id === action.payload.id ? {...task, title: action.payload.title}: task)
        }
    }
})

export const {addTask, toggleTask, deleteTask, editTask} = todoSlice.actions

export default todoSlice.reducer