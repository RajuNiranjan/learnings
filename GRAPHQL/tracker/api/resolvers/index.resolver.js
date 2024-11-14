import { mergeResolvers } from "@graphql-tools/merge";

// resolvers
import { userResolver } from "./user.resolver.js";

export const MergedResolver = mergeResolvers([userResolver]);
