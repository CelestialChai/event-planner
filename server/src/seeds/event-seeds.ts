import { Event } from '../models/index.js';

export const seedEvents = async () => {
  await Event.bulkCreate(
    [
        {
          "planner_Id": 1,
          "customer_Id": 1,
          "title": "Corporate Annual Meeting",
          "description": "An annual meeting to discuss corporate strategies and performance.",
          "location": "Grand Hotel Conference Room",
          "start_date": new Date("2024-12-05T09:00:00Z"),
          "budget": 10000
        },
        {
          "planner_Id": 1,
          "customer_Id": 2,
          "title": "Wedding Ceremony",
          "description": "A beautiful wedding ceremony with a grand reception.",
          "location": "Sunset Gardens",
          "start_date": new Date("2024-12-10T15:00:00Z"),
          "budget": 20000
        },
        {
          "planner_Id": 1,
          "customer_Id": 3,
          "title": "Charity Gala",
          "description": "A charity gala to raise funds for underprivileged children.",
          "location": "City Hall Ballroom",
          "start_date": new Date("2024-12-15T19:00:00Z"),
          "budget": 15000
        },
        {
          "planner_Id": 3,
          "customer_Id": 2,
          "title": "Birthday Party",
          "description": "A private birthday party with family and close friends.",
          "location": "Happy Place Banquet Hall",
          "start_date": new Date("2024-12-18T18:30:00Z"),
          "budget": 3000
        },
        {
          "planner_Id": 1,
          "customer_Id": 2,
          "title": "Networking Event",
          "description": "An evening networking event for professionals in the tech industry.",
          "location": "TechHub Downtown",
          "start_date": new Date("2024-12-20T17:00:00Z"),
          "budget": 5000
        },
        {
          "planner_Id": 3,
          "customer_Id": 1,
          "title": "Product Launch",
          "description": "Launch event for a new line of eco-friendly products.",
          "location": "Innovation Center Auditorium",
          "start_date": new Date("2024-12-22T10:00:00Z"),
          "budget": 8000
        }
      ]
      
  )
}