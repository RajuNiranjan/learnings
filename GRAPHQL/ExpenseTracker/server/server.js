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
import passport from "passport";
import session from "express-session";
import connectMongo from "connect-mongodb-session";
import { buildContext } from "graphql-passport";
import { configurePassport } from "./passport/passport.config.js";

const app = express();
configurePassport();

const httpServer = http.createServer(app);

const MongoStore = connectMongo(session);

const store = new MongoStore({
  uri: ENV_VAR.DB_URI,
  collection: "sessions",
});

store.on("error", (error) => console.log(error));

app.use(
  session({
    secret: ENV_VAR.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    },
    store: store,
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
  express.json(),
  cors({
    origin: ENV_VAR.CORS_ORIGIN,
    credentials: true,
  }),
  expressMiddleware(server, {
    context: async (req, res) => buildContext({ req, res }),
  })
);

await new Promise((resolve) => {
  httpServer.listen(ENV_VAR.PORT, resolve); // Changed here
});

console.log(`🚀 Server ready at http://localhost:${ENV_VAR.PORT}/`);
