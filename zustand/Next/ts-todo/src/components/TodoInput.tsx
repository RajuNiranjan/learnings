import React, { useRef } from 'react'
import { useTodoState } from '@/store/useTodoStore'

export const TodoInput = () => {
  const {addTask} = useTodoState()
  const inputRef = useRef<HTMLInputElement>(null)


  const handleAddTask = () => { 
    if (inputRef.current?.value) {
      addTask(inputRef.current.value)
      inputRef.current.value = ''
    }
  }

  return (
    <div>
      <input className='border border-gray-300 rounded-md p-2' type="text" placeholder="Add a task" ref={inputRef} />
      <button className='bg-blue-500 text-white p-2 rounded-md' onClick={handleAddTask}>Add</button>
    </div>
  )
        }
