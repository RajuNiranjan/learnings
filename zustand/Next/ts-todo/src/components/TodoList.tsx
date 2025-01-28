import { useTodoState } from "@/store/useTodoStore"

export const TodoList = () => {
    const {todos, removeTask, toggleTask} = useTodoState()
    return (
        <div className="flex flex-col gap-2">
            {todos.map((todo) => <div key={todo.id} className="flex items-center justify-between">
                <input type="checkbox" checked={todo.completed} onChange={() => toggleTask(todo.id)} />
                <h1 className="text-2xl font-bold" >{todo.title}</h1>
                <button className="bg-red-500 text-white p-2 rounded-md" onClick={() => removeTask(todo.id)}>Delete</button>
                </div>)}
        </div>
    )
}       