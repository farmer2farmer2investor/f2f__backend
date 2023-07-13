import express from 'express';
import { registerfarmer } from '../Controllers/AuthController.js';

const router = express.Router();

router.post('/register', registerfarmer);

export default router;