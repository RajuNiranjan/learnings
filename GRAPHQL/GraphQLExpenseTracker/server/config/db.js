import mongoose from "mongoose";
import { ENV_VAR } from "../utils/env_var.js";

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
    console.log("while connecting to data base an error occured", error);
  }
};

ConnectDB();
