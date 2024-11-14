import mongoose from "mongoose";
import { ENV_VAR } from "../utils/env_var.js";

const ConnectDB = async () => {
  try {
    if (ENV_VAR.DB_URI) {
      await mongoose
        .connect(ENV_VAR.DB_URI)
        .then(() => console.log("server connected to data base"))
        .catch((error) => console.log(error));
    } else {
      console.log("Invalid data base uri");
    }
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

ConnectDB();
