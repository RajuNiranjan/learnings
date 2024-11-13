import dotenv from "dotenv";
dotenv.config();

export const EVN_VAR = {
  DB_URI: process.env.DB_URI,
  PORT: process.env.PORT,
  CORS_ORIGIN: process.env.CORS_ORIGIN,
  SESSION_SECRET: process.env.SESSION_SECRET,
};
