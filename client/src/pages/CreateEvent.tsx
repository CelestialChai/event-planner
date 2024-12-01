import { useState } from "react";
import axios from "axios";
import './CreateEvent.css';


const CreateEvent = () => {
    //State to hold the form data
    const [formData, setFormData] = useState({
        eventName: "",
        eventDate: "",
        eventTime: "",
        venueAddress: "",
        rsvpRequired: false,
        maxAttendees: 0,
        guestList: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;
        // Update the form data based on the input type
        setFormData((prevState) => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value,
        }));
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
       try {
        const response = await axios.post('/api/events', formData);//check API endpoint********
       alert ('Event Created Successfully');
       console.log(response.data);
    } catch (error) {
        console.error('Event Creation Failed:', error);
        alert('Event Creation Failed');
        console.log(error);
    }
    };
    return (
        <div>
        <div className="create-event">
            <form onSubmit={handleSubmit}>
            <h1>Create New Event</h1>
                <div>
                    <label htmlFor="eventName">Event Name</label>
                    <input
                        type="text"
                        id="eventName"
                        name="eventName"
                        value={formData.eventName}
                        onChange={handleChange}
                        required
                        />
                </div>
                <div>
                    <label htmlFor="eventDate">Event Date</label>
                    <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        required
                        />
                </div>
                <div>
                    <label htmlFor="eventTime">Event Time</label>
                    <input
                        type="time"
                        id="eventTime"
                        name="eventTime"
                        value={formData.eventTime}
                        onChange={handleChange}
                        required
                        />
                </div>
                <div>
                    <label htmlFor="venueAddress">Venue Address</label>
                    <input
                        type="text"
                        id="venueAddress"
                        name="venueAddress"
                        value={formData.venueAddress}
                        onChange={handleChange}
                        required
                        />
                </div>
                <div>
                    <label>
                        RSVP Required
                        <input
                            type="checkbox"
                            name="rsvpRequired"
                            checked={formData.rsvpRequired}
                            onChange={handleChange}
                            />
                    </label>
                    </div>
                <div>
                    <label htmlFor="maxAttendees">Max Attendees</label>
                    <input
                        type="number"
                        id="maxAttendees"
                        name="maxAttendees"
                        value={formData.maxAttendees}
                        min="0"
                        onChange={handleChange}
                        required={formData.rsvpRequired}
                        />
                </div>
                <div>
                    <label htmlFor="guestList">Guest List</label>
                    <input
                        type="text"
                        id="guestList"
                        name="guestList"
                        value={formData.guestList}
                        min="0"
                        onChange={handleChange}
                        required
                        />
                </div>
                <button type="submit">Create Event</button>
            </form>
        </div>
         {/* Footer */}
      <footer className="py-6 bg-gray-800 text-center text-gray-400">
        <p>&copy; 2024 Tie Your Knot. All Rights Reserved.</p>
      </footer>
        </div>
    );
};

export default CreateEvent;