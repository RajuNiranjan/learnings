import express from "express";
import http from "http";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import cors from "cors";
import { MergeResolvers } from "./resolvers/index.js";
import { MergeTypeDefs } from "./typeDefs/index.js";
import { expressMiddleware } from "@apollo/server/express4";
import './db/connectDB.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs: MergeTypeDefs,
  resolvers: MergeResolvers,
});

await server.start();

app.use(
  "/",
  cors(),
  express.json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  })
);

await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));

console.log(`🚀 Server ready at http://localhost:4000/`);
