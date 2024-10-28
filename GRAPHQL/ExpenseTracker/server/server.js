import { ApolloServer } from "@apollo/server";
import http from "http";
import cors from "cors";
import express from "express";
import "./config/db.js";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { ENV_VAR } from "./utils/EnvVar.js";
import { expressMiddleware } from "@apollo/server/express4";
import { MergeResolvers } from "./resolvers/index.js";
import { MergeTypeDefs } from "./typeDefs/index.js";

const app = express();

const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs: MergeTypeDefs,
  resolvers: MergeResolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
  "/graphql",
  express.json(),
  cors({
    origin: ENV_VAR.CORS_ORIGIN,
    credentials: true,
  }),
  expressMiddleware(server, {
    context: async (req, res) => (req, res),
  })
);

await new Promise((resolve) => {
  httpServer.listen(ENV_VAR.PORT, resolve); // Changed here
});

console.log(`🚀 Server ready at http://localhost:${ENV_VAR.PORT}/`);
