import { Router } from "express";
import getUserController from "../../Controller/User/getUser.service";
import verifyToken from "../../Middleware/Auth.middleware";

const router = Router();

// Register
router.get('/getuser', verifyToken, getUserController)


export default router