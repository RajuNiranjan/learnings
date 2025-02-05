export interface Task {
    id: number
    title: string
    isCompleted: boolean
}

export interface TodoState {
    todos: Task[]
}