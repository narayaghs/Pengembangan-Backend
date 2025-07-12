import express from 'express';
import { getCakes, createCake, updateCake, deleteCake } from '../controllers/cakeController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();
router.get('/', verifyToken, getCakes);
router.post('/', verifyToken, createCake);
router.put('/:id', verifyToken, updateCake);
router.delete('/:id', verifyToken, deleteCake);
export default router;
