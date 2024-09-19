import express from 'express'
import dotenv from 'dotenv'
import http from 'http'
import session from 'express-session'
import MongoDBSession from 'connect-mongodb-session'
import passport from 'passport'
import cors from 'cors'
import { ApolloServer } from '@apollo/server';
import { MergeResolvers } from './resolvers/index.js'
import { MergerTypeDefs } from './typeDefs/index.js'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { expressMiddleware } from '@apollo/server/express4'
import { buildContext } from 'graphql-passport'
import './db/connnectDB.js'

dotenv.config()

const app = express()

const httpServer = http.createServer(app)

const MongoDBStorage = MongoDBSession(session)

const store = new MongoDBStorage({
    uri: process.env.DB_URI,
    collection: "session"
})

store.on("error", (e) => console.log(e))

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        store: store,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            httpOnly: true
        }
    })
)

app.use(passport.initialize())
app.use(passport.session())

const server = new ApolloServer({
    typeDefs: MergerTypeDefs,
    resolvers: MergeResolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
})

await server.start();

app.use(
    '/graphql',
    cors({
        origin: "http://localhost:3000",
        credentials: true
    }),
    express.json(),
    expressMiddleware(server, { // Pass server instead of session
        context: async ({ req, res }) => buildContext({ req, res })
    })
);

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve))
console.log("server running at port 4000");