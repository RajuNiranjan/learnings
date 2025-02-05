import  { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../redux_store/actions/todo.slice'
const TaskInput = () => {
    const dispatch = useDispatch()

    const [task, setTask] = useState("")

    const handleAddTask = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(addTask(task))
        setTask("")
    }

  return (
    <div>
      <form onSubmit={handleAddTask} className='space-x-2'>
        <input type="text" placeholder='enter task' value={task} onChange={(e)=> setTask(e.target.value)}  className='border p-2 rounded-md'/>
        <button type='submit' className='bg-blue-500 text-white p-2 rounded-md'>Add</button>
      </form>
    </div>
  )
}

export default TaskInput
