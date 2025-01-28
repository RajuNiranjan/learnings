import { create } from 'zustand'


type Task ={
    id: number
    title:string
    completed:boolean

}

type TodoType ={
    todos: Task[]
    addTask: (title: string) => void
    removeTask: (id:number) => void
    toggleTask:(id:number) => void
}

export const useTodoState = create<TodoType>( (set) => ({
    todos: [],

    addTask: (title:string) => set((state) => ({
        todos: [...state.todos, {id: Date.now(), title, completed: false}]
    })),

    
    removeTask: (id:number) => set((state) => ({
        todos: state.todos.filter((task) => task.id !== id)
    })),



    toggleTask: (id:number) => set((state) => ({
        todos: state.todos.map((task) => task.id === id ? {...task, completed: true} : task)
    })),
}))