import express from "express";
import cors from "cors";
import { ENV_VAR } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import { AuthRouter } from "./routes/auth.route.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ENV_VAR.CORS_ORIGIN,
    credentials: true,
  })
);

app.use("/api/auth", AuthRouter);

app.listen(ENV_VAR.PORT, () => {
  console.log("server is running on PORT:" + ENV_VAR.PORT);
  connectDB();
});
