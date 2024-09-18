export const userTypeDef = `#graphql 

type User{
    _id:ID! 
    username:String!
    name:String!
    password:String!
    gender:String!
    profilePicture:String
}

type Query{
    authUser:User,
    user(userId:ID!):User 
}

type Mutation {
    signUp(input:SignUpInput):User 
    login(input:LogInInput):User 
    logout:LogoutResponse
}

input SignUpInput{
        username:String!
    name:String!
    password:String!
    gender:String!
    profilePicture:String
}

input LogInInput{
    username:String!
    password:String!
}

type LogoutResponse{
    message:String!
}

`