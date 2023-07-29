import express from 'express';
import { createPost, getPost, likePost } from '../Controllers/PostController.js';

const router = express.Router();

router.post('/upload', createPost);
router.get('/:id', getPost);
router.put("/:id/like", likePost);
export default router;