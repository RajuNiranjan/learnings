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
    transactions:Transaction
    transaction(transactionId:ID!):Transaction
}

type Mutation{
    createTransaction(input:CreateTransactionInput):Transaction
    updateTransaction(input:UpdateTransactionInput):Transaction
    deleteTransaction(transactionId:ID!):Transaction
}

input CreateTransactionInput{
     userId:ID!
    paymentType:String!
    amount:Float!
    category:String!
    description:String!
    date:String!
    location:String
}

input UpdateTransactionInput{
     userId:ID
    paymentType:String
    amount:Float
    category:String
    description:String
    date:String
    location:String
}

`