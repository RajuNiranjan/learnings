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

dotenv.config()

const app = express()

const httpServer = http.createServer(app)

const server = new ApolloServer({
    typeDefs: MergeTypeDefs,
    resolvers: MergeResolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
})

await server.start()

app.use('/',
    cors(),
    express.json(),
    expressMiddleware(server, {
        context: async ({ req }) => ({ token: req.headers.token })
    }
    ))

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve))
console.log(`sercer ready at 4000`);