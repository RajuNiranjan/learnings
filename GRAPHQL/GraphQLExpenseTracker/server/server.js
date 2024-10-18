import express from "express";
import cors from "cors";
import http from "http";
import "./config/db.js";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@apollo/server/express4";
import { ENV_VAR } from "./utils/env_var.js";

const app = express();

const { PORT } = ENV_VAR;

const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
  "/",
  cors(),
  express.json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({ req }),
  })
);

const { url } = await new Promise((resolve) =>
  httpServer.listen({ port: PORT }, resolve)
);

console.log(`server ready at port ${url}`);
