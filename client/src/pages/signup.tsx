import { useState, type FormEvent, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

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
    // When user submits, if they haven't completed all fields, set error state and return out of submit event handler
    const { username, email, password } = userData;
    if (!username || !email || !password) {
      setError('Please complete all fields!');
      return;
    } else {
      setError('');
    }

    try {
      const response  = await addUser(userData);
      Auth.login(response.token);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create user');
      }

      console.log(response)

      setMessage('User created successfully!');
      navigate('/create');
    } catch (err) {
      console.error('Failed to login', err);
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
