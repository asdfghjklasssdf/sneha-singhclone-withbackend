import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'; 
import registrationImage from '../image/rs1.png';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/register', {
        email,
        password
      });
      window.alert('Registration successful', response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed');
      console.error('Registration failed', err);
    }
  };

  const handleGmailRegister = () => {
    window.location.href = 'http://localhost:3000/google'; 
  };
  

  return (
    <div className="form-container">
            <img src={registrationImage} alt="Registration" className="registration-image" />

      <h2 className="form-title">Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
        {error && <p className="error-message">{error}</p>}
      </form>
      <div className="google-register">
        <p>Or register with:</p>
        <button onClick={handleGmailRegister}>Register with Google</button>
        </div>
    </div>
  );
};

export default Register;
