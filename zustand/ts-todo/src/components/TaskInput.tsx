import React, { useState } from 'react'
import { useTodoStore } from '../store/useTodoStore'

export const TaskInput = () => {

    const {addTodo} = useTodoStore()
    const [task, setTask] = useState('')
    const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addTodo(task)
        setTask('')
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value)
    }       

  return (
    <div className='flex justify-center items-center'>
        <form className='flex gap-2' onSubmit={handleAddTodo}>
            <input value={task} onChange={handleChange} className='bg-gray-700 p-2 rounded-md' type="text" placeholder='Add a task' />
            <button type='submit' className='bg-blue-500 p-2 rounded-md'>Add</button>
        </form>
    </div>
  )
}


