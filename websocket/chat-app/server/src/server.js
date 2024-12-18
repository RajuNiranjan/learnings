import express from "express";
import "./lib/db.js";
import cors from "cors";
import { ENV_VAR } from "./lib/utils.js";
import { AuthRoute } from "./routes/user.route.js";

const app = express();

app.use(
  cors({
    origin: ENV_VAR.CORS_ORIGIN,
  })
);

app.use(express.json());

app.get("/", (req, res) =>
  res.status(200).json({ message: "Welcome to chat app" })
);

app.use("/api/auth", AuthRoute);

app.listen(ENV_VAR.PORT, () =>
  console.log(`server is running at port no: ${ENV_VAR.PORT}`)
);
