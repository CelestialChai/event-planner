import React, { useState } from 'react';
import axios from 'axios';
import './RSVPform.css';

// Define the RSVP interface
interface RSVP {
  name: string;
  email: string;
  attending: boolean; // Whether the person is attending or not
  guests: number;     // Number of additional guests the person is bringing
  food: string;       // The food preference (vegetarian, non-vegetarian, etc.)
}

// Define the Errors interface
interface FormErrors {
  name?: string;
  email?: string;
  attending?: string;
  guests?: string;
  food?: string;
}

const RSVPForm: React.FC = () => {
  const [formData, setFormData] = useState<RSVP>({
    name: '',
    email: '',
    attending: false,  // Default value is false (not attending)
    guests: 0,
    food: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // Handle form changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      // For checkbox input, we set the value as boolean (true/false)
      setFormData((prevState) => ({
        ...prevState,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else if (name === 'attending') {
      // For 'attending' we map the value of "yes" or "no" to a boolean
      setFormData((prevState) => ({
        ...prevState,
        attending: value === 'yes',
      }));
    } else {
      // For all other fields, update their respective values
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let formIsValid = true;

    // Validate name
    if (!formData.name) {
      newErrors.name = 'Name is required';
      formIsValid = false;
    }

    // Validate email
    if (!formData.email) {
      newErrors.email = 'Email is required';
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      formIsValid = false;
    }

    // Validate attending field
    if (!formData.attending && formData.attending !== false) {
      newErrors.attending = 'Please confirm if you are attending';
      formIsValid = false;
    }

    // Validate guests (only if attending)
    if (formData.attending && formData.guests <= 0) {
      newErrors.guests = 'Please specify the number of guests';
      formIsValid = false;
    } else if (formData.guests < 0) {
      newErrors.guests = 'Number of guests must be a positive number';
      formIsValid = false;
    }

    // Validate food choice
    if (!formData.food) {
      newErrors.food = 'Please select a food choice';
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, send data to the server or handle submission
      try {
        await axios.post('/submit', formData);
        alert('RSVP submitted successfully!');
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        alert('There was an error submitting the RSVP');
      }
    } else {
      alert('Please fix the errors in the form.');
    }
  };

  return (
    <div className="RSVPform">
    <form onSubmit={handleSubmit}>
     <h1>RSVP Form</h1>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div>
        <label>Attending</label>
        <select
          name="attending"
          value={formData.attending ? 'yes' : 'no'}
          onChange={handleChange}
          required
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {errors.attending && <p className="error">{errors.attending}</p>}
      </div>

      {formData.attending && (
        <div>
          <label>Guests</label>
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
          />
          {errors.guests && <p className="error">{errors.guests}</p>}
        </div>
      )}

      <div>
        <label>Food</label>
        <select
          name="food"
          value={formData.food}
          onChange={handleChange}
          required
        >
          <option value="">Select a meal choice</option>
          <option value="meat">Meat</option>
          <option value="fish">Fish</option>
          <option value="chicken">Chicken</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="gluten-free">Gluten Free</option>
        </select>
        {errors.food && <p className="error">{errors.food}</p>}
      </div>

      <button type="submit">Submit RSVP</button>
    </form>
    </div>
  );
};

export default RSVPForm;
