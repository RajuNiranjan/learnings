import { mergeResolvers } from "@graphql-tools/merge";
import { userResolver } from "./user.resolver.js";

export const MergerResolvers = mergeResolvers([userResolver]);
