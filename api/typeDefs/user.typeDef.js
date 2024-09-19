export const userTypeDef = `#graphql

type User{
    _id:ID!
    username:String!
    name:String!
    password:String!
    profilePicture:String
    gender:String!
}

type Query{
    authUser:User
    user(userId:ID!):User
}

type Mutation{
    signup(input:SignUpInput):User
    login(input:LogInInput):User
    logout:LogOutResponse
}

input SignUpInput{
    username:String!
    name:String!
    password:String!
    profilePicture:String
    gender:String!
}

input LogInInput{
    username:String!
    password:String!
}

type LogOutResponse{
    message:String!
}
`