export const todoTypeDef = `#graphql

type Todo {
    _id: ID!
    task: String!
    isChecked: Boolean!
}

type Query {
    getTodo: [Todo]
}

type Mutation {
    createTask(input: CreateTaskInput!): Todo
    updateTask(input: UpdateTaskInput!): Todo
    isChecked(taskId: ID!):Todo
    deleteTask(taskId: ID!): Todo
}

input CreateTaskInput {
    task: String!
    isChecked: Boolean! = false
}

input UpdateTaskInput {
    taskId: ID!
    task: String!
    isChecked: Boolean!
}

type DeleteResponse {
    message: String
}
`;
