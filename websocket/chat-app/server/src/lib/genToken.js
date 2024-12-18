import jwt from "jsonwebtoken";
import { ENV_VAR } from "./utils.js";

export const genToken = (userId) => {
  const payload = { userId };
  return jwt.sign(payload, ENV_VAR.JWT_SECRET_KEY, {
    expiresIn: ENV_VAR.JWT_EXPIRES_IN,
  });
};
