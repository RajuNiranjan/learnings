import { mergeInputType } from "@graphql-tools/merge";

// typeDefs
import { transactionTypeDef } from "./transaction.typeDef.js";
import { userTypeDef } from "./user.typeDef.js";

export const mergedTypeDefs = mergeInputType([userTypeDef, transactionTypeDef]);
