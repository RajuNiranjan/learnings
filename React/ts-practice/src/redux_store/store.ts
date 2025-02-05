import {combineReducers, configureStore} from '@reduxjs/toolkit'
import TodoReducer from './actions/todo.slice'

const RootReducer = combineReducers({
todo: TodoReducer
})

export const store = configureStore({
    reducer:RootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch