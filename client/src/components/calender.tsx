import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer, Event, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Button, Toolbar } from "@mui/material";

interface CalendarEvent extends Event {
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
}

const localizer = momentLocalizer(moment);

const CalendarComponent: React.FC = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  useEffect(() => {
    // Initialize Google Sign-In
    window.google?.accounts.id.initialize({
      client_id: CLIENT_ID,
      callback: handleCredentialResponse,
    });

    // Render the Google Sign-In button
    window.google?.accounts.id.renderButton(
      document.getElementById("google-signin-button"),
      { theme: "outline", size: "large" }
    );
  }, []);

  const handleCredentialResponse = async (response: any) => {
    console.log("Encoded JWT ID token:", response.credential);
    setIsSignedIn(true);
    fetchGoogleCalendarEvents(response.credential);
  };

  const fetchGoogleCalendarEvents = async (token: string) => {
    try {
      const res = await fetch(
        "https://www.googleapis.com/calendar/v3/calendars/primary/events",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();

      // Map Google events to Big Calendar events
      const mappedEvents = data.items.map((event: any) => ({
        title: event.summary || "Untitled Event",
        start: new Date(event.start.dateTime || event.start.date),
        end: new Date(event.end.dateTime || event.end.date),
        allDay: !event.start.dateTime, // If dateTime is undefined, it's an all-day event
      }));
      setEvents(mappedEvents);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleEventClick = (event: CalendarEvent) => {
    alert(`Event: ${event.title}`);
  };

  const eventStyleGetter = (
    event: CalendarEvent,
    _start: Date,
    _end: Date,
    _isSelected: boolean
  ) => {
    const style = {
      backgroundColor: event.allDay ? "lightblue" : "lightgreen",
      borderRadius: "5px",
      color: "white",
      border: "none",
      padding: "5px",
    };
    return { style };
  };

  const CustomToolbar: React.FC<any> = (props) => {
    const { label, onNavigate } = props;
    return (
      <Toolbar>
        <Button onClick={() => onNavigate("PREV")}>Previous</Button>
        <h3 style={{ flex: 1, textAlign: "center" }}>{label}</h3>
        <Button onClick={() => onNavigate("NEXT")}>Next</Button>
      </Toolbar>
    );
  };

  return (
    <div style={{ height: "80vh", margin: "20px" }}>
      {!isSignedIn ? (
        <div>
          <h1>Sign in with Google to Access Your Calendar</h1>
          <div id="google-signin-button"></div>
        </div>
      ) : (
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "100%" }}
          views={[Views.MONTH, Views.WEEK, Views.DAY]}
          onSelectEvent={handleEventClick}
          eventPropGetter={eventStyleGetter}
          components={{
            toolbar: CustomToolbar,
          }}
        />
      )}
    </div>
  );
};

export default CalendarComponent;