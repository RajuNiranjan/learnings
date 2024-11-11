import mongoose from "mongoose";
import { ENV_VAR } from "../utils/env_var.js";
import { error } from "console";

const Connect_DB = async () => {
  try {
    const { DB_URI } = ENV_VAR;
    if (DB_URI) {
      await mongoose
        .connect(DB_URI)
        .then(() => console.log("server connected to Data Base"))
        .catch((e) => console.log(error));
    }
  } catch (error) {
    console.log(error);
  }
};

Connect_DB();
