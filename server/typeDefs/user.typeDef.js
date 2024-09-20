export const userTypeDef = `#graphql

type User {
  _id:ID!
  username:String!
  password:String!
  name:String!
  gender:String!
  profilePicture:String
}

type Query{
  authUser:User
  user(userId:ID!):User
}

type Mutation{
  signUp(input:SignUpInput!):User
  login(input:LoginInput!):User
  logout:LogoutResponse
}

input SignUpInput{
  username:String!
  password:String!
  name:String!
  gender:String!
}


input LoginInput{
  username:String!
  password:String!
}

type LogoutResponse{
  message:String!
}

`;
