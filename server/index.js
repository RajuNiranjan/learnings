import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";
import http from "http";
import { ApolloServer } from "@apollo/server";
import connectMongo from "connect-mongodb-session";
import { MergerResolvers } from "./resolvers/index.js";
import { MergeTypeDefs } from "./typeDefs/index.js";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import "./db/connectDB.js";
import { expressMiddleware } from "@apollo/server/express4";

dotenv.config();

const app = express();

const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs: MergeTypeDefs,
  resolvers: MergerResolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
  "/graphql",
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
  express.json(),
  expressMiddleware(server, {
    context: async ({ req, res }) => ({ req, res }),
  })
);

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));

console.log(`🚀 Server ready at http://localhost:4000/`);
