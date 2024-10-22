import { gql } from "@apollo/client";

export const GET_TODO = gql`
  query GetTodo {
    getTodo {
      _id
      task
      isChecked
    }
  }
`;

export const CREATE_TASK = gql`
  mutation CreateTask($input: CreateTaskInput!) {
    createTask(input: $input) {
      _id
      task
      isChecked
    }
  }
`;

export const DELETE_TASK = gql`
  mutation DeleteTask($taskId: ID!) {
    deleteTask(taskId: $taskId) {
      _id
    }
  }
`;
export const TOGGLE_CHECKED = gql`
  mutation ToggleChecked($taskId: ID!) {
    isChecked(taskId: $taskId) {
      _id
      task
      isChecked
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation UpdateTask($input: UpdateTaskInput!) {
    updateTask(input: $input) {
      _id
      task
      isChecked
    }
  }
`;
