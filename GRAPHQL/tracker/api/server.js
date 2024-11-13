import express from "express";
import cors from "cors";
import http from "http";
import connectMongo from "connect-mongodb-session";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import session from "express-session";
import passport from "passport";
import { EVN_VAR } from "./utils/env_var.js";
import { buildContext } from "graphql-passport";
import "./config/db.js";
import { MergeTypeDef } from "./typeDefs/index.js";
import { MergeResolvers } from "./resolvers/index.js";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { passportConfig } from "./config/passport.config.js";
const app = express();
const httpServer = http.createServer(app);
passportConfig();
const MongoStore = connectMongo(session);

const store = new MongoStore({
  uri: EVN_VAR.DB_URI,
  collection: "sessions",
});

store.on("error", (error) => console.log(error));

app.use(
  session({
    secret: EVN_VAR.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
      maxAge: 1000 * 60 * 24 * 2,
      httpOnly: true,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

const server = new ApolloServer({
  typeDefs: MergeTypeDef,
  resolvers: MergeResolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
  "/graphql",
  express.json(),
  cors({
    origin: EVN_VAR.CORS_ORIGIN,
    httpOnly: true,
    credentials: true,
  }),
  expressMiddleware(server, {
    context: async ({ req, res }) => buildContext({ req, res }),
  })
);

await new Promise((resolve) => httpServer.listen(EVN_VAR.PORT, resolve));
console.log(`🚀 Server ready at http://localhost:${EVN_VAR.PORT}/graphql`);
