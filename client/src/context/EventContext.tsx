import React, { createContext, useContext, useState, useEffect } from 'react';
import { gapi } from 'gapi-script';

// Define the type for a calendar event
export interface CalendarEvent {
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

// Define the type for the context value
interface EventContextType {
  events: CalendarEvent[];
  fetchEvents: () => Promise<void>;
}

// Create the EventContext
const EventContext = createContext<EventContextType | undefined>(undefined);

// Create a Provider component
export const EventProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  useEffect(() => {
    // Initialize GAPI when the component mounts
    const initializeGapi = async () => {
      gapi.load('client:auth2', async () => {
        try {
          await gapi.client.init({
            apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
            clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
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

  // Function to fetch events from Google Calendar
  const fetchEvents = async () => {
    try {
      const response = await gapi.client.calendar.events.list({
        calendarId: 'primary',
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: 'startTime',
      });

      console.log('API Response:', response);

      if (response.result && response.result.items) {
        setEvents(response.result.items as CalendarEvent[]);
      } else {
        console.warn('No events found in the response');
        setEvents([]);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
      setEvents([]);
    }
  };

  return (
    <EventContext.Provider value={{ events, fetchEvents }}>
      {children}
    </EventContext.Provider>
  );
};

// Hook to use the EventContext
export const useEventContext = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEventContext must be used within an EventProvider');
  }
  return context;
};