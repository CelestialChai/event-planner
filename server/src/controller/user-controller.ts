import type { Request, Response } from 'express';
import Router from 'express';
import { User } from '../models/user.js';
import { getNewToken } from '../helpers/index.js';

const router = Router();

// POST /users - Create a new user
export const createUser = async (req: Request, res: Response) => {
  const { id, username, email, password } = req.body;
  try {
    const newUser = await User.create({ username, email, password });

    const token = getNewToken(id, username);
    res.status(201).json({ ...newUser, token });
  } catch (error: any) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      res.status(400).json({ message: 'Username or email already exists' });
    }
    res.status(500).json({ message: 'Internal server error' });
  }
};

export { router as userRouter };
