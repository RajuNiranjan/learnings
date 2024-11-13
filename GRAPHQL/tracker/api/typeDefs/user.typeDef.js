export const userTypeDef = `#graphql 

type User{
    _id: ID!
    username: String!
    name: String!
    password: String!
    gender: String!
    profilePicture: String!
}

type Query{
    authUser: User
    user(userId: ID!): User
}

type Mutation {
    signUp(input: SignUpInput!): User
    login(input: LoginInput!): User
    logout: LogoutResponse
}

type LogoutResponse{
    message: String!
}

input SignUpInput{
    username: String!
    name: String!
    password: String!
    gender: String!
    profilePicture: String!
}

input LoginInput{
    username: String!
    password: String!
}

`;
