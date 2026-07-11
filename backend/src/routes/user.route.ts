import express from 'express';
import { userPost } from '../controllers/user.controller';
const router = express.Router();
router.post('/', userPost);
export default router;