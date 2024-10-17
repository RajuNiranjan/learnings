import { ENV_VAR } from "./env_var.js";
import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    const { DB_URI } = ENV_VAR;
    if (DB_URI) {
      await mongoose
        .connect(DB_URI)
        .then(() => console.log("server connected to data base"))
        .catch((e) => console.log(e));
    } else {
      console.log("Invalid Data Base URL");
    }
  } catch (error) {
    console.log("error while connecting to data base", error);
  }
};

ConnectDB();
