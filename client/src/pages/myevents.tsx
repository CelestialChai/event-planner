import React, { useState } from "react";
import { Tabs, Tab, Box, List, ListItem, ListItemText, Button, Typography } from "@mui/material";
import CalendarComponent from "../components/calender";
import { useEventContext } from "../context/EventContext";

const MyEvents: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { events, fetchEvents } = useEventContext(); // Access events and fetch function from context

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* Tabs for switching views */}
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Event List" />
        <Tab label="Calendar" />
      </Tabs>

      {/* Tab content */}
      <Box sx={{ mt: 3 }}>
        {activeTab === 0 && (
          <Box>
            <Typography variant="h4" gutterBottom>
              Your Event List
            </Typography>

            {/* Sync Button */}
            <Button
              variant="contained"
              color="primary"
              onClick={fetchEvents}
              sx={{ mb: 2 }}
            >
              Sync Calendar
            </Button>

            {/* Event List */}
            {events.length > 0 ? (
              <List>
                {events.map((event, index) => (
                  <ListItem key={index} sx={{ borderBottom: "1px solid #ddd" }}>
                    <ListItemText
                      primary={event.summary}
                      secondary={
                        <>
                          <Typography component="span">
                            <strong>Start:</strong> {event.start?.dateTime || event.start?.date}
                          </Typography>
                          <br />
                          <Typography component="span">
                            <strong>End:</strong> {event.end?.dateTime || event.end?.date}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography>No events found. Please sync your calendar.</Typography>
            )}
          </Box>
        )}

        {/* Calendar Tab */}
        {activeTab === 1 && <CalendarComponent />}
      </Box>
    </Box>
  );
};

export default MyEvents;