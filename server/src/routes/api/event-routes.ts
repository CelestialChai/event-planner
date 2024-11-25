import express from 'express';
import {
  getAllEvents,
  getEventsById,
  createEvent,
  updateEvent,
  deleteEvent,
} from '../../controller/event-controller.js';

const router = express.Router();

// GET /event - Get all event
router.get('/', getAllEvents);

// GET /event/:id - Get a event by id
router.get('/:id', getEventsById);

// POST /event - Create a new event
router.post('/', createEvent);

// PUT /event/:id - Update a event by id
router.put('/:id', updateEvent);

// DELETE /event/:id - Delete a event by id
router.delete('/:id', deleteEvent);

export { router as eventRouter };
