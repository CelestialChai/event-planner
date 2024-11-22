import type { Request, Response } from 'express';
import { Event } from '../models/event.js';

// GET /Events
export const getAllEvents = async (_req: Request, res: Response) => {
  try {
    // TODO: Fix to only get all events that matched authenticated ID
    const users = await Event.findAll({});
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// GET /Events/:id
export const getEventsById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await Event.findByPk(id, {
      attributes: { exclude: ['password'] },
    });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// POST /Events
export const createEvent = async (req: Request, res: Response) => {
    const { planner_Id, customer_Id, title, description, location, start_date, budget } = req.body; // Adjust fields based on your Event model
    try {
      const newEvent = await Event.create({
        planner_Id,
        customer_Id,
        title,
        description,
        location,
        start_date,
        budget,
      });
      res.status(201).json(newEvent);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
  

// PUT /Events/:id
export const updateEvent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, location, date, budget } = req.body;
  try {
    const event = await Event.findByPk(id);
    if (event) {
        event.title = title;
        event.description = description;
        event.location = location;
        event.start_date = date;
        event.budget = budget;
      await event.save();
      res.json(event);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// /DELETE /Events/:id
export const deleteEvent = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await Event.findByPk(id);
    if (user) {
      await user.destroy();
      res.json({ message: 'User deleted' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
