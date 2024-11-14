import express from "express";
import http from "http";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import connectDB from "connect-mongodb-session";
import { ApolloServer } from "@apollo/server";
import { ENV_VAR } from "./utils/env_var.js";
import { passportConfig } from "./config/passport.config.js";
import { expressMiddleware } from "@apollo/server/express4";
import { MergedTypeDef } from "./typeDefs/index.typeDef.js";
import { MergedResolver } from "./resolvers/index.resolver.js";
import { buildContext } from "graphql-passport";
import "./config/db.config.js";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

passportConfig();

const app = express();
const httpServer = http.createServer(app);

const MongoStore = connectDB(session);

const store = new MongoStore({
  uri: ENV_VAR.DB_URI,
  collection: "sessions",
});

store.on("error", (error) => console.log(error));

app.use(
  session({
    secret: ENV_VAR.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
      maxAge: 1000 * 60 * 24 * 2,
      httpOnly: true,
    },
  })
);

const server = new ApolloServer({
  typeDefs: MergedTypeDef,
  resolvers: MergedResolver,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(passport.initialize());
app.use(passport.session());

app.use(
  "/graphql",
  cors({
    origin: ENV_VAR.CORS_ORIGIN || "http://localhost:3000",
    httpOnly: true,
  }),
  express.json(),
  expressMiddleware(server, {
    context: ({ req, res }) => buildContext({ req, res }),
  })
);

const PORT = ENV_VAR.PORT;
httpServer.listen(PORT, () => console.log(`server is running port no ${PORT}`));
