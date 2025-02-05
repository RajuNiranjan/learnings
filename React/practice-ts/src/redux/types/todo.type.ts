export interface Task {
  id: number;
  title: string;
  isDone: boolean;
}

export interface TodoState {
  todos: Task[];
}
