
import React, { useState } from 'react';
import axios from 'axios';
import registrationImage from '../image/l1.png';

const Login = ({ history }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });


  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/login', {
        email,
        password,
      });

      window.alert('Login successful:', response.data);

      history.push('/home');
    } catch (err) {
    }
  };

  const handleGmailRegister = () => {
    window.location.href = 'http://localhost:3000/google'; 
  };
  

  return (
    <div>
      <h2>Login</h2>
      <img src={registrationImage} alt="Registration" className="registration-image" />

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>    
        <div className="google-register">
        <p>Or register with:</p>
        <button onClick={handleGmailRegister}>Register with Google</button>
        </div>
    </div>
  );
};

export default Login;
