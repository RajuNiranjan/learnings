import { ENV_VAR } from "../utils/EnvVar.js";
import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    const { DB_URI } = ENV_VAR;
    if (DB_URI) {
      await mongoose
        .connect(DB_URI)
        .then(() => console.log("server connected to Data Base"))
        .catch((error) => console.log(error));
    } else {
      console.log("Invalid Data Base URL");
    }
  } catch (error) {
    console.log("error while connecting to Data Base", error);
  }
};

ConnectDB();
