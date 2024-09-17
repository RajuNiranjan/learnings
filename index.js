import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import http from 'http'
import { ApolloServer } from '@apollo/server'
import { MergeResolvers } from "./resolvers/index.js"
import { MergeTypeDefs } from './typeDefs/index.js'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { expressMiddleware } from '@apollo/server/express4'
import './db/connectDB.js'
import session from 'express-session'
import passport from 'passport'
import connectMongo from 'connect-mongodb-session'
import { buildContext } from 'graphql-passport'
import { configurePassport } from './passport/passport.config.js'

dotenv.config()
configurePassport()

const app = express()

const httpServer = http.createServer(app)

const MongoDBStore = connectMongo(session)

const store = new MongoDBStore({
    uri: process.env.DB_URI,
    collection: "session"
})

store.on('error', (e) => console.log(e))

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    },
    store: store
}))

app.use(passport.initialize())
app.use(passport.session())

const server = new ApolloServer({
    typeDefs: MergeTypeDefs,
    resolvers: MergeResolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
})

await server.start()

app.use('/',
    cors({
        origin: "http://localhost:3000",
        credentials: true
    }),
    express.json(),
    expressMiddleware(server, {
        context: async ({ req }) => buildContext({ req })
    }
    ))

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve))
console.log(`sercer ready at 4000`);