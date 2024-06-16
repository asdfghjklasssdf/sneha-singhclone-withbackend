
import React from 'react';
import axios from 'axios';

const Logout = ({ history }) => {
  const handleLogout = async () => {
    try {
      const response = await axios.post('/logout');
      console.log('Logout successful:', response.data);
      history.push('/login');
    } catch (err) {
      console.error('Logout error:', err.response?.data);
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
