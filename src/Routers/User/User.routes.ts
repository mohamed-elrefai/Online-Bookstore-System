import { Router } from "express";
import getUserController from "../../Controller/User/getUser.service";
import { updateUserController } from "../../Controller/User/updateUser.service";
import { DeleteUserController } from "../../Controller/User/deleteUser.service";
import verifyToken from "../../Middleware/Auth.middleware";

const router = Router();

// Get User
router.get('/getuser', verifyToken, getUserController)

// Update User
router.post('/updateuser', verifyToken, updateUserController)

// Delete User
router.post('/deleteuser', verifyToken, DeleteUserController)

export default router