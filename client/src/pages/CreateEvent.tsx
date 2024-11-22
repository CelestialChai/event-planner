import useState from 'react';

const CreateEvent = () => {
    return(
        <>
            <h1>Create New Event</h1>
            <form>
                <div>
                    <label htmlFor='eventName'>Event Name</label>
                    <input type="text" id="eventName"></input>
                    <label htmlFor='startDate'>Start Date & Time</label>
                    <input type="datetime-local" id="startDate"></input>
                    <div>
                        <label htmlFor='venueName'>Venue Name</label>
                        <input type="text" id="venueName"></input>
                        <label htmlFor='venueAddress'>Address</label>
                        <input type="text" id="venueAddress"></input>
                    </div>
                    <label htmlFor='rsvpRequired'>RSVP Required</label>
                    <input type="checkbox" id="rsvpRequired"></input>
                    <label htmlFor='rsvpRequired'>Max Attendees</label>
                    <input type="number" id="rsvpRequired"></input>
                    <label htmlFor='guestList'>Guests / Attendees</label>
                    <textarea id="guestList"></textarea>
                </div>
            </form>
        </>
    )
};

export default CreateEvent;
