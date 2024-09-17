export const userTypeDef = `#graphql 

type User{
    _id:ID! 
    username:String!
    name:String!
    password:String!
    profilePicture:String!
    gender:String!
}

type Query{
    user(userId:ID!):User
    authUser:User
}

type Mutation{
    signUp(input:SignUpInput):User 
    login(input:LogInInput):User
    logout: LogoutResponse
}

input SignUpInput{
    username:String!
    name:String!
    password:String!
    profilePicture:String!
    gender:String!
}

input LogInInput{
    useername:String!
    password:!
}

`