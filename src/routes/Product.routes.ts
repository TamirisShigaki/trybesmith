import { Router } from 'express';
import ProductController from '../controllers/Product.controller';

const router = Router();

const postController = new ProductController();

router.post('/', postController.create);
router.get('/', postController.getAll);

export default router;