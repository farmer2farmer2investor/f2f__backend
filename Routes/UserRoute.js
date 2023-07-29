import express from 'express';
import { followUser, unfollowUser } from '../Controllers/UserController.js';

const router = express.Router();

router.put('/:id/follow', followUser);
router.put('/:id/unfollow', unfollowUser);

export default router;