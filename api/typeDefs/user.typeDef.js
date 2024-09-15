export const userTypeDef = `#graphql

type User{
  _id:ID!
  email:String!
  username:String!
  name:String!
  password:String!
  gender:String!
  profilePicture:String
}

type Query{
  users:[User!]
  authUser:User
  user(userId:ID!):User
}

type Mutation{
  signUp(input: SignUpInput!):User
  LogIn(input: LogInInput!):User
  LogOut:LogOutResponse
}

input SignUpInput{
   email:String!
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

type LogOutResponse{
  message:String!
}

`;
