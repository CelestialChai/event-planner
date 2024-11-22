import express from 'express';
import {
  getAllEvents,
  getEventsById,
  createEvent,
  updateEvent,
  deleteEvent,
} from '../../controller/event-controller.js';

const router = express.Router();

// GET /users - Get all users
router.get('/', getAllEvents);

// GET /users/:id - Get a user by id
router.get('/:id', getEventsById);

// POST /users - Create a new user
router.post('/', createEvent);

// PUT /users/:id - Update a user by id
router.put('/:id', updateEvent);

// DELETE /users/:id - Delete a user by id
router.delete('/:id', deleteEvent);

export { router as eventRouter };
