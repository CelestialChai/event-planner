import React, { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';

// Define the type for a calendar event
interface CalendarEvent {
  summary: string;
  location?: string;
  description?: string;
  start: {
    dateTime?: string; // For timed events
    date?: string; // For all-day events
    timeZone?: string;
  };
  end: {
    dateTime?: string; // For timed events
    date?: string; // For all-day events
    timeZone?: string;
  };
}

const GoogleCalendarIntegration: React.FC = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  // Initialize gapi client
  useEffect(() => {
    const initializeGapi = async () => {
      gapi.load('client:auth2', async () => {
        try {
          await gapi.client.init({
            apiKey: import.meta.env.VITE_GOOGLE_API_KEY, // Your Google API Key
            clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID, // Your Google Client ID
            scope: 'https://www.googleapis.com/auth/calendar.readonly',
          });
          console.log('Google API initialized successfully');
        } catch (error) {
          console.error('Error initializing Google API:', error);
        }
      });
    };

    initializeGapi();
  }, []);

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

      setEvents(response.result.items as CalendarEvent[]);
      console.log('Fetched events:', response.result.items);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  return (
    <div>
      <h1>Google Calendar Integration</h1>
      <button onClick={fetchCalendarEvents}>Fetch Events</button>
      <h2>Upcoming Events</h2>
      <ul>
        {events.length > 0 ? (
          events.map((event, index) => (
            <li key={index}>
              <strong>{event.summary}</strong>
              <br />
              Start: {event.start?.dateTime || event.start?.date}
              <br />
              End: {event.end?.dateTime || event.end?.date}
            </li>
          ))
        ) : (
          <p>No events found. Please sync your calendar.</p>
        )}
      </ul>
    </div>
  );
};

console.log(import.meta.env.VITE_GOOGLE_API_KEY);
console.log(import.meta.env.VITE_GOOGLE_CLIENT_ID);


export default GoogleCalendarIntegration;