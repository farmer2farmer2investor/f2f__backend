import express from 'express';
import { followUser, getUser, unfollowUser } from '../Controllers/UserController.js';

const router = express.Router();

router.get('/:id', getUser)
router.put('/:id/follow', followUser);
router.put('/:id/unfollow', unfollowUser);

export default router;