import mongoose from "mongoose";
import { ENV_VAR } from "./utils.js";

const ConnectDB = async () => {
  try {
    if (!ENV_VAR.DB_URI) {
      console.error("No Database URI provided in ENV_VAR.DB_URI");
    }

    await mongoose
      .connect(ENV_VAR.DB_URI)
      .then(() => console.log("server connected to data base"))
      .catch((e) => console.log(e));
  } catch (error) {
    console.log(error);
  }
};

ConnectDB();
