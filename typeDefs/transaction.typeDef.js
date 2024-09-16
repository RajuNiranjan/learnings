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
    CrateTransaction(input:CreateTransactionInput):Transaction
    UpdateTransaction(input:UpdateTransactionInput):Transaction
    DeleteTransaction(transactionId:ID!):Transaction
}

input CreateTransactionInput{
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

`