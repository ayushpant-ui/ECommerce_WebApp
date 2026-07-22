import express from 'express';
import UserPost from '../controllers/user.controller.js';
const router = express.Router();
router.post('/', UserPost);
export default router;