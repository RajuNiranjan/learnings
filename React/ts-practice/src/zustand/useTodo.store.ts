import {create} from 'zustand'

type Task ={
    id: number;
    title: string;
    isCompleted: boolean;
}

 type TodoState ={   
    todos: Task[];
    addTask: (title: string) => void;
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;
}

const useTodoStore = create<TodoState>((set) =>{

    return {
        todos: [],
        addTask: (title) => {
            set((state)     => ({...state, todos:[...state.todos, {id: Date.now(), title, isCompleted: false}]}))
        },
        toggleTask: (id) => {
            set((state) => ({...state, todos: state.todos.map((task) => task.id === id ? {...task, isCompleted: !task.isCompleted} : task)}))
        },
        deleteTask: (id) => {
           set((state) => ({...state, todos: state.todos.filter((task) => task.id !== id)}))
        },
    }
})

export default useTodoStore
