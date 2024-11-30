import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Box, Button, TextField, Typography, Alert } from "@mui/material";
import Auth from '../utils/auth';
import { login } from '../api/authAPI';
import type { UserLogin } from '../interfaces/UserLogin';

const Login = () => {
  const [loginData, setLoginData] = useState<UserLogin>({
    username: '',
    password: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  
    // Reset error and success messages
    setError(null);
    setMessage(null);
  
    const { username, password } = loginData;
  
    // Validate inputs
    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }
  
    try {
      // Perform login
      const data = await login(loginData);
  
      // Simulate successful login
      Auth.login(data.token);
  
      // Provide user feedback
      setMessage("Login successful!");
    } catch (err: any) {
      console.error("Failed to login:", err);
  
      // Display error message
      if (err.message === "Invalid username or password") {
        setError(err.message);
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
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
        Login
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
            type=''
            value={loginData.username}
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
            value={loginData.password}
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
          Login
        </Button>
      </form>
    </Box>
  );
  // return (
  //   <div className='form-container'>
  //     <form className='form login-form' onSubmit={handleSubmit}>
  //       <h1>Login</h1>
  //       <div className='form-group'>
  //         <label>Username</label>
  //         <input
  //           placeholder='Username'
  //           className='form-input'
  //           type='text'
  //           name='username'
  //           value={loginData.username || ''}
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div className='form-group'>
  //         <label>Password</label>
  //         <input
  //           placeholder='Password'
  //           className='form-input'
  //           type='password'
  //           name='password'
  //           value={loginData.password || ''}
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div className='form-group'>
  //         <button className='btn btn-primary' type='submit'>
  //           Login
  //         </button>
  //       </div>
  //     </form>
  //   </div>
  // );
};

export default Login;
