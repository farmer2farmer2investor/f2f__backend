import express from 'express';
import { createPost, getPost, getTimelinePosts, likePost, userPosts } from '../Controllers/PostController.js';

const router = express.Router();

router.post('/upload', createPost);
router.get('/:id', getPost);
router.get('/:id/posts', userPosts);
router.put("/:id/like", likePost);
router.get("/:id/timeline", getTimelinePosts);
export default router;