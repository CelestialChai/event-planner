import { Router } from 'express';
import { eventRouter } from './event-routes.js';
import { userRouter } from './user-routes.js';

const router = Router();

router.use('/users', userRouter);
router.use('/event', eventRouter);


export default router;
