import Auth from '../utils/auth';
import type { NewUserData } from '../interfaces/NewUserData';

const retrieveUsers = async () => {
  try {
    const response = await fetch('/api/usersAuth', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`,
      },
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error('invalid user API response, check network tab!');
    }

    return data;
  } catch (err) {
    console.log('Error from data retrieval:', err);
    return [];
  }
};

const addUser = async (userInfo: NewUserData) => {
  try {
    const response = await fetch('/api/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    const data = await response.json();
    
    if (!response.ok) {
      // console.log("Throwing Error")
      // console.log(data)
      // throw new Error('User information not retrieved, check network tab!');
      throw new Error(data.message);
    }

    return data;
  } catch (err) {
    console.log('Error from add new user: ', err);
    // return Promise.reject('Could not add new user');
    return Promise.reject(err);
  }
};

export { retrieveUsers, addUser };
