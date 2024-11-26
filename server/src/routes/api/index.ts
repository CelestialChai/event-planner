import { Router } from 'express';
import { eventRouter } from './event-routes.js';
import { userRouter } from './user-routes.js';
// Temporarily disabled for testing
import { authenticateToken } from '../../middleware/auth.js';

const router = Router();

router.use('/users', userRouter);
// Temporarily disable auth requirement for testing purposes
router.use('/events', authenticateToken, eventRouter);
// router.use('/events', eventRouter);


export default router;
