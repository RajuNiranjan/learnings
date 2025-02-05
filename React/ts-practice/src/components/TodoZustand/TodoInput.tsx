import  { FormEvent, useState } from 'react'
import useTodoStore from '../../zustand/useTodo.store'

export const TodoInput = () => {
const {addTask} = useTodoStore()
    const [todo, setTodo] = useState('')

    const handleAddTask = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        
        addTask(todo)
        setTodo('')
    }

  return (
    <div>
      <form onSubmit={handleAddTask}>
        <input type="text" placeholder='Add a task' value={todo} onChange={(e) => setTodo(e.target.value)} className='border border-gray-300 rounded-md p-2' />
        <button type='submit' className='bg-blue-500 text-white p-2 rounded-md'>Add</button>
      </form>
    </div>
  )
}

