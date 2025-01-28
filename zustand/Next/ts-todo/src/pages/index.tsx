import React from 'react'
import { TodoInput } from '../components/TodoInput'
import { TodoList } from '../components/TodoList'


const TodoScreen = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default TodoScreen
