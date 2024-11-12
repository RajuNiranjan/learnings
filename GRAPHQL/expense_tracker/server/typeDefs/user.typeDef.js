export const userTypeDef = `#graphql 


type User {
    _id: ID!
    username: String!
    name: String!
    password: String!
    profilePicture: String!
    gender: String!
}

type Query{
    users: [User]!
    authUser: User
    user(userId: ID!): User
}

type Mutation{
    signUp(input: signUpInput!): User
    login(input: loginInput!): User
    logout: LogOutResponse
}


input signUpInput{
    username: String!
    name: String!
    password: String!
    gender: String!
}


input loginInput{
    username: String!
    password: String!
}

type LogOutResponse{
    message: String!
}

`;
