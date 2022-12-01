import { Router } from 'express';
import verifyToken from '../../Middleware/Auth.middleware';
import { AddBookController } from '../../Controller/Book/addBook.service';
const router = Router();

router.post('/addbooks', verifyToken, AddBookController)

export default router