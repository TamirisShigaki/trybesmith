import { Router } from 'express';
import OrderController from '../controllers/Oder.controller';

const router = Router();

const ProductController = new OrderController();

router.get('/', ProductController.getAll);

export default router;