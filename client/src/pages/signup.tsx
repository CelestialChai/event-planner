import { useState, type FormEvent, type ChangeEvent } from 'react';
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
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
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

      console.log(response)
  
      // If the response is not okay, handle the error
      if (!response.ok) {
        console.log("reponse")
        console.log(response)
        const errorData = await response.json(); // Parse the error response
        throw new Error(errorData.message || 'Failed to create user');
      }
  
      const data = await response.json();
      Auth.login(data.token); // Assuming `token` is returned after user creation
  
      setMessage('User created successfully!');
    } catch (err: any) {
      console.error('Failed to create user:', err.message);
      console.log(err.Error)
      setError(err.message); // Display the error message from the backend
    }
  };

  return (
    <div className='form-container'>
      {error && (
        <div className='card text-danger p-3'>
          {error}
        </div>
      )}
      <form className='form add-user-form' onSubmit={handleSubmit}>
        <h1>Create User</h1>
        <div className='form-group'>
          <label>Username</label>
          <input
            placeholder='Username'
            className='form-input'
            type='text'
            name='username'
            value={userData.username || ''}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input
            placeholder='Email'
            className='form-input'
            type='text'
            name='email'
            value={userData.email || ''}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            placeholder='Password'
            className='form-input'
            type='password'
            name='password'
            value={userData.password || ''}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-primary' type='submit'>
            Login
          </button>
        </div>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SignUp;
