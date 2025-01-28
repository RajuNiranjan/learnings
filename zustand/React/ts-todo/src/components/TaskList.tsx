
import { useTodoStore } from '../store/useTodoStore'

export const TaskList = () => {
    const {todos,removeTodo,toggleTodo} = useTodoStore()
    console.log("todos",todos)
  return (
    <div className='flex justify-center items-center h-screen'>
      {todos.map((todo) => (
        <div key={todo.id} className='bg-gray-700 p-2 rounded-md flex justify-between items-center'>
          <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
          <h1 className={`${todo.completed ? 'text-green-500' : 'text-white'}`}>{todo.task}</h1>
          <button className='bg-red-500 p-2 rounded-md' onClick={() => removeTodo(todo.id)}>Remove</button>
        </div>
      ))}
    </div>
  )
}


