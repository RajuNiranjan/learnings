import { mergeTypeDefs } from "@graphql-tools/merge";

// typeDefs

import { TransactionTypeDef } from "./transaction.typeDef.js";
import { userTypeDef } from "./user.typeDef.js";

export const MergedTypeDefs = mergeTypeDefs([userTypeDef, TransactionTypeDef]);
