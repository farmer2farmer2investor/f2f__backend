import express from 'express';
import { createPost } from '../Controllers/PostController.js';

const router = express.Router();

router.post('/upload', createPost);