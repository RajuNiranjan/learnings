import dotenv from 'dotenv'
dotenv.config()

export const ENV_VAR = {
    DB_URI : process.env.DB_URI,
    CORS_ORIGIN: process.env.CORS_ORIGIN,
    PORT: process.env.PORT
}