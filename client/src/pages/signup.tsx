import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Box, Button, TextField, Typography, Alert } from "@mui/material";
import Auth from '../utils/auth';
import { addUser } from '../api/userAPI';
import type { NewUserData } from '../interfaces/NewUserData';

const SignUp = () => {
  const [userData, setUserData] = useState<NewUserData>({
    username: '',
    email: '',
    password: '',
  });

  // Added error state for signing up new user
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  
    setMessage(null);
    setError(null);
  
    // SIMPLE VALIDATION:
    const { username, email, password } = userData;
    if (!username || !email || !password) {
      setError('Please complete all fields!');
      return;
    }
  
    try {
      const response = await addUser(userData);

      // If the response is not okay, handle the error
      if (!response.ok) {
        const errorData = await response.json(); // Parse the error response
        throw new Error(errorData.message || 'Failed to create user');
      }
  
      const data = response;

      Auth.login(data.token); // Assuming `token` is returned after user creation
  
      setMessage('User created successfully!');
    } catch (err: any) {
      console.error('Failed to create user:', err.message);
      setError(err.message); // Display the error message from the backend
    }
  };

  return (
    <Box
      sx={{
        maxWidth: "400px",
        margin: "2rem auto",
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        backgroundColor: "white",
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Create User
      </Typography>
      {error && (
        <Alert severity="error" sx={{ marginBottom: "1rem" }}>
          {error}
        </Alert>
      )}
      {message && (
        <Alert severity="success" sx={{ marginBottom: "1rem" }}>
          {message}
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
        <Box sx={{ marginBottom: "1rem" }}>
          <TextField
            fullWidth
            label="Username"
            name="username"
            type='' //needs to be blank for styling reasons
            value={userData.username}
            onChange={handleChange}
            variant="outlined"
          />
        </Box>
        <Box sx={{ marginBottom: "1rem" }}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type='' //needs to be blank for styling reasons
            value={userData.email}
            onChange={handleChange}
            variant="outlined"
          />
        </Box>
        <Box sx={{ marginBottom: "1rem" }}>
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={userData.password}
            onChange={handleChange}
            variant="outlined"
          />
        </Box>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ padding: "0.75rem" }}
        >
          Create Account
        </Button>
      </form>
    </Box>
  );
};

export default SignUp;
