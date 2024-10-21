import express from "express";
import { ApolloServer } from "@apollo/server";
import "./config/db.js";
import cors from "cors";
import { todoTypeDef } from "./typeDefs/todo.typeDef.js";
import { todoResolver } from "./resolvers/todo.resolver.js";
import { ENV_VAR } from "./utils/env_var.js";
import { expressMiddleware } from "@apollo/server/express4";

const app = express();

const { PORT, CORS_ORIGIN } = ENV_VAR;

app.use(
  cors({
    origin: CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());

const server = new ApolloServer({
  typeDefs: todoTypeDef,
  resolvers: todoResolver,
});

await server.start();

app.use("/graphql", expressMiddleware(server));

app.listen(PORT, () => console.log(`server running at port no ${PORT}`));
