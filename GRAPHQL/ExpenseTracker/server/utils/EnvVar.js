import dotenv from "dotenv";
dotenv.config();

export const ENV_VAR = {
  DB_URI: process.env.DB_URI,
  PORT: process.env.PORT,
  CORS_ORIGIN: process.env.CORS_ORIGIN,
  SECRET_KEY: process.env.SECRET_KEY,
  EXPIRES_IN: process.env.EXPIRES_IN,
};
