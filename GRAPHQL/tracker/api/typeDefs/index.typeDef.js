import { mergeTypeDefs } from "@graphql-tools/merge";

// typeDefs
import { userTypeDef } from "./user.typeDef.js";

export const MergedTypeDef = mergeTypeDefs([userTypeDef]);
