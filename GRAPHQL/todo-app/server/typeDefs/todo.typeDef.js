export const todoTypeDef = `#graphql 

type Todo {
  _id: ID!
  task: String!
  isChecked: Boolean!
}

type Query {
  getTodos: [Todo]
}

type Mutation {
  addTodo(input: AddTodo!): Todo
  updateTodo(input: UpdateTodo!): Todo
  deleteTodo(taskId: ID!): Todo
}

input AddTodo {
  task: String!
  isChecked: Boolean = false
}

input UpdateTodo {
  _id: ID!
  task: String!
  isChecked: Boolean!
}
`;
