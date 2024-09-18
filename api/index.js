import express from 'express'
import http from 'http'
import session from 'express-session'
import connectMongo from 'connect-mongodb-session'
import passport from 'passport'
import { ApolloServer } from '@apollo/server'
import dotenv from 'dotenv'
import cors from 'cors'
import './db/connectDB.js'
import { configurePassport } from './passport/passport.config.js'
import { expressMiddleware } from '@apollo/server/express4'
import { buildContext } from 'graphql-passport'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { MergeResolvers } from './resolvers/index.js'
import { MergerTypeDefs } from './typeDefs/index.js'


dotenv.config()
configurePassport()

const app = express()

const httpServer = http.createServer(app)

const MongoStore = connectMongo(session)

const store = new MongoStore({
    uri: process.env.DB_URI,
    collection: "session"
})

store.on("error", (e) => console.log(e))

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
    typeDefs: MergerTypeDefs,
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
        context: async (req, res) => buildContext({ req, res })
    })
)

await new Promise((resolve) => ({ port: 4000 }, resolve))

console.log(`server runnig at port 4000`);