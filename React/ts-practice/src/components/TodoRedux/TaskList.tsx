
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux_store/store'
import { deleteTask, toggleTask } from '../../redux_store/actions/todo.slice'

export const TaskList = () => {

    const dispatch = useDispatch()
    
    const {todos} = useSelector((state:RootState) => state.todo)

    
    const handleDeleteTask = (id:number) =>{
        dispatch(deleteTask(id))
    }

    const handleToggleTask = (id:number) =>{
        
        dispatch(toggleTask(id))
    }


  return (
    <div>
      {
        todos.map((task, idx) => <div key={idx} className='flex items-center gap-2'>
            <div>
                <input type="checkbox" onChange={() => handleToggleTask(task.id)} checked={task.isCompleted} />
            </div>
            <div className={`${task.isCompleted && "line-through"}`}> 
                {task.title}</div>
            <div>
                <button onClick={() => handleDeleteTask(task.id)} className='bg-red-500 text-white p-2 rounded-md'>Delete</button>
            </div>
        </div>
      )
      }
    </div>
  )
}
