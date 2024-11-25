import type { Request, Response } from 'express';
import { Event } from '../models/event.js';
import { User } from '../models/user.js';
import { Op } from 'sequelize';

// GET /Events
// export const getAllEvents = async (_req: Request, res: Response) => {
//   try {
//     // TODO: Fix to only get all events that matched authenticated ID
//     const users = await Event.findAll({});
//     res.json(users);
//   } catch (error: any) {
//     res.status(500).json({ message: error.message });
//   }
// };

export const getAllEvents = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id; // Get the logged-in user's ID from req.user

    if (!userId) {
      return res.status(400).json({ message: 'User ID is required' });
    }

    // Fetch events where the user is either the planner or customer
    const events = await Event.findAll({
      where: {
        [Op.or]: [
          { planner_Id: userId },
          { customer_Id: userId },
        ],
      },
      include: [
        { model: User, as: 'planner', attributes: ['id', 'username', 'email'] },
        { model: User, as: 'customer', attributes: ['id', 'username', 'email'] },
      ],
    });

    return res.status(200).json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// GET /Events/:id
export const getEventsById = async (req: Request, res: Response) => {
  const { id } = req.params; // Event ID
  const userId = req.user?.id; // Logged-in user's ID from authentication middleware

  if (!userId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    // Find the event and check if the user is either the planner or customer
    const event = await Event.findOne({
      where: {
        id, // Match the event ID
        [Op.or]: [{ planner_Id: userId }, { customer_Id: userId }], // Ensure user is related to the event
      },
      include: [
        { model: User, as: 'planner', attributes: ['id', 'username', 'email'] },
        { model: User, as: 'customer', attributes: ['id', 'username', 'email'] },
      ],
    });

    if (event) {
      return res.json(event); // Return the event if the user is authorized
    } else {
      return res.status(404).json({ message: 'Event not found or access denied' }); // User is not related or event doesn't exist
    }
  } catch (error: any) {
    console.error('Error fetching event:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


// POST /Events
export const createEvent = async (req: Request, res: Response) => {
    const { customer_Id = null, title, description, location, start_date, budget } = req.body; 
    const planner_Id = req.user?.id;

    if (!planner_Id) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

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
      return res.status(201).json(newEvent);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  };
  

// PUT /Events/:id
export const updateEvent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { customer_Id, title, description, location, date, budget } = req.body;
  const userId = req.user?.id; // Logged-in user's ID from authentication middleware

  if (!userId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const event = await Event.findByPk(id);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Check if the user is either the planner or the customer
    if (event.planner_Id !== userId && event.customer_Id !== userId) {
      return res.status(403).json({ message: 'You do not have permission to update this event' });
    }

    // Allow updates if the user is the planner
    if (event.planner_Id === userId) {
      if (customer_Id !== undefined) {
        event.customer_Id = customer_Id;
      }
    }

    // Update the event's details
    if (title !== undefined) event.title = title;
    if (description !== undefined) event.description = description;
    if (location !== undefined) event.location = location;
    if (date !== undefined) event.start_date = date;
    if (budget !== undefined) event.budget = budget;

    await event.save();
    return res.json(event);
  } catch (error: any) {
    console.error('Error updating event:', error);
    return res.status(400).json({ message: error.message });
  }
};

// /DELETE /Events/:id
export const deleteEvent = async (req: Request, res: Response) => {
  const { id } = req.params; // Event ID
  const userId = req.user?.id; // Logged-in user's ID from authentication middleware

  if (!userId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const event = await Event.findByPk(id);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Check if the logged-in user is the planner
    if (event.planner_Id !== userId) {
      return res.status(403).json({ message: 'You do not have permission to delete this event' });
    }

    await event.destroy(); // Delete the event
    return res.status(200).json({ message: 'Event successfully deleted' });
  } catch (error: any) {
    console.error('Error deleting event:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};