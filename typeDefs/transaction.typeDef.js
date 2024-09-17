export const transactionTypeDef = `#graphql 

type Transaction{
    _id:ID!
    userID:ID!
    description:String!
    paymentType:String!
    amount:Float!
    date:String!
    category:String!
    location:String
}

type Query{
    transaction(transactionId:ID!):Transaction
    transactions:Transaction
}

type Mutation{
    createTransaction(input:CreateTransactionInput):Transaction
    updateTransaction(input:UpdateTransactionInput):Transaction
    deleteTransaction(transactionId:ID!):Transaction
}

input CreateTransactionInput{
    description:String!
    paymentType:String!
    amount:Float!
    date:String!
    category:String!
    location:String
}

input UpdateTransactionInput{
    description:String
    paymentType:String
    amount:Float
    date:String
    category:String
    location:String
}

`