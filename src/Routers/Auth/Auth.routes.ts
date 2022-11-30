import { Router } from "express";
import RegisterController from "../../Controller/Auth/Register.service";
import {LoginController} from "../../Controller/Auth/Login.service";

const router = Router();

// Register
router.post('/register', RegisterController)

//Login
router.post('/login', LoginController)

export default router