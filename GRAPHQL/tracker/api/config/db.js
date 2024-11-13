import mongoose from "mongoose";
import { EVN_VAR } from "../utils/env_var.js";

const ConnectDB = async () => {
  try {
    const { DB_URI } = EVN_VAR;
    if (DB_URI) {
      await mongoose
        .connect(DB_URI)
        .then(() => console.log("server connected to data base"))
        .catch((error) => console.log(error));
    } else {
      console.log("Invalid DB Uri");
    }
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

ConnectDB();
