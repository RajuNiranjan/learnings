import express from "express";
import { Login, LogOut, Register } from "../controllers/user.controller.js";

export const AuthRoute = express.Router();

AuthRoute.post("/register", Register);
AuthRoute.post("/login", Login);
AuthRoute.post("/logout", LogOut);
