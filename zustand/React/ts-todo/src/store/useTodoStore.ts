import {create} from 'zustand'

type Task = {
    task: string
    id: number
    completed: boolean
}

type TodoType ={
    todos: Task[]
    addTodo: (task:string) => void
    removeTodo: (id:number) => void
    toggleTodo: (id:number) => void
}

export const useTodoStore = create<TodoType>((set ) =>({
    todos: [],
  addTodo: (task) => set((state) => ({
    todos: [...state.todos, {task, id: Date.now(), completed: false}]
  })),

  removeTodo: (id) => set((state) => ({
    todos: state.todos.filter((task) => task.id !== id)
  })),

  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map((task) => task.id === id ? {...task, completed: !task.completed} : task)
  }))
}))

/**
 



 */