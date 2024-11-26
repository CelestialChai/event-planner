import express from 'express';
import { createUser } from '../../controller/user-controller.js';

const router = express.Router();

// POST /users - Create a new user
router.post('/', createUser);

export { router as userRouter }