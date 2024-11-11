import express from "express";
import http from "http";
import cors from "cors";
import "./config/db.js";
import { ENV_VAR } from "./utils/env_var.js";
import { MergeTypeDefs } from "./typeDefs/index.js";
import { MergeResolvers } from "./resolvers/index.js";

// Apollo server
import { ApolloServer } from "@apollo/server";
import { buildContext } from "graphql-passport";
import connectMongoDB from "connect-mongodb-session";
import passport from "passport";
import session from "express-session";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

const app = express();
const httpServer = http.createServer(app);

const MongoDBStore = connectMongoDB(session);
const store = new MongoDBStore({
  uri: ENV_VAR.DB_URI,
  collection: "sessions",
});

store.on("error", (e) => console.error("Session store error:", e));

app.use(
  session({
    secret: ENV_VAR.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

const server = new ApolloServer({
  typeDefs: MergeTypeDefs,
  resolvers: MergeResolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
  "/graphql",
  cors({
    origin: ENV_VAR.CORS_ORIGIN,
    credentials: true,
  }),
  express.json(),
  expressMiddleware(server, {
    context: async ({ req, res }) => buildContext({ req, res }),
  })
);

httpServer.listen(ENV_VAR.PORT, () => {
  console.log(`Server ready at http://localhost:${ENV_VAR.PORT}/graphql`);
});
