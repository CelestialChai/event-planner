import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  id: number;
  username: string;
}

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];
    const secretKey = process.env.JWT_SECRET_KEY || '';

    console.log('Authorization Header:', authHeader);
    console.log('Extracted Token:', token);
    console.log('Secret Key:', secretKey);

    try {
      const user = jwt.verify(token, secretKey) as JwtPayload;
      console.log('Decoded User:', user);
      req.user = user; // Attach the user's info to req.user
      next();
    } catch (error) {
      console.error('Token Verification Error:', error);
      res.status(403).json({ message: 'Forbidden' });
    }
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};
