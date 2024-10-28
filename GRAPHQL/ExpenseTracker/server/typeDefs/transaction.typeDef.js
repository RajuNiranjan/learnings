export const transactionTypeDef = `#graphql 

type Transaction {
    _id: ID!
    userId: ID!
    description: String!
    paymentType: String!
    category: String!
    amount: Float!
    date: String!
    location: String
}

type Query{
    transactions: [Transaction!]!
    transaction(transactionId: ID!):Transaction
}

type Mutation{
    createTransaction(input: CreateTransactionInput!):Transaction!
    updateTransaction(input: UpdateTransactionInput!):Transaction!
    deleteTransaction(transactionId: ID!):Transaction
}

input CreateTransactionInput{
     userId: ID!
    description: String!
    paymentType: String!
    category: String!
    amount: Float!
    date: String!
    location: String
}

input UpdateTransactionInput{
     userId: ID
    description: String
    paymentType: String
    category: String
    amount: Float
    date: String
    location: String
}

`;
