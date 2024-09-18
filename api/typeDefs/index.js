import { mergeTypeDefs } from "@graphql-tools/merge"
import { transactionTypeDef } from './transaction.typeDef.js'
import { userTypeDef } from './user.typeDef.js'

export const MergerTypeDefs = mergeTypeDefs([userTypeDef, transactionTypeDef])