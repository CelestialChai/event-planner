import jwt from 'jsonwebtoken';

export const getNewToken = (id: number, username: string) => {
  const secretKey = process.env.JWT_SECRET_KEY || '';
  return jwt.sign({ id, username }, secretKey, { expiresIn: '1h' }); // Include `id` and `username` in payload
};