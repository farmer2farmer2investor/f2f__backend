import express from 'express';
import { registerfarmer, logIn } from '../Controllers/AuthController.js';

const router = express.Router();

router.post('/register', registerfarmer);
router.post('/login', logIn);

export default router;