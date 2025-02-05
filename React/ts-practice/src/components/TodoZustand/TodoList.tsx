
import useTodoStore from '../../zustand/useTodo.store'

export const TodoList = () => {

    const {todos, deleteTask, toggleTask} = useTodoStore()

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} >
            <input type="checkbox" checked={todo.isCompleted} onChange={() => toggleTask(todo.id)} />
            <span  className={todo.isCompleted ? 'line-through' : ''}>{todo.title}</span>
            <button className='bg-red-500 text-white p-2 rounded-md' onClick={() => deleteTask(todo.id)}>Delete</button>
            
        </div>
      ))}
    </div>
  )
}
