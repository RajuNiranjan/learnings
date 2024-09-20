export const transactionTypeDef = `#graphql

type Transaction{
_id:ID!
userId:ID!
paymentType:String!
amount:Float!
category:String!
description:String!
date:String!
location:String
}

type Query{
  transactions:[Transaction!]
  transaction(transactionId:ID!):Transaction
}

type Mutation{
  crateTransaction(input:CreateTransactionInput!):Transaction!
  updateTransaction(input:UpdateTransactionInput!):Transaction!
  deleteTransaction(transactionId:ID!):Transaction
}

input CreateTransactionInput{
 paymentType:String!
amount:Float!
category:String!
description:String!
date:String!
location:String 
}

input UpdateTransactionInput{
 paymentType:String
amount:Float
category:String
description:String
date:String
location:String 
}


`;
