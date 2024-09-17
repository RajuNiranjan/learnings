export const userTypeDef = `#graphql

type User{
    _id:ID! 
    username:String! 
    name:String!
    email:String!
    password:String!
    profilePicture:String
    gender:String!
}


type Query{
    users:[User]
    user(userId:ID!):User
    authUser:User 
}

type Mutation{
    SingUp(input: SignUpInput!):User
    LogIn(input: LogInInput!):User
    LogOut:LogOutResponse
}

input SignUpInput{
      username:String! 
    name:String!
    email:String!
    password:String!
    profilePicture:String
    gender:String!
}

input LogInInput{
    email:String!
    password:String!
}

type LogOutResponse{
    message:String!
}

`