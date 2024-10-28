import { mergeResolvers } from "@graphql-tools/merge";
import { userResolve } from "./user.resolver.js";

export const MergeResolvers = mergeResolvers([userResolve]);
