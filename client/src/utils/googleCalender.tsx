import React, { useState } from 'react';
import { gapi } from 'gapi-script';

// Define the type for a calendar event
interface CalendarEvent {
  summary: string;
  location?: string;
  description?: string;
  start: {
    dateTime: string;
    date?: string;
    timeZone?: string;
  };
  end: {
    dateTime: string;
    date?: string;
    timeZone?: string;
  };
}

const GoogleCalendarIntegration: React.FC = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  // Fetch events from Google Calendar
  const fetchCalendarEvents = async () => {
    try {
      const response = await gapi.client.calendar.events.list({
        calendarId: 'primary',
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: 'startTime',
      });
      setEvents(response.result.items as CalendarEvent[]); // Use the defined type
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  // Add a new event to Google Calendar
  const addCalendarEvent = async (event: CalendarEvent) => {
    try {
      const response = await gapi.client.calendar.events.insert({
        calendarId: 'primary',
        resource: event,
      });
      console.log('Event added:', response.result);
      return response.result;
    } catch (error) {
      console.error('Error adding calendar event:', error);
      throw error;
    }
  };

  // Example usage of adding an event
  const handleAddEvent = async () => {
    const event: CalendarEvent = {
      summary: 'New Event',
      location: 'Online',
      description: 'A new event added via Google Calendar API',
      start: {
        dateTime: new Date().toISOString(),
        timeZone: 'America/Los_Angeles',
      },
      end: {
        dateTime: new Date(new Date().getTime() + 3600000).toISOString(), // 1 hour later
        timeZone: 'America/Los_Angeles',
      },
    };

    try {
      await addCalendarEvent(event);
      fetchCalendarEvents(); // Refresh the list after adding an event
    } catch (error) {
      console.error('Error handling add event:', error);
    }
  };

  return (
    <div>
      <h1>Google Calendar Integration</h1>
      <button onClick={fetchCalendarEvents}>Fetch Events</button>
      <button onClick={handleAddEvent}>Add Event</button>
      <h2>Upcoming Events</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.summary}</strong><br />
            Start: {event.start?.dateTime || event.start?.date}<br />
            End: {event.end?.dateTime || event.end?.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoogleCalendarIntegration;