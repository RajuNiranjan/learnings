import "./config/db.js";
import express from "express";
import { ENV_VAR } from "./utils/env_var.js";
import { ApolloServer } from "@apollo/server";
import http from "http";
import cors from "cors";
import { todoResolver } from "./resolvers/todo.resolver.js";
import { todoTypeDef } from "./typeDefs/todo.typeDef.js";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@apollo/server/express4";

const app = express();

const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs: todoTypeDef,
  resolvers: todoResolver,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.get("/", (req, res) =>
  res.status(200).json({ message: "welcome to graphql" })
);

app.use(express.json());

app.use(
  cors({
    origin: ENV_VAR.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  "/graphql",
  expressMiddleware(server, {
    context: async ({ req, res }) => ({ req, res }),
  })
);

await new Promise((resolve) => {
  httpServer.listen({ port: ENV_VAR.PORT }, resolve);
});

console.log(`server ready at ${ENV_VAR.PORT}`);
