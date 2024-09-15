export const transactionTypeDef = `#graphql 

type Transaction{
  _id:ID!
  description:String!
  paymentType:String!
  category:String!
  amount:Float!
  date:String!
  location:String
}

type Query{
  transactions:[Transaction]
  transaction(transactionId:ID!):Transaction
}

type Mutation{
  createTransaction(input: CrateTransactionInput):Transaction
  updateTransaction(input: UpdateTransactionInput):Transaction
  deleteTransaction(transactionId:ID!):Transaction
}

input CrateTransactionInput{
  description:String!
  paymentType:String!
  category:String!
  amount:Float!
  date:String!
  location:String
}

input UpdateTransactionInput{
  description:String
  paymentType:String
  category:String
  amount:Float
  date:String
  location:String
}

`;
