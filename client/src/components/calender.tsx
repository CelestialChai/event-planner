import React from "react";
import { Calendar, momentLocalizer, Event, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Button, Toolbar } from "@mui/material";

// Define the event type
interface CalendarEvent extends Event {
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
}

const localizer = momentLocalizer(moment);

const events: CalendarEvent[] = [
  {
    title: "Meeting",
    start: new Date(2024, 10, 25, 10, 0), // Nov 25, 2024, 10:00 AM
    end: new Date(2024, 10, 25, 12, 0),   // Nov 25, 2024, 12:00 PM
    allDay: false,
  },
  {
    title: "Conference",
    start: new Date(2024, 10, 26),
    end: new Date(2024, 10, 28),
    allDay: true,
  },
];

const CalendarComponent: React.FC = () => {
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
    </div>
  );
};

export default CalendarComponent;